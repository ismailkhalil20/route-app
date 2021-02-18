import React from 'react';
import {useHistory, useParams } from 'react-router-dom';

const ProductDetails = ({match}) => {
	let history = useHistory()
	const handleSave = () => {
		// When saving handle the history correctly, so that we can access the browser back button.
		history.push("/");
	};

	let { id } = useParams()
	return (
		<div>
			<h1>Product Details - {id} </h1>
			<button onClick={handleSave}>Save</button>
		</div>
	);
};

export default ProductDetails;
