import { useEffect, useState } from 'react'
import './Product.css'
import cat from '../../images/cat.png'

const Product = (props) => {
  const [isBuying, setIsBuying] = useState('#1698d9')
  const [overlay, setOverlay] = useState(false)
  const [title, setTitle] = useState('Сказочное заморское яство')

  useEffect(() => {
    if (props.product.available < 1) {
      setIsBuying('#B3B3B3')
      setOverlay(true)
    }
  }, [])

  function buy() {
    if (props.product.available < 1) {
      return
    }
    setIsBuying(isBuying === '#1698d9' ? '#D91667' : '#1698d9')
  }

  function changeTitle() {
    if (overlay === true) {
      return
    }
    if (isBuying === '#1698d9') {
      setTitle('Сказочное заморское яство')
    } else {
      setTitle(
        title === 'Сказочное заморское яство'
          ? 'Котэ не одобряет?'
          : 'Сказочное заморское яство'
      )
    }
  }

  return (
    <div className="product" onClick={buy} onMouseLeave={changeTitle}>
      <div
        className="product__back"
        style={{ border: `4px solid ${isBuying}` }}
      >
        {overlay && (
          <div className="product__overlay" style={{ opacity: overlay }} />
        )}
        <div className="product__card">
          <div className="product__container">
            <div>
              <p className="product__text-marketing">{title}</p>
              <h2 className="product__text-title">Нямушка</h2>
              <p className="product__text-taste">{props.product.taste}</p>
              <div className="product__text-description">
                <p className="product__text-ditails">
                  {props.product.portions}
                </p>
                <p className="product__text-ditails">{props.product.present}</p>
                <p className="product__text-ditails">{props.product.result}</p>
              </div>
            </div>
            <div
              className="product__weight"
              style={{ backgroundColor: isBuying }}
            >
              <p className="product__weight-number">{props.product.weight}</p>
              <p className="product__weight-text">кг</p>
            </div>
          </div>
        </div>
        <img src={cat} className="product__animal" />
      </div>
      {props.product.available < 1 ? (
        <p className="product__notavailable">
          Печалька, {props.product.taste} закончился.
        </p>
      ) : isBuying === '#1698d9' ? (
        <p className="product__text">
          Чего сидишь? Порадуй котэ,{' '}
          <span className="product__text_link">купи.</span>
        </p>
      ) : (
        <p className="product__text">{props.product.sold}</p>
      )}
    </div>
  )
}

export default Product
