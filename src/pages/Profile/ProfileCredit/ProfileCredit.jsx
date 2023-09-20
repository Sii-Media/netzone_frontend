import React from "react";
import MainSection from "../../../components/UI/MainSection";
import { SlCreditCard } from "react-icons/sl";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { useSelector } from "react-redux";
import { getCurrencySymbol } from "../../../funcs/Currency";
import { Link } from "react-router-dom";
const ProfileCredit = () => {
  const currencySymbol = useSelector((state) =>
    getCurrencySymbol(state.currency.selectedCurrency)
  );
  return (
    <MainSection
      className={`!mt-52 md:!mt-28 mx-auto w-[90%] md:w-[60%] min-h-screen`}
    >
      <h2 className={`text-2xl font-semibold text-center mb-4`}>
        Your Credits
      </h2>

      <div
        className={`flex flex-col bg-[#5776a5] bg-opacity-30 rounded-lg p-2 mb-4`}
      >
        <h3 className={`text-gray-600`}>Available Balance</h3>
        <h4 className={`font-bold text-xl`}>{currencySymbol} 0.00</h4>
      </div>
      <Link
        to="balanceRequest"
        className={`flex items-center justify-between p-2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg`}
      >
        <SlCreditCard className={`text-gray-500 text-3xl`} />
        <div>
          <p className={`text-[#5776a5] text-xl font-semibold`}>
            Balance Request
          </p>
          <p className={`text-[#5776a5]`}>Submit a refund Request</p>
        </div>
        <IoIosArrowDropright className={`text-gray-500 text-3xl`} />
      </Link>
    </MainSection>
  );
};

export default ProfileCredit;
