import React from "react";
import MainSection from "../../components/UI/MainSection";
import { useState } from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";

const Cart = () => {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );

  const increaseQuantity = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity++;
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const decreaseQuantity = (index) => {
    const updatedCartItems = [...cartItems];
    if (updatedCartItems[index].quantity > 1) {
      updatedCartItems[index].quantity--;
      setCartItems(updatedCartItems);
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    }
  };

  const removeItem = (index) => {
    const updatedCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  return (
    <MainSection className={`!mt-44 md:!mt-28`}>
      <h1 className={`text-2xl font-semibold text-[#5776a5] text-center mb-8`}>
        Your Cart
      </h1>
      {cartItems.length === 0 ? (
        <p
          className={`text-4xl text-[#5776a5] text-center h-[calc(100vh-200px)] flex justify-center items-center`}
        >
          Your cart is empty.
        </p>
      ) : (
        <ul className={`flex flex-col`}>
          {cartItems.map((item, index) => (
            <li
              key={index}
              className={`p-2 bg-[#5776a5] bg-opacity-70 mb-2 rounded-xl flex items-center justify-between`}
            >
              <div className={`flex items-center`}>
                <img
                  src={item.imgSrc}
                  alt={item.title}
                  className={`w-36 rounded-lg mr-2`}
                />
                <div className={`flex flex-col`}>
                  <p className={`text-xl text-white font-medium mb-4`}>
                    {item.title}
                  </p>
                  <p className={`text-2xl text-white font-normal mb-4`}>
                    Price: <span className={`text-2xl`}>{item.Price}</span>
                  </p>
                  <p
                    className={`text-lg text-white font-normal flex items-center mb-4`}
                  >
                    Quantity:{" "}
                    <AiOutlinePlusCircle
                      className={`cursor-pointer w-8 h-8 text-white opacity-75 hover:opacity-100 mx-2 duration-300`}
                      onClick={() => increaseQuantity(index)}
                    >
                      +
                    </AiOutlinePlusCircle>{" "}
                    <span className={`text-2xl`}>{item.quantity}</span>
                    <AiOutlineMinusCircle
                      className={`cursor-pointer w-8 h-8 text-white opacity-75 hover:opacity-100 mx-2 duration-300`}
                      onClick={() => decreaseQuantity(index)}
                    >
                      -
                    </AiOutlineMinusCircle>
                    <button
                      className={`py-1 px-4 bg-red-600 text-white rounded-2xl border-2 border-transparent duration-300 hover:text-red-600 hover:bg-transparent hover:border-red-600`}
                      onClick={() => removeItem(index)}
                    >
                      Remove
                    </button>
                  </p>
                </div>
              </div>

              <div className={`w-[40%] flex justify-center`}></div>
            </li>
          ))}
        </ul>
      )}
    </MainSection>
  );
};

export default Cart;
