import Product from '../Product/Product'
import { products } from '../utils/constants'
import './Goods.css'

const Goods = () => {
  return (
    <section className="goods">
      <p className="goods__title">Ты сегодня покормил кота?</p>
      <div className="goods__container">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default Goods
