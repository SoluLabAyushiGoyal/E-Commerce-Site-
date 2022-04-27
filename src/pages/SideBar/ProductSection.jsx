import React from "react";
import SideBar from "./SideBar";
import ProductProductDisplay from "./ProductProductDisplay";
import ProductProductDisplayArray from "./ProductProductDisplayArray";

const ProductSection = () => {
  const [value, setValue] = React.useState([30, 70]);
  function handleChange(newValue) {
    setValue(newValue);
  }
  const PriceRangeValue = value;
  return (
    <>
      <section id="advertisement">
        <div class="container">
          <img src="images/shop/advertisement.jpg" alt="" />
        </div>
      </section>
      <div class="container">
        <div class="row">
          <SideBar value={value} onChange={handleChange} />
          {/* <SideBarOfProduct /> */}
          <div class="col-sm-9 padding-right">
            <div class="features_items">
              <h2 class="title text-center">Features Items</h2>
              {ProductProductDisplayArray.map((item, index) => (
                <ProductProductDisplay
                  key={item.id}
                  imgSrc={item.imgSrc}
                  name={item.name}
                  price={item.price}
                  id={item.id}
                  PriceRangeFilterValue={PriceRangeValue}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductSection;
