
import React from "react";
import { useState } from "react";
import Items from "./Items/Items";
import OrderButton from "./OrderButton/OrderButton";
import { TbCoffee } from 'react-icons/tb';
import { AiOutlineShoppingCart } from 'react-icons/ai';


const App = () => {
    const [selectedItem, setSelectedItem] = useState();

    const handleSelectItem = (item) => {
        setSelectedItem(item);
    };
    const coffeeList = [
        { coffeName: "Espresso", ingredients: "espresso coffee", price: "10$" },
        { coffeName: "Latte", ingredients: "espresso, steamed milk", price: "26$" },
        { coffeName: "Caramel Latte", ingredients: "espresso, steamed milk,caramel syrup", price: "22$" },
        { coffeName: "Mocha", ingredients: "espresso coffee, chocolate, and steamed milk--then top with whipped cream", price: "25$" },
    ];

    const MyOrderBox = ({ item }) => (


        <div >
            {item ?
                (<div className="flex flex-row ">
                    <div className="flex w-1/3 flex-col ">
                        <div className="h-5/6 flex items-start  justify-start flex-col py-10">

                            <h2 className="text-3xl font-bold text-myblack pb-10">{item.coffeName}</h2>
                            <h3 className="text-2xl font-semibold text-myblack pb-16">{item.price}</h3>
                            <h3 className="text-2xl font-semibold text-myblack pb-10" >Ingredients</h3>
                            <h3 className="text-xl font-medium text-myblack pb-10 w-44">{item.ingredients}</h3>

                        </div>
                        <div className="flex h-1/6 justify-end">
                            <OrderButton />

                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-2/3" >
                        <img src="/image/R.png" alt="My Image" style={{ width: '53%', height: 'auto' }} className="  bg-Mycolors-color-two
                        rounded-lg shadow-inner shadow-Mycolors-mybrown p-16  m-4" />
                        <div className="flex flex-row items-center justify-center ">
                            <img src="/image/R.png" alt="My Image" style={{ width: '17%', height: 'auto' }} className="bg-Mycolors-color-two rounded-lg shadow-inner shadow-Mycolors-mybrown  m-1 p-2" />
                            <img src="/image/R.png" alt="My Image" style={{ width: '17%', height: 'auto' }} className=" bg-Mycolors-color-two rounded-lg shadow-inner shadow-Mycolors-mybrown m-1 p-2" />
                            <img src="/image/R.png" alt="My Image" style={{ width: '17%', height: 'auto' }} className=" bg-Mycolors-color-two rounded-lg shadow-inner shadow-Mycolors-mybrown m-1 p-2" />
                        </div>
                    </div>
                </div>
                )
                : <div className="flex items-start mt-56 justify-center"> <h1 className=" text-4xl font-bold">
                    Please Choose Your Coffee!😊☕
                </h1></div>}
        </div>
    );

    const Leftside = () => (
        <div className="felx justify-center items-center w-1/4 p-10  ">
            <header className="flex flex-row gap-2 items-center">
                <TbCoffee size={'20%'} />
                <h1 className=" text-3xl font-bold">Fillo Cafe</h1>
            </header>
            <div>
                {coffeeList.map((coffee) => (
                    <Items
                        key={coffee.coffeName}
                        coffeName={coffee.coffeName}
                        ingredients={coffee.ingredients}
                        price={coffee.price}
                        onClick={(item) => handleSelectItem(item)}
                    />
                ))}
            </div>

        </div>


    );



    const Rightside = () => (
        <div className="w-3/4 flex justify-center flex-col   ">
            <div className=" h-1/6 ">
                <header className="flex h-24  flex-row justify-end items-center w-full ">
                    <h1 className="text-Mycolors-color-one pr-72">Order Now!</h1>
                    <AiOutlineShoppingCart style={{ width: '4%', height: 'auto' }} />
                    <button className=" bg-Mycolors-mybrown text-white px-12 h-8 mr-10 ml-4 rounded-3xl">
                        SignIn
                    </button>
                </header>
                <div className="flex flex-row ">
                    <header className="flex border-b-2  w-full text-gray-600 border-b-gray-600  ">
                        <h1 className=" w-full flex justify-center px-10 " >
                            <button className=" hover:text-Mycolors-color-one mr-10"> Coffee</button>
                            <button className=" hover:text-Mycolors-color-one mr-10 "> Tea</button>
                            <button className=" hover:text-Mycolors-color-one "> Milkshake</button>
                        </h1>
                    </header>
                </div>
            </div>
            <div className=" h-5/6 ">
                <MyOrderBox item={selectedItem} />
            </div>
            <footer>
                <h2 className="text-Mycolors-color-one  border-b-2 border-gray-800 ">
                    Details
                </h2>
                <h3>
                    coffee is a beverage brewed from the roasted and ground seeds of the tropical evergreen coffee plants of African origin.
                </h3>
            </footer>
        </div>
    );



    return (
        <div className="flex flex-row h-screen w-screen ">
            <Leftside />
            <Rightside />

        </div>
    );
}
export default App;