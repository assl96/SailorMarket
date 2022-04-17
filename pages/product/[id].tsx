import { useRouter } from 'next/router';
import Layout from '@components/Layout/Layout'
import React, { useEffect, useState } from 'react';
import ProductSummary from '@components/ProductSummary/ProductSummary';
import fetch from 'isomorphic-unfetch';

const ProductPage = () => {
    const { query } = useRouter()
    const [product, setProduct] = useState<TProduct | null>(null)
  
    useEffect(() => {
      if (query.id) {
          fetch(`/api/sailorProduct/${query.id}`)
          .then((response) => response.json())
          .then(( data: TProduct) => {
            setProduct(data)
          })
      }
    }, [query.id])
  
    return (
      <Layout>
        {product == null ? null : <ProductSummary product={product} />}
      </Layout>
    )
  }
  
  export default ProductPage
  