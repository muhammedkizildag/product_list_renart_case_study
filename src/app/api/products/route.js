
import products from '@/database/products.json'

export const GET = (req) => {

    
    
    const goldPrice = 100;

    const _products = products.map((v) => {
        v.price = (v.popularityScore + 1) * v.weight * goldPrice;
        return v; 
    })

    return Response.json(_products);
}