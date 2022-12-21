import React from 'react';
import Navbar from './components/NavBar/NavBar';
import AuthContextProvider from './contexts/authContext';
import ProductsContextProvider from './contexts/ProductsContext';
import MainRoutes from './routes/MainRoutes';

const App = () => {
  return (
   <AuthContextProvider>
    <ProductsContextProvider>

    <Navbar/>
     <MainRoutes/>
      
    </ProductsContextProvider>
     </AuthContextProvider>
   
   
  );
};

export default App;