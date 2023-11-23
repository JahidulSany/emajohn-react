/* eslint-disable react/prop-types */
import './Product.css'

function Product({img, name, price, seller, ratings}) {
  return (
    <div className='products'>
      <img src={img} alt="" />
      <h6 className='name'>{name}</h6>
      <p className='price'>{price}</p>
      <p className='seller'>{seller}</p>
      <p className='ratings'>{ ratings }</p>
    </div>
  )
}

export default Product