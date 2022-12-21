import React, { useContext, useState } from 'react';
import { productsContext, useProducts } from '../../contexts/ProductsContext';
import ProductsPage from '../../pages/ProductsPage';


const AddProduct = () => {
    const {addProducts}=useProducts()

    const [products, setProducts]=useState({
        name:"",
        type:"",
        description:"",
        price:"",
        img:"",
         
    })
    console.log(products);


    return (
        <div className='inputs'>
            <input className='inp' type="text" placeholder='name' value={products.name}    onChange={(e) => setProducts({...products, name : e.target.value})}  />
            <input  className='inp' type="text" placeholder='type'  value={products.type}     onChange={(e) => setProducts({...products, type : e.target.value})}/>
            <input  className='inp' type="text" placeholder='description'  value={products.description}   onChange={(e) => setProducts({...products, description : e.target.value})} />
            <input  className='inp' type="text" placeholder='price'  value={products.price}   onChange={(e) => setProducts({...products, price : e.target.value})}/>
            <input  className='inp' type="text" placeholder='img'  value={products.img}  onChange={(e) => setProducts({...products, img: e.target.value})} />
            <button  className='inp' onClick={()=>addProducts(products)}>Add</button>
        </div>
    );
};


export default AddProduct;