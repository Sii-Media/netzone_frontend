import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import PageSection from "../../../components/UI/PageSection";
import MainSection from "../../../components/UI/MainSection";
import { useEffect } from "react";

export const DeliveryInformation = () => {
  const [city, setCity] = useState(""); // State variable for city
  const [addressDetails, setAddressDetails] = useState(""); // State variable for address details
  const [floorNum, setFloorNum] = useState(""); // State variable for floor number
  const [mobile, setMobile] = useState(""); // State variable for mobile number

  const [formData, setFormData] = useState({
    userId: JSON.parse(window.localStorage.getItem("user")).result._id, // Initialize with the user's ID
    products: [], // An array to hold product data in the expected format
    orderStatus: "pending", // Default order status
    grandTotal: JSON.parse(window.localStorage.getItem("lastTotalPrice")), // Initialize with the grand total
    shippingAddress: ``,
    mobile: ``,
  });
  // Use useEffect to load products from cartItems into products array
  useEffect(() => {
    const cartItemsFromLocalStorage = JSON.parse(
      window.localStorage.getItem("cartItems")
    );

    // Make sure cartItemsFromLocalStorage is an array and not null
    if (
      Array.isArray(cartItemsFromLocalStorage) &&
      cartItemsFromLocalStorage.length > 0
    ) {
      // Update the products array in formData
      setFormData((prevFormData) => ({
        ...prevFormData,
        products: cartItemsFromLocalStorage.map((item) => ({
          product: item.id,
          amount: item.Price,
          qty: item.quantity,
        })),
      }));
    }
  }, []);
  useEffect(() => {
    // Update shippingAddress whenever city, addressDetails, or floorNum changes
    const updatedShippingAddress = `${city}, ${addressDetails}, ${floorNum}`;
    setFormData((prevFormData) => ({
      ...prevFormData,
      shippingAddress: updatedShippingAddress,
    }));
  }, [city, addressDetails, floorNum]);

  useEffect(() => {
    // Update mobile in formData whenever mobile changes
    setFormData((prevFormData) => ({
      ...prevFormData,
      mobile: mobile,
    }));
  }, [mobile]);
  const saveOrder = async () => {
    const baseUrl = process.env.REACT_APP_BASE_URL;

    try {
      // Create an array of product objects in the desired format
      const productsArray = formData.products.map((product) => ({
        product: product.product,
        amount: product.amount,
        qty: product.qty,
      }));

      const requestData = {
        userId: formData.userId,
        products: productsArray,
        orderStatus: formData.orderStatus,
        grandTotal: formData.grandTotal,
        shippingAddress: formData.shippingAddress,
        mobile: formData.mobile,
        subTotal: formData.subTotal,
        serviceFee: formData.serviceFee,
      };

      const response = await fetch(baseUrl + "/order/save/" + formData.userId, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Order saved successfully:", data);
        // Handle the successful response as needed
      } else {
        console.error("Request failed with status code:", response.status);
        // Handle other status codes if necessary
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle any other errors
    }
  };
  const form = useRef();
  const userInfo = JSON.parse(window.localStorage.getItem("user")).result;
  const cartInfo = JSON.parse(window.localStorage.getItem("cartItems"));
  const [productsForDB, setProductsForDB] = useState([]);

  // Extract sellers from cartInfo using map
  const sellers = cartInfo.map((item) => item.owner).join(" / ");

  const sendEmail = async (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7yt10vg",
        "template_2ptxcf9",
        form.current,
        "2vGtyRz3bApfGj25l"
      )
      .then(
        (result) => {
          console.log(result.text);
        },

        (error) => {
          console.log(error.text);
        }
      );
    saveOrder();
    window.localStorage.setItem("cartItems", JSON.stringify([]));
    window.localStorage.setItem("lastTotalPrice", JSON.stringify(0));
    window.alert("Congrats, your order has been placed Successfully");
    window.location.replace("/");
  };

  return (
    <MainSection
      className={`mt-40 md:mt-32 flex md:justify-center items-center w-full md:w-auto`}
    >
      <form ref={form} onSubmit={sendEmail} className={`flex flex-col  w-full`}>
        <h2 className={`text-[#5776a5] text-2xl font-semibold`}>
          Delivery Information
        </h2>

        <input
          type="hidden"
          name="subject"
          value="Order Delivery"
          className={`rounded-md border border-[#5776a5] p-1 w-full md:w-60 outline-none md:mr-2`}
        />
        <input
          type="hidden"
          name="from"
          value={sellers}
          className={`rounded-md border border-[#5776a5] p-1 w-full md:w-60 outline-none md:mr-2`}
        />
        <label className={`text-xl text-[#5776a5] mb-2 mt-4 `}>Your Name</label>
        <input
          type="text"
          name="to_name"
          value={userInfo.username}
          className={`rounded-md border border-[#5776a5] p-1 w-full md:w-60 outline-none md:mr-2`}
        />
        <label className={`text-xl text-[#5776a5] mb-2 mt-4`}>
          Your Mobile
        </label>
        <input
          type="tel"
          name="mobile"
          onChange={(e) => setMobile(e.target.value)} // Update mobile state
          value={userInfo.firstMobile}
          className={`rounded-md border border-[#5776a5] p-1 w-full md:w-60 outline-none md:mr-2`}
        />
        <label className={`text-xl text-[#5776a5] mb-2 mt-4`}>
          Your E-mail
        </label>
        <input
          type="email"
          name="to_email"
          className={`rounded-md border border-[#5776a5] p-1 w-full md:w-60 outline-none md:mr-2`}
        />
        <label className={`text-xl text-[#5776a5] mb-2 mt-4`}>Your City</label>
        <input
          type="text"
          name="city"
          value={city}
          onChange={(e) => setCity(e.target.value)} // Update city state
          className={`rounded-md border border-[#5776a5] p-1 w-full md:w-60 outline-none md:mr-2`}
        />
        <label className={`text-xl text-[#5776a5] mb-2 mt-4`}>
          Your Address Details
        </label>
        <input
          type="text"
          name="address_details"
          value={addressDetails}
          onChange={(e) => setAddressDetails(e.target.value)} // Update addressDetails state
          className={`rounded-md border border-[#5776a5] p-1 w-full md:w-60 outline-none md:mr-2`}
        />
        <label className={`text-xl text-[#5776a5] mb-2 mt-4`}>
          Floor Number
        </label>
        <input
          type="text"
          value={floorNum}
          onChange={(e) => setFloorNum(e.target.value)} // Update floorNum state
          name="floor_num"
          className={`rounded-md border border-[#5776a5] p-1 w-full md:w-60 outline-none md:mr-2`}
        />
        <input
          type="submit"
          value="Send"
          className={`mt-4 px-2 py-1 bg-[#5776a5] text-white text-xl font-semibold rounded-lg mb-4 w-full md:w-60 cursor-pointer`}
        />
      </form>
    </MainSection>
  );
};
