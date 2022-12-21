import { Box, Grid } from '@mui/material';
import React, { useContext } from 'react';
import { productsContext } from '../../contexts/ProductsContext';

const ProductsList = () => {
    const [product]=useContext(productsContext)
    return (
        <Grid   item md={9}>
          <Box sx={{display:"flex",}}>
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    
      {product.map((products, index) => (
        <div
          key={index}
        >
          <h4>Name: {products.name}</h4>
          <hr />
          <h4>Name: {products.type}</h4>
          <hr />
          <h4>Name: {products.description}</h4>
          <hr />
          <h4>Surname: {products.price}</h4>
          <hr />
          <h4>Number: {products.img}</h4>
          <hr />
          
      
        </div>
      ))}
   
  


          </Box>
        </Grid>
    );
};

export default ProductsList;