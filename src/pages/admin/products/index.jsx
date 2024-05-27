import React, { useEffect, useState } from "react";
import "./style.css";
function Products() {
  const [products, setProducts] = useState();
  let api = import.meta.env.VITE_PHONES_API
  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((product) => setProducts(product));
  }, []);
  console.log(products);
  return (
    <div className="all-products">
      {products?.map((element) => (
        <div className="product-body">
          <img src={element.images[0]} alt="" className="pro-img" />
          <div className="product-inform">
            <p>{element.title}</p>
            <p>{element.price}</p>
          </div>
          <div className="product-inform">
            <p>Rəng:{element.color}</p>
            <p>Ekran{element.ekran}</p>
          </div>
          <div className="product-inform">
            <p>Daxili yaddaş:{element.DaxiliYaddaş}</p>
            <p>Operativ yaddaş:{element.OperativYaddaş}</p>
          </div>
          <div className="product-inform">
            <p>Əsas kamera:{element.ƏsasKamera}</p>
            <p>Prosessorun adı:{element.ProsessorunAdı}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
