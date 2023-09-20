import React, { useRef } from "react";
import MainSection from "../../../components/UI/MainSection";
import { t } from "i18next";
import { border } from "@mui/system";

const AddDeliveryService = () => {
  const serviceName = useRef();
  const serviceDescription = useRef();
  const serviceFrom = useRef();
  const serviceTo = useRef();
  const servicePrice = useRef();
  const userId = JSON.parse(window.localStorage.getItem("user")).result._id;
  console.log(userId);
  const submitHandler = async (e) => {
    const baseUrl = process.env.REACT_APP_BASE_URL;

    e.preventDefault();
    const formData = new FormData();
    formData.append("owner", userId);
    formData.append("title", serviceName.current.value);
    formData.append("description", serviceDescription.current.value);
    formData.append("from", serviceFrom.current.value);
    formData.append("to", serviceTo.current.value);
    formData.append("price", servicePrice.current.value);
    const response = await fetch(baseUrl + `/delivery/add-service`, {
      method: "post",
      body: formData,
    });
    const data = await response.json();
    console.log(data);
  };
  return (
    <MainSection className={`!mt-52 md:!mt-28`}>
      <form onSubmit={submitHandler}>
        <div className={`flex  flex-col mb-4`}>
          <label className={`text-lg text-[#5776a5]`}>
            {t("service_name")}
          </label>
          <input
            required
            type="text"
            ref={serviceName}
            className={`w-[90%] md:w-[40%]  outline-none mr-4 px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl  duration-300`}
          />
        </div>
        <div className={`flex  flex-col mb-4`}>
          <label className={`text-lg text-[#5776a5]`}>{t("description")}</label>
          <input
            required
            type="text"
            ref={serviceDescription}
            className={`w-[90%] md:w-[40%]  outline-none mr-4 px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl  duration-300`}
          />
        </div>
        <div className={`flex  flex-col mb-4`}>
          <label className={`text-lg text-[#5776a5]`}>{t("from")}</label>
          <input
            required
            type="text"
            ref={serviceFrom}
            className={`w-[90%] md:w-[40%]  outline-none mr-4 px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl  duration-300`}
          />
        </div>{" "}
        <div className={`flex  flex-col mb-4`}>
          <label className={`text-lg text-[#5776a5]`}>{t("to")}</label>
          <input
            required
            type="text"
            ref={serviceTo}
            className={`w-[90%] md:w-[40%]  outline-none mr-4 px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl  duration-300`}
          />
        </div>
        <div className={`flex  flex-col mb-4`}>
          <label className={`text-lg text-[#5776a5]`}>{t("price")}</label>
          <input
            required
            type="number"
            ref={servicePrice}
            className={`w-[90%] md:w-[40%]  outline-none mr-4 px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl  duration-300`}
          />
        </div>
        <div className={`flex items-center mb-4`}>
          <button
            type="submit"
            className={`w-24 flex justify-center items-center border-2 bg-[#5776a5] border-[#5776a5] rounded-xl text-white hover:bg-transparent hover:text-[#5776a5] duration-300`}
          >
            {t("submit")}
          </button>
        </div>
      </form>
    </MainSection>
  );
};

export default AddDeliveryService;
