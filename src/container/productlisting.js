import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./product-component";
import axios from "axios";
import { useEffect } from "react";
import { setProducts } from "../redux/actions/productActions";



const ProductListing = () => {
    const products=useSelector((state)=> state);
    console.log(products);
    //access to products
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response= await axios.get('https://fakestoreapi.com/products')
        .catch((err) => {
            console.log('err', err);
        });
        dispatch(setProducts(response.data));
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    console.log("Products: ", products);
    
    return (
        <div className="ui grid container">
            <ProductComponent />
        </div>   
    )

}

export default ProductListing