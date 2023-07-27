import React from "react";
import{AiOutlineShoppingCart} from 'react-icons/ai';
const Items =(props)=>{
    const {item, ingredients } =props
return(
   
<div className=" h-52 w-52 bg-color-one rounded-3xl flex flex-col items-center justify-center   ">
<img src="/image/R.png" alt="My Image" style={{ width: '50%', height: 'auto' }}  />
<header className=" text-3xl font-bold text-white">{item}</header>
<h4 className="text-lg font-medium">{ingredients}</h4>
<AiOutlineShoppingCart  size={'30%'} className="text-mywhite bg-mybrown rounded-2xl  p-4 ml-28 mt-8"/>
</div>

)    
}
export default Items;