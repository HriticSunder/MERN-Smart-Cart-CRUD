import { Fragment } from "react/jsx-runtime";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Footer from "../components/Footer";

export default function Home(){

    const [Products,setProducts]=useState([]);

    const [searchParams,setsearchParams]=useSearchParams()

    useEffect(()=>{
        fetch(process.env.REACT_APP_API_URL+'/products?'+searchParams)
        .then(res=>res.json())
        .then(res=>setProducts(res.products));
    },[searchParams])
    return <Fragment>

        <h1 id="products_heading">Latest Products</h1>

        <section id="products" className="container mt-5">
            <div className="row">
                {Products.map(product=><ProductCard product={product}/>)}
            </div>
        </section>
        <Footer/>

    </Fragment>
}