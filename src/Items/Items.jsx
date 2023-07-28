import React from "react";
import { AiOutlineShoppingCart } from 'react-icons/ai';
const Items = (props) => {
    const { coffeName, ingredients, price } = props;

    return (

        <div className=" h-60 w-60 bg-color-one rounded-3xl flex flex-col  my-3 p-1 text-mywhite "
            onClick={() => {
                props.onClick({ coffeName,ingredients,price  });
            }}>
            <div className="flex flex-row justify-between">

                <h4 className=" text-3xl font-bold text-white pl-6">{coffeName}</h4>
                <img src="/image/R.png" alt="My Image" style={{ width: '30%', height: 'auto' }} />
            </div>
            
                <h5 className=" text-sm font-medium pl-5 h-24 w-30 mt-4">{ingredients}</h5>
               
                <div className="flex flex-row-reverse items-end  ">
                <AiOutlineShoppingCart size={'30%'} className=" text-mywhite bg-mybrown rounded-2xl shadow shadow-myblack h-10 w-14 p-2 m-2 " />
            </div>
        </div>

    );
};
export default Items;