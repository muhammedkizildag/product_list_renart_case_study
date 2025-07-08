
import products from '@/database/products.json'

export const GET = (req) => {
    const { searchParams } = req.nextUrl;

    const min_price = Number(searchParams.get('min_price') ?? 0)
    const max_price = Number(searchParams.get('max_price') ?? Infinity)
    const min_score = Number(searchParams.get('min_score') ?? 0)
    const max_score = Number(searchParams.get('max_score') ?? Infinity)

    console.log(max_price);


    const goldPrice = 100;

    const _products = products.map((v) => {
        v.price = (v.popularityScore + 1) * v.weight * goldPrice;
        return v;
    })

    const _products_ = _products.filter((v) => {
    return (
      v.price >= min_price &&
      v.price <= max_price &&
      v.popularityScore >= min_score &&
      v.popularityScore <= max_score
    )
  })


    return Response.json(_products_);
}