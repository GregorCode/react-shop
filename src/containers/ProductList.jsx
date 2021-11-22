import React, { useEffect, useState } from 'react';
import ProductItem from '@components/ProductItem';
import useGetProducts from '@hooks/useGetProducts';
import '@styles/ProductList.scss';

const API = "http://api.escuelajs.co/api/v1/products"

const ProductList = () => {

	const products = useGetProducts(API);

	return (
		<section className="main-container">
			<div className="ProductList">

				{products.map(product => (
					<ProductItem product={product} key={product.id} />
				))}

				{/* otra forma de hacerlo 
				{products.map(product => {
					return <ProductItem />
				})}
				*/}
			</div>
		</section>
	);
}

export default ProductList;