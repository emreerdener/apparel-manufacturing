export interface SageProduct {
    id: string;
    name: string;
    description: string;
    imageUrl?: string;
    price?: number;
    supplierId?: string;
}

export interface SageProductDetail extends SageProduct {
    fullDescription?: string;
    colors?: string[];
    sizes?: string[];
    supplierId?: string;
    itemCode?: string;
}

export class SageClient {
    private baseUrl: string;
    private loginId: string;
    private password: string;
    private accNum: string;

    constructor() {
        this.baseUrl = (process.env.SAGE_API_BASE_URL || 'https://www.sagemember.com/api/').replace(/['"]/g, '');
        this.loginId = process.env.SAGE_API_LOGIN_ID || '';
        this.password = process.env.SAGE_API_PASSWORD || '';
        this.accNum = process.env.SAGE_ACCOUNT_NUMBER || '';

        // Check for API Key if standard auth fails
        // this.apiKey = process.env.SAGE_API_KEY; 
    }

    private async fetch(serviceId: number, data: any = {}) {
        // Standard endpoint for Connect API
        const url = this.baseUrl;

        const payload = {
            serviceId: serviceId,
            apiVer: 100, // Reverted to 100 for compatibility with other services (like 103)
            auth: {
                acctId: this.accNum,
                loginId: this.loginId,
                password: this.password, // Some docs say 'password', some 'key'. sending both to be safe or just key if I had it.
                // based on user input, it asked for 'key'. 
                // In .env we have SAGE_API_KEY.
                key: process.env.SAGE_API_KEY || ''
            },
            ...data
        };

        // Clean up empty auth fields if necessary
        if (!payload.auth.key) delete payload.auth.key;
        if (!payload.auth.password) delete payload.auth.password;

        console.log(`[SAGE] POST ${serviceId} to ${url}`);

        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        });

        if (!res.ok) {
            const text = await res.text();
            console.error(`[SAGE] Error ${res.status}: ${text.substring(0, 500)}`);
            throw new Error(`SAGE API Error ${res.status}: ${text}`);
        }

        const text = await res.text();
        try {
            return JSON.parse(text);
        } catch (e) {
            console.error(`[SAGE] Invalid JSON response: ${text.substring(0, 500)}`);
            throw new Error('Invalid JSON response from SAGE');
        }
    }

    async searchProducts(query: string): Promise<SageProduct[]> {
        try {
            // Mapping 'query' to the search object
            const response = await this.fetch(103, {
                search: {
                    keywords: query
                }
            });

            // Response likely has a specific structure, e.g. { xml: "..." } or { products: [...] }
            // I will log the response to see the structure and return an empty list if mapping fails momentarily.
            // console.log('[SAGE] Search Response:', JSON.stringify(response).substring(0, 200));

            // Attempting to map based on common SAGE fields. 
            // We might need to adjust this after seeing the first successful response.
            // Keys are TitleCase as per logs: ProdEID, PrName, ThumbPic
            const items = response.Products || response.data || [];

            if (Array.isArray(items)) {
                return items.map((item: any) => ({
                    id: String(item.ProdEID || item.prodEId || item.id),
                    name: item.PrName || item.name,
                    description: item.Desc || `Item #${item.SPC || item.spc || 'N/A'}`,
                    imageUrl: item.ThumbPic || item.thumbPic || item.pic,
                    price: parseFloat(item.Prc || item.prc) || 0,
                    supplierId: (item.ThumbPic || '').match(/SN=(\d+)/)?.[1]
                }));
            }

            return [];
        } catch (error) {
            console.error('Failed to search SAGE products:', error);
            return [];
        }
    }

    async getProduct(id: string): Promise<SageProductDetail | null> {
        try {
            // Using correct payload structure from user sample
            const payload = {
                prodEId: parseInt(id),
                includeSuppInfo: 1,
                apiVer: 130 // Service 105 requires 130
            };

            let response = await this.fetch(105, payload);

            // Check for explicit error (Sage returns ok:false, or errNum)
            // If response has product data, it's success.
            if (response.ok === false || response.errNum) {
                console.warn(`[SAGE] Service 105 failed (${JSON.stringify(response)}), trying 104...`);
                // payload for 104 is just prodEId
                // payload for 104 is just prodEId
                response = await this.fetch(104, { prodEId: parseInt(id), apiVer: 130 });
            }

            console.log('[SAGE] Detail Response:', JSON.stringify(response).substring(0, 500));

            // Mapping: SAGE 2.0 (Service 105) seems to return lowercase 'product' and camelCase keys
            const item = response.product || response.Product || response.data;

            if (!item) return null;

            return {
                id: String(item.prodEid || item.ProdEID || item.id),
                name: item.prName || item.PrName || item.name,
                description: item.desc || item.Desc || item.description,
                imageUrl: item.picURL || item.PicURL || item.pic || item.ThumbPic,
                price: parseFloat(item.prc || item.Prc || item.prc) || 0,
                fullDescription: item.fullDesc || item.FullDesc || item.Desc,
                itemCode: item.spc || item.SPC,
                supplierId: String(item.suppId || item.SuppId || ''),
                // Colors logic might be complex array or string
                colors: typeof item.colors === 'string' ? item.colors.split(',') : (item.colors || item.Colors || []),
            };
        } catch (error) {
            console.error(`Failed to get product ${id}:`, error);
            return null;
        }
    }
}

export const sageClient = new SageClient();
