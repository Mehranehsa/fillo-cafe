import React from "react";
import { useState } from "react";

const OrderButton = ()=>{
    const [ordered,serOrdered]=useState(0)

    const handleDecrease =()=>{
    serOrdered(ordered - 1)
    }
    const handleIcrese =()=>{
        serOrdered(ordered + 1)
        }

return(
     
    <div className="flex flex-row items-center justify-evenly text-myblack px-2 bg-color-one shadow-inner shadow-myblack rounded-3xl h-10 w-32 ">
<button className=" hover:mywhite" 
onClick={handleDecrease}>-</button>
<h1>{ordered}</h1>
<button className=" hover:mywhite"
onClick={handleIcrese}>+</button>
    </div>
)

} 
export default OrderButton;