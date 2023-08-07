import React from "react";

const Product = () => {
  //const Products = ["laptop", "modem", "harddrive", "phone","laptop"];
  const Products=[
   
      { id:1,name:"laptop",price:500},
      { id:2,name:"phone",price:70},
      { id:3,name:"harddisk",price:53},
      { id:4,name:"laptop",price:20},
  ]
 const fruits=["mango","banana","orange"]
  const fruityam = fruits.map((fruit,index) => <h3 key={index}>{fruit}</h3>);
  return <div>{fruityam}</div>;
  //const productList = Products.map((product) => <h3 key={product.id}>{product.name};${product.price}</h3>);
  //return <div>{productList}</div>;

};

export default Product;
