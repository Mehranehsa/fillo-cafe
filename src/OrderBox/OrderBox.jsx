import React from "react";
import { useState } from "react";
import OrderButton from "../OrderButton/OrderButton";

const OrderBox = () => {

    return (
        <div className="flex flex-row ">
        <div className="flex w-1/3 flex-col ">
        
        
        <OrderButton/>
        </div>
            <div className="flex flex-col items-center justify-center w-2/3" >
                <img src="/image/R.png" alt="My Image" style={{ width: '50%', height: 'auto' }} className=" bg-color-two rounded-lg shadow-inner shadow-mybrown p-16  m-4" />
                <div className="flex flex-row items-center justify-center ">
                    <img src="/image/R.png" alt="My Image" style={{ width: '17%', height: 'auto' }} className=" bg-color-two rounded-lg shadow-inner shadow-mybrown  m-1 p-2" />
                    <img src="/image/R.png" alt="My Image" style={{ width: '17%', height: 'auto' }} className=" bg-color-two rounded-lg shadow-inner shadow-mybrown m-1 p-2" />
                    <img src="/image/R.png" alt="My Image" style={{ width: '17%', height: 'auto' }} className=" bg-color-two rounded-lg shadow-inner shadow-mybrown m-1 p-2" />
                </div>
            </div>
        </div>
    )
}
export default OrderBox;