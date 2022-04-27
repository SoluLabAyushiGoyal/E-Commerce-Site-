import React, { useState, useEffect } from "react";
import CartProducts from "../../cart/CartProducts";
//import {Link} from "react-router-dom";

//const temptArray =[];
//const emptyAry = [];
// const AryOfCart = (array) => {
//console.log(array);
// const [LocalStorageArray, setLocalStorageArray]=useState(JSON.parse(localStorage.getItem("ArrayOfProducts")));

// useEffect(() => {
//     if(LocalStorageArray==null){
//         localStorage.setItem("ArrayOfProducts", JSON.stringify([]));
//     }
//     });
//const setEmptyAry = JSON.parse(localStorage.getItem("ArrayOfProducts"));
//setEmptyAry.push(emptyAry);
//localStorage.setItem("ArrayOfProducts" , JSON.stringify(setEmptyAry));
//   const temptArray = JSON.parse(localStorage.getItem("ArrayOfProducts"));

//   if (temptArray == null) {
//     localStorage.setItem("ArrayOfProducts", JSON.stringify([]));
//   }
//   const ArrayValue = temptArray.find((Element) => array[0] == Element[0]);

//   if (ArrayValue.length > 0) {
//     //console.log(ArrayValue.length > 0);
//     return;
//   } else {
const AryOfCart = (array) => {
  const temptArray = JSON.parse(localStorage.getItem("ArrayOfProducts"));
  if (temptArray == null) {
    localStorage.setItem("ArrayOfProducts", JSON.stringify([]));
  }
  //   temptArray.map((item) => {
  //     if (item[4] === array[4]) {
  //       item[3] += 1;
  //     } else {
  //       temptArray.push(array);
  //     }
  //   });
  temptArray.push(array);
  console.log(temptArray);
  localStorage.setItem("ArrayOfProducts", JSON.stringify(temptArray));
};

//temptArray.push(array);
//console.log(array);
//localStorage.setItem("ArrayOfProducts", JSON.stringify(temptArray));
//   }
//   temptArray.push(array);
//   localStorage.setItem("ArrayOfProducts", JSON.stringify(temptArray));
//};

const HomeProducts = (props) => {
  //const temptHomeProductArray = [];
  const Array = [props.imgSrc, props.name, props.price, 1, props.id];
  //console.log(props.PriceRangeFilterValue);
  // if (props.price <= props.PriceRangeFilterValue) {
  //   const temptArray = [props.imgSrc, props.name, props.price, 1, props.id];
  //   temptHomeProductArray.push(temptArray);
  // }

  return (
    <>
      <div className="col-sm-4">
        <div className="product-image-wrapper">
          <div className="single-products">
            <div className="productinfo text-center">
              <img src={props.imgSrc} alt="" />
              <h2>$56</h2>
              <p>{props.name}</p>
              <a href="#" className="btn btn-default add-to-cart">
                <i className="fa fa-shopping-cart"></i>Add to cart
              </a>
            </div>
            <div className="product-overlay">
              <div className="overlay-content">
                <h2>${props.price}</h2>
                <p>Easy Polo Black Edition</p>
                <button
                  className="btn btn-default add-to-cart"
                  onClick={() => AryOfCart(Array)}
                >
                  <i className="fa fa-shopping-cart"></i>Add to product
                </button>
              </div>
            </div>
          </div>
          <div className="choose">
            <ul className="nav nav-pills nav-justified">
              <li>
                <a href="#">
                  <i className="fa fa-plus-square"></i>Add to wishlist
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-plus-square"></i>Add to compare
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeProducts;
