import React, { useEffect, useState } from "react";
import SideBar from "../SideBar/SideBar";
import HomeProducts from "./HomeProducts";
import HomeRemaining from "./HomeRemaining";
import HomeProductArray from "./HomeProductArray";

const HomeMid = () => {
  //     const[itemArray,setItemArray] =useState([...HomeProductArray])
  //     const [rangeValue,setRangeValue]=useState([0,600])
  //     useEffect(()=>{
  //         if(itemArray && itemArray.length){

  //       setItemArray(itemArray.filter(item=>{
  //             return rangeValue[0]<item.price<rangeValue[1]
  //    }
  //     ))
  // }
  //     }
  // ,[rangeValue])
  const [value, setValue] = React.useState([30, 70]);
  function handleChange(newValue) {
    setValue(newValue);
  }
  const PriceRangeValue = value;
  //console.log(PriceRangeValue);
  return (
    <>
      {/* <SideBar rangeValue={rangeValue } setRangeValue={setRangeValue}/> */}
      <SideBar value={value} onChange={handleChange} />
      <div className="features_items">
        <h2 className="title text-center">Features Items</h2>
        {HomeProductArray.map((item) => {
          return (
            <HomeProducts
              key={item.id}
              imgSrc={item.imgSrc}
              name={item.name}
              price={item.price}
              id={item.id}
              PriceRangeFilterValue={PriceRangeValue}
            />
          );
        })}
      </div>
      <HomeRemaining />
    </>
  );
};

export default HomeMid;
