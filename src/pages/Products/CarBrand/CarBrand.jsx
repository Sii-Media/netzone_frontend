import React from "react";
import cars from "../../../constants/cars";
import { useLoaderData, useParams } from "react-router-dom";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const CarBrand = () => {
  const params = useParams();
  const [productPhoto, setProductPhoto] = useState(null);
  const [productPhotos, setProductPhotos] = useState(null);
  const [productVideo, setProductVideo] = useState(null);
  const handleProductPhotoChange = (event) => {
    setProductPhoto(event.target.files[0]);
  };

  const handleProductPhotosChange = (event) => {
    setProductPhotos(event.target.files[0]);
  };

  const handleProductVideoChange = (event) => {
    setProductVideo(event.target.files[0]);
  };
  const [data] = useLoaderData();
  const { t } = useTranslation();
  const model = useRef();
  const description = useRef();
  const contactNumber = useRef();
  const kiloMeter = useRef();
  const price = useRef();
  const year = useRef();
  const address = useRef();
  const exteriorColor = useRef();
  const interiorColor = useRef();
  const doors = useRef();
  const bodyCondition = useRef();
  const bodyType = useRef();
  const mechanicalCondition = useRef();
  const seatingCapacity = useRef();
  const numberOfCylinders = useRef();
  const transmissionType = useRef();
  const horsePower = useRef();
  const fuelType = useRef();
  const extras = useRef();
  const technicalFeatures = useRef();
  const steeringSide = useRef();
  const condition = useRef();
  const forWhat = useRef();
  const guarantee = useRef();
  console.log(data);
  const handleSubmit = async (event) => {
    console.log("hello");
    console.log(params);
    event.preventDefault();
    console.log();
    const formData = new FormData();
    formData.append(
      "creator",
      JSON.parse(window.localStorage.getItem("user")).result._id
    );
    formData.append("category", "cars");
    formData.append("country", "AE");
    formData.append("name", `${params.carBrand} ${model.current.value}`);
    formData.append("description", description.current.value);
    formData.append("price", +price.current.value);
    formData.append("kilometers", +kiloMeter.current.value);
    formData.append("contactNumber", +contactNumber.current.value);
    formData.append("year", year.current.value.toString());
    formData.append("location", address.current.value);
    formData.append("exteriorColor", exteriorColor.current.value);
    formData.append("interiorColor", interiorColor.current.value);
    formData.append("doors", +doors.current.value);
    formData.append("bodyCondition", bodyCondition.current.value);
    formData.append("bodyType", bodyType.current.value);
    formData.append("mechanicalCondition", mechanicalCondition.current.value);
    formData.append("seatingCapacity", +seatingCapacity.current.value);
    formData.append("numofCylinders", +numberOfCylinders.current.value);
    formData.append("transmissionType", transmissionType.current.value);
    formData.append("horsepower", +horsePower.current.value);
    formData.append("fuelType", fuelType.current.value);
    formData.append("extras", extras.current.value);
    formData.append("technicalFeatures", technicalFeatures.current.value);
    formData.append("steeringSide", steeringSide.current.value);
    formData.append("type", condition.current.value);
    formData.append("forWhat", forWhat.current.value);
    formData.append("guarantee", guarantee.current.value ? true : false);
    formData.append("image", productPhoto);
    formData.append("carimages", productPhotos);
    formData.append("video", productVideo);
    const f = formData.forEach((ele) => console.log(ele));
    // console.log(console.log(f));
    try {
      const response = await fetch(
        "https://net-zoon.onrender.com/categories/vehicle/create-vehicle",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        // Handle success
        console.log("Data sent successfully");
        const data = await response.json();
        console.log(data);
        window.alert(data);
      } else {
        const data = await response.json();
        // Handle error
        console.log(data);
        console.log(formData);
        console.error("Error sending data");
        window.alert(data);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div
      className={`min-h-screen flex  flex-col py-10 mt-44 md:mt-24 w-[90%] mx-auto`}
    >
      <h1 className={`text-2xl text-[#5776a5] font-bold self-center mb-8`}>
        Brand name :{data.name}
      </h1>
      <form onSubmit={handleSubmit}>
        <div className={`flex  flex-col mb-4`}>
          <label className={`text-xl`}>{t("category")}</label>
          <select
            ref={model}
            className={`w-[90%] md:w-[40%]  px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl ml-2 duration-300`}
          >
            <option value="">{t("selectAnOption")}</option>
            {data.categories.map((item, i) => (
              <option key={i} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className={`flex  flex-col mb-4`}>
          <label className={`text-xl`}>{t("description")}</label>
          <input
            type="text"
            ref={description}
            className={`w-[90%] md:w-[40%] outline-none px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl duration-300`}
          />
        </div>
        <div className={`flex  flex-col mb-4`}>
          <label className={`text-xl`}>{t("price")}</label>
          <input
            required
            type="number"
            ref={price}
            className={`w-[90%] md:w-[40%]  outline-none px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl duration-300`}
          />
        </div>
        <div className={`flex  flex-col mb-4`}>
          <label className={`text-xl`}>{t("contactNumber")}</label>
          <input
            type="number"
            ref={contactNumber}
            className={` w-[90%] md:w-[40%]  outline-none px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl duration-300`}
          />
        </div>
        <div className={`flex  flex-col mb-4`}>
          <label className={`text-xl`}>{t("kiloMeter")}</label>
          <input
            type="number"
            ref={kiloMeter}
            className={` w-[90%] md:w-[40%]  outline-none px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl duration-300`}
          />
        </div>
        <div className={`flex  flex-col mb-4`}>
          <label className={`text-xl`}>{t("year")}</label>
          <input
            type="number"
            ref={year}
            className={`w-[90%] md:w-[40%] outline-none px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl duration-300`}
          />
        </div>
        <div className={`flex  flex-col mb-4`}>
          <label className={`text-xl`}>{t("address")}</label>
          <input
            type="text"
            ref={address}
            className={`w-[90%] md:w-[40%]  outline-none px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl duration-300`}
          />
        </div>
        <div className={`flex  flex-col mb-4`}>
          <label className={`text-xl`}>{t("exteriorColor")}</label>
          <input
            type="text"
            ref={exteriorColor}
            className={`w-[90%] md:w-[40%] outline-none px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl duration-300`}
          />
        </div>
        <div className={`flex  flex-col mb-4`}>
          <label className={`text-xl`}>{t("interiorColor")}</label>
          <input
            type="text"
            ref={interiorColor}
            className={`w-[90%] md:w-[40%]  outline-none px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl duration-300`}
          />
        </div>
        <div className={`flex  flex-col mb-4`}>
          <label className={`text-xl`}>{t("doors")}</label>
          <input
            type="number"
            ref={doors}
            className={`w-[90%] md:w-[40%]  outline-none px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl duration-300`}
          />
        </div>
        <div className={`flex  flex-col mb-4`}>
          <label className={`text-xl`}>{t("bodyCondition")}</label>
          <input
            type="text"
            ref={bodyCondition}
            className={`w-[90%] md:w-[40%]  outline-none px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl duration-300`}
          />
        </div>
        <div className={`flex  flex-col mb-4`}>
          <label className={`text-xl`}>{t("bodyType")}</label>
          <input
            type="text"
            ref={bodyType}
            className={`w-[90%] md:w-[40%]  outline-none px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl duration-300`}
          />
        </div>
        <div className={`flex  flex-col mb-4`}>
          <label className={`text-xl`}>{t("mechanicalCondition")}</label>
          <input
            type="text"
            ref={mechanicalCondition}
            className={` w-[90%] md:w-[40%]  outline-none px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl duration-300`}
          />
        </div>
        <div className={`flex  flex-col mb-4`}>
          <label className={`text-xl`}>{t("seatingCapacity")}</label>
          <input
            type="number"
            ref={seatingCapacity}
            className={` w-[90%] md:w-[40%]  outline-none px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl duration-300`}
          />
        </div>
        <div className={`flex  flex-col mb-4`}>
          <label className={`text-xl`}>{t("numberOfCylinders")}</label>
          <input
            type="number"
            ref={numberOfCylinders}
            className={`w-[90%] md:w-[40%]  outline-none px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl duration-300`}
          />
        </div>
        <div className={`flex  flex-col mb-4`}>
          <label className={`text-xl`}>{t("transmissionType")}</label>
          <input
            type="text"
            ref={transmissionType}
            className={`w-[90%] md:w-[40%]  outline-none px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl duration-300`}
          />
        </div>
        <div className={`flex  flex-col mb-4`}>
          <label className={`text-xl`}>{t("horsePower")}</label>
          <input
            type="text"
            ref={horsePower}
            className={`w-[90%] md:w-[40%]  outline-none px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl duration-300`}
          />
        </div>
        <div className={`flex  flex-col mb-4`}>
          <label className={`text-xl`}>{t("fuelType")}</label>
          <input
            type="text"
            ref={fuelType}
            className={`w-[90%] md:w-[40%]  outline-none px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl duration-300`}
          />
        </div>
        <div className={`flex  flex-col mb-4`}>
          <label className={`text-xl`}>{t("extras")}</label>
          <input
            type="text"
            ref={extras}
            className={`w-[90%] md:w-[40%]  outline-none px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl duration-300`}
          />
        </div>
        <div className={`flex  flex-col mb-4`}>
          <label className={`text-xl`}>{t("technicalFeatures")}</label>
          <input
            type="text"
            ref={technicalFeatures}
            className={`w-[90%] md:w-[40%]  outline-none px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl duration-300`}
          />
        </div>
        <div className={`flex  flex-col mb-4`}>
          <label className={`text-xl`}>{t("steeringSide")}</label>
          <input
            type="text"
            ref={steeringSide}
            className={` w-[90%] md:w-[40%] outline-none px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl duration-300`}
          />
        </div>
        <div className={`flex  flex-col mb-4`}>
          <p>{t("condition")}</p>
          <label className={`text-xl`}>{t("new")}</label>
          <input
            name="con"
            value="new"
            type="radio"
            ref={condition}
            className={` w-[90%] md:w-[40%]  outline-none px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl duration-300`}
          />
          <label className={`text-xl`}>{t("used")}</label>
          <input
            name="con"
            value="used"
            type="radio"
            ref={condition}
            className={`w-[90%] md:w-[40%] outline-none px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl duration-300`}
          />
        </div>
        <div className={`flex  flex-col mb-4`}>
          <label className={`text-xl`}>{t("forWhat")}</label>
          <input
            type="text"
            ref={forWhat}
            className={`w-[90%] md:w-[40%] outline-none px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl duration-300`}
          />
        </div>
        <div className={`flex  flex-col mb-4`}>
          <label className={`text-xl`}>{t("isThereGuarantee")}</label>
          <input
            type="checkbox"
            ref={guarantee}
            className={`w-[90%] md:w-[40%]  outline-none px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl duration-300`}
          />
        </div>
        <div className={`flex items-center mb-4`}>
          <label className={`text-xl`}>{t("productPhoto")}</label>
          <input
            multiple
            type="file"
            onChange={handleProductPhotoChange}
            // className={`w-32 outline-none focus:w-60 mr-4 px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl ml-2 duration-300`}
          />
        </div>
        <div className={`flex items-center mb-4`}>
          <label className={`text-xl`}>{t("productPhoto(s)")}</label>
          <input
            type="file"
            multiple
            max={6}
            onChange={handleProductPhotosChange}
            // className={`w-32 outline-none focus:w-60 mr-4 px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl ml-2 duration-300`}
          />
        </div>
        <div className={`flex items-center mb-4`}>
          <label className={`text-xl`}>{t("productVideo")}</label>
          <input
            type="file"
            multiple
            onChange={handleProductVideoChange}
            // className={`w-32 outline-none focus:w-60 mr-4 px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl ml-2 duration-300`}
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
    </div>
  );
};

export default CarBrand;
export const carBrandLoader = async ({ params }) => {
  const carType = params.carBrand;
  console.log(carType);
  const requestedData = cars.filter((ele) => carType === ele.name);
  return requestedData;
};
