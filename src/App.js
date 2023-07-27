
import React from "react";
import { useState } from "react";
import Items from "./Items/Items";
import OrderButton from "./OrderButton/OrderButton";
import { TbCoffee } from 'react-icons/tb';
import OrderBox from "./OrderBox/OrderBox";
import { AiOutlineShoppingCart } from 'react-icons/ai';

const App = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleSelectItem = (item) => {
        setSelectedItem(item);
    };
    const coffeeList = [
        { coffename: "Espresso", ingredients: 'espresso coffee', price: "45T" },
        { coffename: "Latte", ingredients: 'espresso, steamed milk', price: "68T" },
        { coffename: "Caramel Latte", ingredients: 'espresso, steamed milk,caramel syrup', price: "74T" },
        { coffeename: "Mocha", ingredients: 'espresso coffee, chocolate, and steamed milk--then top with whipped cream', price: "65T" },
    ]

    const Leftside = () => (
        <div className="felx justify-center items-center w-1/4 p-10  ">
            <header className="flex flex-row gap-2 items-center">
                <TbCoffee size={'20%'} />
                <h1 className=" text-3xl font-bold">Fillo Cafe</h1>
            </header>
            <div>
                {coffeeList.map((coffee) => (
                    <Items
                        key={coffee.coffeename}
                        coffeename={coffee.coffeename}
                        onClick={(item) => handleSelectItem(item)}
                    />
                ))}
            </div>

        </div>


    )


    const Rightside = () => (
        <div className="w-3/4 flex justify-center  flex-col   ">
            <header className="flex h-24  flex-row justify-end items-center w-full ">
                <h1 className="text-color-one">Order Now!</h1>
                <AiOutlineShoppingCart size={'30%'} />
                <button className=" bg-mybrown text-mywhite px-12 h-8 mr-10 rounded-3xl">
                    SignUp
                </button>
            </header>
            <div className="flex flex-row ">
                <header className="flex border-b-2  w-full  border-b-myblack ">
                    <h1 className=" w-full flex justify-center " > Coffee Tea Milkshake</h1>
                </header>
            </div>
            <div className="">

            </div>
            <OrderBox />
        </div>
    )



    return (
        <div className="flex flex-row h-screen w-screen ">
            <Leftside />
            <Rightside />

        </div>
    )
}
export default App;