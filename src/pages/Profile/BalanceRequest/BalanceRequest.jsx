import React, { useState } from "react";
import MainSection from "../../../components/UI/MainSection";

const BalanceRequest = () => {
  const [fullName, setFullName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [bankName, setBankName] = useState("");
  const [iban, setIban] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    // You can access the form data using the state variables (fullName, accountNumber, etc.)
    // For example, you can send this data to a server or perform any other actions you need.
  };

  return (
    <MainSection
      className={`!mt-52 md:!mt-32 w-[90%] md:w-[60%] mx-auto min-h-screen`}
    >
      <h2 className={`text-2xl font-semibold text-center mb-4`}>
        Please Fill in The Following Information
      </h2>
      <form
        onSubmit={handleSubmit}
        className={`flex flex-col w-[90%] md:w-[60%] mx-auto`}
      >
        <div
          className={`flex flex-col md:flex-row md:items-center items-start justify-between mb-4`}
        >
          <label htmlFor="fullName" className={`text-xl text-[#5776a5]`}>
            Full Name:
          </label>
          <input
            className={`outline-none w-60 mr-4 px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl md:ml-2 ml-0 duration-300`}
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div
          className={`flex  justify-between mb-4 flex-col md:flex-row md:items-center items-start`}
        >
          <label htmlFor="accountNumber" className={`text-xl text-[#5776a5]`}>
            Account Number:
          </label>
          <input
            className={`outline-none w-60 mr-4 px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl md:ml-2 ml-0 duration-300`}
            type="text"
            id="accountNumber"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            required
          />
        </div>
        <div
          className={`flex flex-col md:flex-row md:items-center items-start justify-between mb-4`}
        >
          <label htmlFor="bankName" className={`text-xl text-[#5776a5]`}>
            Bank Name:
          </label>
          <input
            className={`outline-none w-60 mr-4 px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl md:ml-2 ml-0 duration-300`}
            type="text"
            id="bankName"
            value={bankName}
            onChange={(e) => setBankName(e.target.value)}
            required
          />
        </div>
        <div
          className={`flex flex-col md:flex-row md:items-center items-start justify-between mb-4`}
        >
          <label htmlFor="iban" className={`text-xl text-[#5776a5]`}>
            IBAN:
          </label>
          <input
            className={`outline-none w-60 mr-4 px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl md:ml-2 ml-0 duration-300`}
            type="text"
            id="iban"
            value={iban}
            onChange={(e) => setIban(e.target.value)}
            required
          />
        </div>
        <div
          className={`flex flex-col md:flex-row md:items-center items-start justify-between mb-4`}
        >
          <label htmlFor="phoneNumber" className={`text-xl text-[#5776a5]`}>
            Phone Number:
          </label>
          <input
            className={`outline-none w-60 mr-4 px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl md:ml-2 ml-0 duration-300`}
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className={`text-xl font-semibold py-1 px-4 rounded-xl bg-[#5776a5] mb-4 text-white self-center`}
        >
          Send
        </button>
      </form>
    </MainSection>
  );
};

export default BalanceRequest;
