import React from "react";
import { useState } from "react";

const OrderButton = () => {
    const [ordered, serOrdered] = useState(0)

    const handleDecrease = () => {
        serOrdered(prevOrdered => Math.max(0, prevOrdered - 1))
    }
    const handleIcrese = () => {
        serOrdered(prevOrdered =>(0 , prevOrdered + 1))
    }

    return (

        <div className="flex flex-row items-center justify-evenly text-myblack px-2  bg-Mycolors-color-one shadow-inner shadow-black rounded-3xl h-10 w-32 ">
            <button className=" hover:text-white"
                onClick={handleDecrease}>-</button>
            <h1>{ordered}</h1>
            <button className=" hover:text-white "
                onClick={handleIcrese}>+</button>
        </div>
    )

}
export default OrderButton;