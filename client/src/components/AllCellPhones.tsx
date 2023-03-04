import React, {useState, useEffect} from 'react'
import Services from '../dataService/services'
// import ICellphones from '../types/dataTypes'
import IProducts from '../types/dataTypes'

const AllCellPhones = (): JSX.Element => {
  const service = new Services()
  const [products, setProducts] = useState<IProducts[] | []>([])

  useEffect(()=>{
    service.getAllProducts()
    .then((res)=>setProducts(res.data))
    .catch((err)=>console.log(err))
  }, [])

  console.log(products)

  return (
    <div>
    {products.map((prod)=>{
      return (
        <div key={prod.name}>
          <p>name: {prod.name}</p>
          <p>price: {prod.price}</p>
        </div>
      )
    })}
  </div>
  )
}

export default AllCellPhones
