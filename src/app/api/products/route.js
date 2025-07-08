
import products from '@/database/products.json'

export const GET = async (req) => {
    let myHeaders = new Headers();
    myHeaders.append("x-access-token", "goldapi-1jlsbk17mcu85ock-io");
    myHeaders.append("Content-Type", "application/json");

    let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    const goldData = await fetch("https://www.goldapi.io/api/XAU/USD", requestOptions);
    const _goldData = await goldData.json();

    const goldPrice = _goldData.price_gram_24k ?? 100;

    const _products = products.map((v) => {
        v.price = (v.popularityScore + 1) * v.weight * goldPrice;
        return v;
    })



    return Response.json(_products);
}