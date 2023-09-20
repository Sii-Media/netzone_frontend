import React from "react";
import PageSection from "../../../../components/UI/PageSection";
import { useLoaderData } from "react-router-dom";
import MainSection from "../../../../components/UI/MainSection";
import { CiLocationOn } from "react-icons/ci";
import { MdMobileFriendly } from "react-icons/md";

const OrderDetails = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <MainSection className={`!mt-52 md:!mt-24`}>
      <h2 className={`text-center text-2xl md:text-3xl font-bold mb-4`}>
        Order ID - {data._id}
      </h2>
      <p className={`mb-2`}>
        Placed : <span>{data.createdAt}</span>
      </p>
      <div className={`bg-gray-100 p-1 rounded-sm mb-2`}>
        <div>
          <h4>Shipping Address :</h4>
          <span className={`flex items-center mb-2`}>
            <span className={`mr-2`}>
              <CiLocationOn className={`text-gray-400`} />
            </span>
            <span>{data.shippingAddress}</span>
          </span>
        </div>
        <div>
          <h4>Mobile Number :</h4>
          <div>
            <span className={`flex items-center`}>
              <span className={`mr-2`}>
                <MdMobileFriendly className={`text-green-500`} />
              </span>
              <span>{data.mobile}</span>
            </span>
          </div>
        </div>
      </div>

      <div className={`bg-gray-100 p-1 rounded-sm mb-2`}>
        <h3 className={`text-lg md:text-xl font-semibold`}>Products</h3>
        <ul>
          {data.products.map((ele, i) => (
            <li className={`flex items-center justify-between md:grid md:grid-cols-3 md:gap-2 place-items-center`}>
              <div>
                <img
                  src={ele.product.imageUrl}
                  alt={ele.product.name}
                  className={`w-40 h-auto object-cover`}
                />
              </div>
              <div>
                <h4 className={`text-[#5776a5] text-lg font-semibold`}>
                  {ele.product.name}
                </h4>
                <p>{ele.product.description}</p>
              </div>
              <div className={`text-red-500`}>
                <h4>{ele.product.owner.username}</h4>
                <p>
                  {ele.product.price} * {ele.qty}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <div className={`mt-4 border-t border-black`}>
          <h2 className={`text-lg font-semibold mb-2`}>Order Summery:</h2>
          <ul>
            <li className={`flex items-center justify-between`}>
              <span>SubTotal : </span>
              <span>{data.subTotal}</span>
            </li>
            <li className={`flex items-center justify-between`}>
              <span>Service Fee : </span>
              <span>{data.serviceFee}</span>
            </li>
            <li className={`font-bold flex items-center justify-between`}>
              <span className={`font-semibold`}>Total : </span>
              <span>{data.grandTotal}</span>
            </li>
          </ul>
        </div>
      </div>
    </MainSection>
  );
};

export default OrderDetails;
export const orderDetailsLoader = async ({ params }) => {
  const orderId = params.orderId;
  const response = await fetch(
    `https://net-zoon.onrender.com/order/${orderId}`
  );
  const data = await response.json();
  return data;
};
