import {useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useDispatch,useSelector} from 'react-redux';
import {add} from '../store/cartSlice';
import {getProducts} from '../store/productSlice';
import Alert from 'react-bootstrap/Alert'

const Products = () => { 
     const dispatch=useDispatch();
     const {data :products,status}=useSelector(state=>state.products)
    // const [products,getProducts]=useState([])
    useEffect(()=>{
        dispatch(getProducts());
        // fetch('https://fakestoreapi.com/products')
        //     .then(data=>data.json())
        //     .then(result=>getProducts(result))
    },[]);

    if(status==='loading'){
        return <p>Loading...</p>
    }
    if(status==='error'){
        return <Alert key="danger" variant='danger'>Something went wrong!! Try again later</Alert>
    }

    const addToCart=(products)=>{
           dispatch(add(products))
    }

    const card=products.map(product=>(
        <div className="col-md-2">
        <Card Key={product.id} className='h-100'>
           
           <div className='text-center'>
      <Card.Img variant="top" src={product.image} style={{width:'100px',height:'130px'}}/>
      </div>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text className='text-center'>
          INR:{product.price}
        </Card.Text>
      </Card.Body>

      <Card.Footer className='text-center ' style={{background:'white'}}>
      <Button variant="primary" onClick={()=>addToCart(product)}>Add to Cart</Button>
      </Card.Footer>
    </Card>
        </div>
    ))
  return (
    <div>
    <h1 className='text-center' >Products Dashboard</h1>
     <div className='row'>
        {card}
     </div>
    </div> 
  )
}

export default Products