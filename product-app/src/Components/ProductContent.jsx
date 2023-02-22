import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById, currency } from 'main_app/productsApi';
import placeAddToCart from 'addtocart/placeAddToCart';

export default function ProductContent() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getProductById(id).then(setProduct);
  }, [id]);

  const addToCart = useRef();

  useEffect(() => {
    if (addToCart.current) {
      placeAddToCart(addToCart.current, product.id);
    }
  }, [product]);

  if (!product) {
    return null;
  }

  return (
    <div className="grid grid-cols-2 gap-5">
      <div>
        <img src={product.image} alt={product.name} />
      </div>
      <div>
        <div className="flex">
          <div className="flex-grow font-bold text-3xl">
            <a>{product.name}</a>
          </div>
          <div className="flex-end text-3xl font-bold">
            {currency.format(product.price)}
          </div>
        </div>
        <div className="mt-4" ref={addToCart}></div>
        <div className="mt-4">{product.description}</div>
        <div className="mt-4">{product.longDescription}</div>
      </div>
    </div>
  );
}
