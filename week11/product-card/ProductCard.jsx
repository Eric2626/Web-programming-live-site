// Week 11 Friday code challenge: ProductCard
// Props: name (string), price (number in KRW),
// rating (number out of 5), inStock (boolean).
export default function ProductCard({ name, price, rating, inStock }) {
  return (
    <article className="product-card">
      <h2>{name}</h2>
      <p className="price">{price.toLocaleString('ko-KR')}원</p>
      <p className="rating">⭐ {rating} / 5 stars</p>
      <span className={inStock ? 'stock' : 'stock out'}>
        {inStock ? 'In Stock' : 'Out of Stock'}
      </span>
    </article>
  );
}

// Example JSX:
// <ProductCard name="PlayStation 5 (PS5)" price={700000} rating={4.8} inStock={true} />
