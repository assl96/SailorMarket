import React, { useEffect, useState } from 'react';
import ProductList from '@components/ProductList/ProductList';
import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader';
import Layout from '@components/Layout/Layout';

const home = () => {
    const [productList, setProductList] = useState<TProduct[]>([])

    useEffect(() => {
        window
        .fetch('api/sailorProduct')
        .then(response => response.json())
        .then(( {data} : TAPISailorResponse ) =>{
            setProductList(data)
        })
    }, [])
    
    return(

        <Layout>
            <KawaiiHeader/>
            <ProductList products={productList} />
        </Layout>
        
    );
};

export default home