import react, { useState, useEffect } from "react";
import CartProducts from "../../cart/CartProducts";
import { Link } from "react-router-dom";
import { PriceFilter } from "./SideBar";

//let SliderValue = 600;

const AryOfProducts2 = (array) => {
  const ShowProduct1 = JSON.parse(localStorage.getItem("ArrayOfProducts"));

  //const ArrayValue1 = ShowProduct1.find((Element) => array[0] == Element[0]);

  //   if (ArrayValue1.length > 0) {
  //     //console.log(ArrayValue1.length > 0);
  //     return;
  //   } else {
  //   ShowProduct1.map((item) => {
  //     if (item[4] === array[4]) {
  //       item[3] += 1;
  //     } else {
  //       ShowProduct1.push(array);
  //     }
  //   });
  ShowProduct1.push(array);
  console.log(ShowProduct1);
  localStorage.setItem("ArrayOfProducts", JSON.stringify(ShowProduct1));
  //   }
  //   ShowProduct1.push(array);
  //   localStorage.setItem("ArrayOfProducts", JSON.stringify(ShowProduct1));
};

const ProductProductDisplay = (props) => {
  const Array = [props.imgSrc, props.name, props.price, 1, props.id];
  //   const [productSliderValue, setProductSliderValue] = useState(600);
  //   useEffect(() => {
  //     setProductSliderValue(SliderValue);
  //     console.log(SliderValue);
  //   }, [SliderValue]);
  //   console.log(productSliderValue);
  //   console.log(SliderValue);
  return (
    <>
      <div class="col-sm-4">
        <div class="product-image-wrapper">
          <div class="single-products">
            <div class="productinfo text-center">
              <img src={props.imgSrc} alt="" />
              <h2>$56</h2>
              <p>{props.name}</p>
              <a href="#" class="btn btn-default add-to-cart">
                <i class="fa fa-shopping-cart"></i>Add to cart
              </a>
            </div>
            <div class="product-overlay">
              <div class="overlay-content">
                <h2>${props.price}</h2>
                <p>Easy Polo Black Edition</p>
                <button
                  class="btn btn-default add-to-cart"
                  onClick={() => AryOfProducts2(Array)}
                >
                  <i class="fa fa-shopping-cart"></i> Add to Cart
                </button>
              </div>
            </div>
          </div>
          <div class="choose">
            <ul class="nav nav-pills nav-justified">
              <li>
                <a href="">
                  <i class="fa fa-plus-square"></i>Add to wishlist
                </a>
              </li>
              <li>
                <a href="">
                  <i class="fa fa-plus-square"></i>Add to compare
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductProductDisplay;
//export { SideBarOfProduct };
