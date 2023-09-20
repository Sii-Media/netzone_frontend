import React, { useState, useEffect } from "react";
import MainSection from "../../components/UI/MainSection";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import { ImBin } from "react-icons/im";
import { useSelector } from "react-redux";
import { getCurrencySymbol } from "../../funcs/Currency";
const Cart = () => {
  const { t } = useTranslation();
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );
  const user = window.localStorage.getItem("user");
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [serviceFees, setServiceFee] = useState(0);
  const [lastTotalPrice, setLastTotalPrice] = useState(0);
  useEffect(() => {
    // Calculate the total number of items and total price
    let items = 0;
    let price = 0;
    for (const item of cartItems) {
      items += item.quantity;
      price += item.Price * item.quantity;
    }
    setTotalItems(items);
    setTotalPrice(price);
  }, [cartItems]);

  const increaseQuantity = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity++;
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const decreaseQuantity = (index) => {
    const updatedCartItems = [...cartItems];
    if (updatedCartItems[index].quantity === 1) {
      // If the quantity is 1, remove the item from the cart
      updatedCartItems.splice(index, 1);
    } else {
      updatedCartItems[index].quantity--;
    }
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const removeItem = (index) => {
    const updatedCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };
  const currencySymbol = useSelector((state) =>
    getCurrencySymbol(state.currency.selectedCurrency)
  );
  useEffect(() => {
    // Check if "user" item exists in local storage
    const userItem = window.localStorage.getItem("user");

    if (!userItem) {
      // Handle the case where "user" item is not in local storage
      return;
    }

    const user = JSON.parse(userItem);

    if (
      user.result.userType !== "local_company" &&
      user.result.userType !== "trader"
    ) {
      if (totalPrice >= 1000) {
        setServiceFee(10);
      }
      if (totalPrice < 1000) {
        setServiceFee(5);
      }
      if (totalPrice <= 100) {
        setServiceFee(0);
      }
    } else {
      let internalFees = 0;
      const cartArray = JSON.parse(window.localStorage.getItem("cartItems"));
      if (cartArray && cartArray.length > 0) {
        // Check if cartArray exists and is not empty
  
        for (let i = 0; i < cartArray.length; i++) {
        
          if (
            cartArray[i].ownerType === "local_company" ||
            cartArray[i].ownerType === "factory"
          ) {
          
            internalFees +=
              (cartArray[i].quantity * cartArray[i].Price * 3) / 100;
            setServiceFee(internalFees);
          }
        }
      }
    }
  }, [totalPrice]);

  const checkOutHandler = async () => {
    if (!user) {
      window.alert("Please LogIn to Complete the Action");
      return;
    }
    window.location.replace("cart/paymentgateway");
  };
  useEffect(() => {
    setLastTotalPrice(totalPrice + serviceFees);
  }, [serviceFees, totalPrice]);

  useEffect(() => {
    // Load the last total price from local storage when the component mounts
    const storedTotalPrice = localStorage.getItem("lastTotalPrice");
    if (storedTotalPrice) {
      setLastTotalPrice(parseFloat(storedTotalPrice));
    }
  }, []);

  useEffect(() => {
    // Update local storage when lastTotalPrice changes
    localStorage.setItem("lastTotalPrice", lastTotalPrice.toFixed(2));
  }, [lastTotalPrice]);
  useEffect(() => {
    // Calculate the last total price
    const calculatedLastTotalPrice = totalPrice + serviceFees;

    // Update the state
    setLastTotalPrice(calculatedLastTotalPrice);

    // Update local storage with the calculated last total price
    localStorage.setItem("lastTotalPrice", calculatedLastTotalPrice.toFixed(2));
  }, [serviceFees, totalPrice]);

  return (
    <MainSection className={`!mt-52 md:!mt-28`}>
      <h1 className={`text-2xl font-semibold text-[#5776a5] text-center mb-8`}>
        {t("Your_Cart")}
      </h1>
      {cartItems.length === 0 ? (
        <p
          className={`text-4xl text-[#5776a5] text-center h-[calc(100vh-200px)] flex justify-center items-center`}
        >
          {t("empty_cart")}
        </p>
      ) : (
        <div>
          <ul className={`flex flex-col w-full md:w-[70%] mx-auto`}>
            {cartItems.map((item, index) => (
              <li
                key={index}
                className={`p-2 bg-[#5776a5] bg-opacity-70 mb-2 rounded-xl flex flex-col md:flex-row items-center justify-between`}
              >
                <div
                  className={`flex justify-between md:justify-start items-center w-full md:w-auto`}
                >
                  <img
                    src={item.imgSrc}
                    alt={item.title}
                    className={`w-20 md:w-36 h-auto md:h-36 rounded-lg mr-2 ml-2 object-cover self-start`}
                  />
                  <div
                    className={`flex flex-col flex-1 md:flex-auto overflow-hidden`}
                  >
                    <p
                      className={`text-sm md:text-xl text-white font-medium mb-4 whitespace-nowrap text-ellipsis`}
                    >
                      {item.title}
                    </p>
                    <p
                      className={`text-sm md:text-2xl text-white font-normal mb-4`}
                    >
                      {t("price")}:{" "}
                      <span className={`text-sm md:text-2xl`}>
                        {item.Price} {t(currencySymbol)}
                      </span>
                    </p>
                    <p
                      className={`text-xs md:text-lg text-white font-normal flex items-center mb-4`}
                    >
                      {t("quantity")}:{" "}
                      <AiOutlinePlusCircle
                        className={`cursor-pointer w-6 h-6 md:w-8 md:h-8 text-white opacity-75 hover:opacity-100 mx-2 duration-300`}
                        onClick={() => increaseQuantity(index)}
                      >
                        +
                      </AiOutlinePlusCircle>{" "}
                      <span className={`text-2xl`}>{item.quantity}</span>
                      <AiOutlineMinusCircle
                        className={`cursor-pointer w-6 h-6 md:w-8 md:h-8 text-white opacity-75 hover:opacity-100 mx-2 duration-300`}
                        onClick={() => decreaseQuantity(index)}
                      >
                        -
                      </AiOutlineMinusCircle>
                      <ImBin
                        className={`text-red-500 w-8 h-8 duration-300 hover:text-red-600 cursor-pointer block md:hidden`}
                        onClick={() => removeItem(index)}
                      />
                      {/* <button
                        className={`py-1 px-4 bg-red-600 text-white rounded-2xl border-2 border-transparent duration-300 hover:text-red-600 hover:bg-transparent hover:border-red-600`}
                        onClick={() => removeItem(index)}
                      >
                        {t("remove")}
                      </button> */}
                    </p>
                  </div>
                </div>
                <ImBin
                  className={`text-red-500 w-10 h-10 duration-300 hover:text-red-600 cursor-pointer hidden md:block`}
                  onClick={() => removeItem(index)}
                />
                {/* <div className={`w-[40%] flex justify-center`}></div> */}
              </li>
            ))}
          </ul>
          <div
            className={`flex flex-col self-stretch md:items-center justify-between px-4 py-2 border border-[#5776a5] rounded-2xl mb-4 w-full md:w-[70%] mx-auto`}
          >
            <div
              className={`flex flex-col md:flex-row items-stretch md:items-center justify-between w-full mb-2`}
            >
              <p className="text-xl text-[#5776a5] pb-2 md:mb-0 font-semibold border-b md:border-none border-[#5776a5]">
                <span>{t("order_total")}:</span>
                <span className={`font-medium`}>
                  {totalPrice.toFixed(2).toLocaleString()} {t(currencySymbol)}
                </span>
              </p>
              <p className="text-xl text-[#5776a5]  md:mb-0 font-semibold pb-2 border-b md:border-none border-[#5776a5]">
                <span>{t("service_fee")} :</span>
                <span className={`font-medium`}>
                  {serviceFees.toLocaleString()}
                  {t(currencySymbol)}
                </span>
              </p>
              <p className="text-xl text-white my-4 md:mb-0 font-semibold bg-[#5776a5] p-1 rounded-xl border-2 border-white flex justify-between">
                <span> {t("total_amount")} : </span>
                <span className={`font-medium`}>
                  {lastTotalPrice.toFixed(2).toLocaleString()}{" "}
                  {t(currencySymbol)}
                </span>
              </p>
            </div>
            <button
              onClick={checkOutHandler}
              className={`px-4 py-1 bg-[#5776a5] border-2 border-transparent text-white text-lg hover:bg-transparent hover:border-[#5776a5] hover:text-[#5776a5] duration-300 rounded-2xl `}
            >
              {t("check_out")}
            </button>
          </div>
        </div>
      )}
    </MainSection>
  );
};

export default Cart;
