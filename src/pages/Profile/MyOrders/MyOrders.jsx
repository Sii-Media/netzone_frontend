import React from "react";
import MainSection from "../../../components/UI/MainSection";
import { MdRemoveShoppingCart } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";
import { getCurrencySymbol } from "../../../funcs/Currency";
import { useSelector } from "react-redux";
const MyOrders = () => {
  const currencySymbol = useSelector((state) =>
    getCurrencySymbol(state.currency.selectedCurrency)
  );
  const data = useLoaderData();
  return (
    <MainSection
      className={`!mt-52 md:!mt-28 mx-auto w-[90%] md:w-[60%] min-h-screen`}
    >
      {data.length <= 0 ? (
        <>
          <div
            className={`md:w-[90%] w-[60%] mx-auto flex flex-col justify-center items-center`}
          >
            <MdRemoveShoppingCart
              className={`text-[10rem] text-[#5776a5] text-opacity-40 mb-8`}
            />
            <h3
              className={`font-bold text-2xl text-[#5776a5] text-opacity-40 mb-4`}
            >
              You Do Not Have Any Orders
            </h3>
            <Link to="/" className={`text-[#5776a5] underline`}>
              Start Shopping!
            </Link>
          </div>
        </>
      ) : (
        <>
          <h2
            className={`text-2xl font-semibold text-center mb-4 text-[#5776a5]`}
          >
            Your Orders
          </h2>
          <ul className={`flex flex-col items-center w-full`}>
            {data.reverse().map((ele, i) => (
              <li
                key={i}
                className={` mb-4 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-2 w-full`}
              >
                <Link className={`flex flex-col`} to={ele._id}>
                  <h3 className={`font-bold mb-2`}>
                    <span>Order : </span>
                    <span>{data.length - i}</span>
                  </h3>
                  <p className={`text-sm mb-2`}>
                    <span>Date</span>
                    <span>{ele.createdAt}</span>
                  </p>
                  <ul className={`mb-2`}>
                    {ele.products.map((ele, i) => (
                      <li key={i} className={`mb-2 flex flex-col`}>
                        <div className={`flex items-center `}>
                          <img
                            src={ele.product.imageUrl}
                            alt={ele.product.name}
                            className={`w-14 md:w-36 rounded-lg`}
                          />
                          <p
                            className={`text-lg font-bold ml-4 w-full whitespace-nowrap overflow-hidden text-ellipsis`}
                          >
                            {ele.product.name}
                          </p>
                        </div>
                      </li>
                    ))}
                    <div>
                      <span
                        className={`text-[#5776a5] text-lg font-semibold mr-2`}
                      >
                        Total Amount :
                      </span>
                      <span className={`text-lg text-[#5776a5]`}>
                        {ele.grandTotal} {currencySymbol}
                      </span>
                    </div>
                  </ul>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </MainSection>
  );
};

export default MyOrders;
export const myOrdersLoader = async () => {
  const userId = JSON.parse(window.localStorage.getItem("user")).result._id;
  console.log(userId);
  const response = await fetch(
    `https://net-zoon.onrender.com/order/get/${userId}`
  );
  const data = await response.json();
  console.log(data);
  return data;
};
