import React, { useEffect } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import MainSection from "../../components/UI/MainSection";
import { useRef } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import cars from "../../constants/cars";
import { useSelector } from "react-redux";
const Addon = () => {
  const currency = useSelector((state) => state.currency.selectedCurrency);
  const data = useLoaderData();
  const [selectedOptionCar, setSelectedOptionCar] = useState("");
  const [adStartDateState, setAdStartDate] = useState();
  const [adEndDateState, setAdEndDate] = useState();
  const handleEndDateState = () => {};
  const handleStartDateState = () => {};
  const [totalFees, setTotalFees] = useState(0);
  const handleOptionCarChange = (event) => {
    setSelectedOptionCar(event.target.value);
  };
  const [addFees, setAddFees] = useState(0);
  console.log(selectedOptionCar);
  const { t } = useTranslation();
  const optionsDep = [
    { value: "", label: "Select An Option" },
    { value: "الكترونيات", label: t("electronics") },
    { value: "أجهزة المنزل والمكتب", label: t("homeAndOfficeDevices") },
    { value: "موضة رجالية", label: t("men'sFashion") },
    { value: "موضة نسائية", label: t("women'sFashion") },
    { value: "منتجات غذائية", label: t("foodProducts") },
    { value: "عطور", label: t("perfumes") },
    { value: "ساعات", label: t("watches") },
    { value: "حيوانات", label: t("animals") },
    { value: "آلات موسيقية", label: t("musicalInstruments") },
    { value: "أجهزة رياضية", label: t("sportMachines") },
    { value: "الزراعة", label: t("agriculture") },
  ];
  const [selectedOptionsDep, setSelectedOptionsDep] = useState("");
  const handleOptionsDepChange = (event) => {
    setSelectedOptionsDep(event.target.value);
  };
  console.log(selectedOptionsDep);
  const [selectedOption, setSelectedOption] = useState(""); // State to track the selected option

  const options = [
    {
      label: "New and used civil and private aircraft",
      value: "الطائرات المدنية والخاصة الجديدة و المستخدمة",
    },
    {
      label: "Cars, New and Used",
      value: "السيارات، الجديدة و المستخدمة",
    },
    {
      label: "Individual Tenders",
      value: "المناقصات الفردية",
    },
    {
      label: "Active Shops",
      value: "محلات نشطة",
    },
    {
      label: "Civil, private and used boats and vessels",
      value: "القوارب والسفن المدنية والخاصة والمستخدمة",
    },
    {
      label: "Real Estate",
      value: "العقارات",
    },
    {
      label: "Building Material",
      value: "مواد بناء",
    },
    {
      label: "Scrap",
      value: "سكراب",
    },
    {
      label: "Infrastructure Material",
      value: "مواد بناء تحتية",
    },
  ];

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const [selectedCategory, setSelectedCategory] = useState(""); // State to track the selected category

  const categories = [
    { label: "Company", value: "company" },
    { label: "Car", value: "car" },
    { label: "Planes", value: "planes" },
    { label: "Real Estate", value: "real_estate" },
    { label: "Product", value: "product" },
    { label: "Service", value: "service" },
  ];

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  const [productPhoto, setProductPhoto] = useState(null);
  const [productVideo, setProductVideo] = useState(null);
  const [productPhotos, setProductPhotos] = useState(null);
  const handleProductPhotoChange = (event) => {
    setProductPhoto(event.target.files[0]);
  };
  const handleProductVideoChange = (event) => {
    setProductVideo(event.target.files[0]);
  };
  const handleProductPhotosChange = (event) => {
    setProductPhotos(event.target.files);
  };
  const params = useParams();
  const isUser = window.localStorage.getItem("user") ? true : false;
  const isService = JSON.parse(window.localStorage.getItem("user")).result
    .isService;
  console.log(isService);
  const userType = JSON.parse(window.localStorage.getItem("user")).result
    .userType;
  const userId = JSON.parse(window.localStorage.getItem("user")).result._id;
  console.log(userType);
  const serviceName = useRef();
  const serviceDescription = useRef();
  const price = useRef();
  const number = useRef();
  const bio = useRef();
  //
  const adName = useRef();
  const adDescription = useRef();
  const adStartDate = useRef();
  const adEndDate = useRef();
  const adAddress = useRef();
  const adPrice = useRef();
  const adContactNumber = useRef();
  const adYear = useRef();
  const adPurchasable = useRef();
  const adGuarantee = useRef();
  //
  const dealName = useRef();
  const dealCompany = useRef();
  const dealPreviousPrice = useRef();
  const dealCurrentPrice = useRef();
  const dealStartDate = useRef();
  const dealEndDate = useRef();
  const dealLocation = useRef();
  //
  const prodCategory = useRef();
  const prodName = useRef();
  const prodPrice = useRef();
  const prodQuantity = useRef();
  const prodColor = useRef();
  const prodDiscount = useRef();
  const prodCondition = useRef();
  const prodAddress = useRef();
  const prodDescription = useRef();
  const prodMadeIn = useRef();
  const prodGuarantee = useRef();
  const prodCountry = useRef();
  //
  const handleSubmit = async (event) => {
    event.preventDefault();
    const baseUrl = process.env.REACT_APP_BASE_URL;

    const formData = new FormData();
    if (params.addon === "services") {
      formData.append("owner", userId);
      formData.append("title", serviceName.current.value);
      formData.append("description", serviceDescription.current.value);
      // eslint-disable-next-line no-lone-blocks
      if (price.current.value !== "") {
        formData.append("price", price.current.value);
      }
      // formData.append("price", price.current.value);
      formData.append("whatsAppNumber", number.current.value);
      formData.append("image", productPhoto);
      formData.append("video", productVideo);

      let files;
      if (productPhotos !== null) {
        files = [...productPhotos];
        files.forEach((ele) => formData.append("serviceImageList", ele));
      }
      try {
        const response = await fetch(
          baseUrl + "/categories/local-company/add-service",
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
          window.alert("The service has been added successfully");
        } else {
          const data = await response.json();
          // Handle error
          console.log(data);
          console.log(formData);
          console.error("Error sending data");
          window.alert("The service not added");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
    if (params.addon === "advertisement") {
      formData.append("owner", userId);
      formData.append(
        "purchasable",
        adPurchasable.current.checked ? true : false
      );
      formData.append("advertisingType", selectedCategory);
      formData.append("advertisingTitle", adName.current.value);
      formData.append(
        "advertisingStartDate",
        adStartDate.current.value.toString()
      );
      formData.append("advertisingEndDate", adEndDate.current.value.toString());
      formData.append("advertisingDescription", adDescription.current.value);
      // eslint-disable-next-line no-lone-blocks

      formData.append("advertisingPrice", adPrice.current.value);

      // formData.append("price", price.current.value);
      formData.append("contactNumber", adContactNumber.current.value);
      formData.append("advertisingYear", adYear.current.value);
      formData.append("advertisingLocation", adAddress.current.value);
      formData.append("image", productPhoto);
      formData.append("guarantee", adGuarantee.current.checked ? true : false);
      formData.append("video", productVideo);

      let files;
      if (productPhotos !== null) {
        files = [...productPhotos];
        files.forEach((ele) => formData.append("advertisingImageList", ele));
      }
      try {
        const response = await fetch(baseUrl + "/advertisements/createAds", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          // Handle success
          console.log("Data sent successfully");
          const data = await response.json();
          console.log(data);
          window.alert("Ad has been added successfully");
          window.location.replace("/add/advertisement/paymentgateway");
        } else {
          const data = await response.json();
          // Handle error
          console.log(data);
          console.log(formData);
          console.error("Error sending data");
          window.alert("The Ad not added");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
    if (params.addon === "deal") {
      formData.append("owner", userId);
      formData.append("name", dealName.current.value);
      formData.append("dealImage", productPhoto);
      formData.append("companyName", dealCompany.current.value);
      formData.append("prevPrice", dealPreviousPrice.current.value);
      formData.append("currentPrice", dealCurrentPrice.current.value);
      formData.append("startDate", dealEndDate.current.value.toString());
      formData.append("endDate", dealEndDate.current.value.toString());
      formData.append("location", dealLocation.current.value);
      formData.append("category", selectedOption);
      formData.append("country", currency.toString());

      try {
        const response = await fetch(baseUrl + "/deals/addDeal", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          // Handle success
          console.log("Data sent successfully");
          const data = await response.json();
          console.log(data);
          window.alert("Deal has been added successfully");
        } else {
          const data = await response.json();
          // Handle error
          console.log(data);
          console.log(formData);
          console.error("Error sending data");
          window.alert("The Deal not added");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
    if (params.addon === "products") {
      formData.append("owner", userId);
      formData.append("name", prodName.current.value);
      formData.append("image", productPhoto);
      formData.append("departmentName", selectedOptionsDep);
      formData.append("description", prodDescription.current.value);
      formData.append("price", prodPrice.current.value);
      formData.append("guarantee", prodPrice.current.checked ? true : false);
      formData.append("categoryName", "tvs");
      formData.append("address", prodAddress.current.value);
      formData.append(" condition", prodCondition.current.value);
      formData.append("discountPercentage", prodDiscount.current.value);
      formData.append("quantity", prodQuantity.current.value);
      formData.append("color", prodColor.current.value);
      let files;
      if (productPhotos !== null) {
        files = [...productPhotos];
        files.forEach((ele) => formData.append("productimages", ele));
      }
      formData.append("video", productVideo);
      formData.append("country", prodCountry.current.value);

      const f = formData.forEach((ele) => console.log(ele));
      const confirmation = window.confirm(`You should Pay ${addFees}`);
      console.log(confirmation);
      if (confirmation === true) {
        try {
          const response = await fetch(baseUrl + "/departments/addProduct", {
            method: "POST",
            body: formData,
          });

          if (response.ok) {
            // Handle success
            console.log("Data sent successfully");
            const data = await response.json();
            window.alert("Product Created");
            console.log(data);
          } else {
            const data = await response.json();
            // Handle error
            console.log(data);
            console.log(formData);
            console.error("Error sending data");
            window.alert("Product Not Created");
          }
        } catch (error) {
          console.error("Error:", error);
        }
      } else {
        return;
      }
    }
  };

  useEffect(() => {
    if (params.addon === "products") {
      console.log(prodCondition.current.value);
      if (prodCondition.current.value === "new") {
        setAddFees(5);
      }
      if (prodCondition.current.value === "used") {
        setAddFees(10);
      }
    }
  }, [params.addon, prodCondition]);
  const handleFees = () => {
    const days =
      +adEndDate.current.value.slice(8, 10) -
      +adStartDate.current.value.slice(8, 10);
    setTotalFees(days * 5);
  };
  useEffect(() => {
    if (params.addon === "advertisement") {
      console.log(true);
      window.localStorage.setItem("adFees", JSON.stringify(totalFees));
    }
  }, [params.addon, adStartDate, adEndDate, totalFees]);

  return (
    <div>
      {isUser && (
        <>
          {isService && (
            <>
              {params.addon === "services" && (
                <MainSection className={`!mt-44 md:!mt-24`}>
                  <p
                    className={`text-2xl font-semibold text-[#5776a5] text-center mb-8`}
                  >
                    Add {params.addon}
                  </p>
                  <form onSubmit={handleSubmit}>
                    <div className={`flex  flex-col mb-4`}>
                      <label
                        htmlFor="serviceName"
                        className={`text-lg text-[#5776a5]`}
                      >
                        Service Name
                      </label>
                      <input
                        id="title"
                        type="text"
                        name="title"
                        required
                        ref={serviceName}
                        className={`w-[90%] md:w-[40%]  outline-none  mr-4 px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl  duration-300`}
                      />
                    </div>
                    <div className={`flex  flex-col mb-4`}>
                      <label
                        htmlFor="description"
                        className={`text-lg text-[#5776a5]`}
                      >
                        Description
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        required
                        ref={serviceDescription}
                        className={`w-[90%] md:w-[40%]  outline-none  mr-4 px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl  duration-300`}
                      />
                    </div>
                    <div className={`flex  flex-col mb-4`}>
                      <label
                        htmlFor="price"
                        className={`text-lg text-[#5776a5]`}
                      >
                        Price
                      </label>
                      <input
                        id="price"
                        type="number"
                        name="price"
                        ref={price}
                        className={`w-[90%] md:w-[40%]  outline-none mr-4 px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl  duration-300`}
                      />
                    </div>
                    <div className={`flex  flex-col mb-4`}>
                      <label
                        htmlFor="number"
                        className={`text-lg text-[#5776a5]`}
                      >
                        Number
                      </label>
                      <input
                        id="number"
                        type="text"
                        name="number"
                        ref={number}
                        className={`w-[90%] md:w-[40%]  outline-none mr-4 px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl  duration-300`}
                      />
                    </div>
                    <div className={`flex  flex-col mb-4`}>
                      <label htmlFor="bio" className={`text-lg text-[#5776a5]`}>
                        Bio
                      </label>
                      <input
                        id="bio"
                        type="text"
                        name="bio"
                        ref={bio}
                        className={`w-[90%] md:w-[40%]  outline-none mr-4 px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl  duration-300`}
                      />
                    </div>
                    <div className={`flex  flex-col mb-4`}>
                      <label className={`text-lg text-[#5776a5]`}>
                        Service Photo
                      </label>
                      <input
                        type="file"
                        onChange={handleProductPhotoChange}
                        // className={`w-32 outline-none focus:w-60 mr-4 px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl ml-2 duration-300`}
                      />
                    </div>
                    <div className={`flex  flex-col mb-4`}>
                      <label className={`text-lg text-[#5776a5]`}>
                        Service Video
                      </label>
                      <input
                        type="file"
                        onChange={handleProductVideoChange}
                        // className={`w-32 outline-none focus:w-60 mr-4 px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl ml-2 duration-300`}
                      />
                    </div>
                    <div className={`flex  flex-col mb-4`}>
                      <label className={`text-lg text-[#5776a5]`}>
                        Service Photo(s)
                      </label>
                      <input
                        type="file"
                        multiple
                        max={6}
                        onChange={handleProductPhotosChange}
                        // className={`w-32 outline-none focus:w-60 mr-4 px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl ml-2 duration-300`}
                      />
                    </div>

                    <div className={`flex items-center mb-4`}>
                      <button
                        type="submit"
                        className={`w-24 flex justify-center items-center border-2 bg-[#5776a5] border-[#5776a5] rounded-xl text-white hover:bg-transparent hover:text-[#5776a5] duration-300`}
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </MainSection>
              )}
              {/*  */}
              {params.addon === "advertisement" && (
                <MainSection className={`!mt-44 md:!mt-24`}>
                  <p
                    className={`text-2xl font-semibold text-[#5776a5] text-center mb-8`}
                  >
                    Add {params.addon}
                  </p>
                  <form onSubmit={handleSubmit}>
                    <div>
                      <label className={`text-lg text-[#5776a5]`}>
                        Select the Department
                      </label>
                      <select
                        className={`w-[90%] md:w-[40%] mb-4  outline-none  mr-4 px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl  duration-300`}
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                      >
                        <option value="">Department</option>
                        {categories.map((category, index) => (
                          <option key={index} value={category.value}>
                            {category.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className={`flex  flex-col mb-4`}>
                      <label
                        htmlFor="adName"
                        className={`text-lg text-[#5776a5]`}
                      >
                        Ad Name
                      </label>
                      <input
                        id="adName"
                        type="text"
                        name="adName"
                        required
                        ref={adName}
                        className={`w-[90%] md:w-[40%]  outline-none  mr-4 px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl  duration-300`}
                      />
                    </div>
                    <div className={`flex  flex-col mb-4`}>
                      <label
                        htmlFor="adDescription"
                        className={`text-lg text-[#5776a5]`}
                      >
                        Description
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        required
                        ref={adDescription}
                        className={`w-[90%] md:w-[40%]  outline-none  mr-4 px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl  duration-300`}
                      />
                    </div>
                    <div className={`flex  flex-col mb-4`}>
                      <label
                        htmlFor="adStartDate"
                        className={`text-lg text-[#5776a5]`}
                      >
                        Start Date
                      </label>
                      <input
                        id="adStartDate"
                        type="date"
                        name="adStartDate"
                        ref={adStartDate}
                        className={`w-[90%] md:w-[40%]  outline-none mr-4 px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl  duration-300`}
                      />
                    </div>
                    <div className={`flex  flex-col mb-4`}>
                      <label
                        htmlFor="adEndDate"
                        className={`text-lg text-[#5776a5]`}
                      >
                        End Date
                      </label>
                      <input
                        id="adEndDate"
                        type="date"
                        name="adEndDate"
                        ref={adEndDate}
                        onChange={handleFees}
                        className={`w-[90%] md:w-[40%]  outline-none mr-4 px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl  duration-300`}
                      />
                    </div>
                    <div>
                      Your Total Fees Amount :{" "}
                      <span className={`text-red-600`}>{totalFees}</span>
                    </div>

                    <div className={`flex  flex-col mb-4`}>
                      <label
                        htmlFor="address"
                        className={`text-lg text-[#5776a5]`}
                      >
                        Address
                      </label>
                      <input
                        id="address"
                        type="text"
                        name="address"
                        ref={adAddress}
                        className={`w-[90%] md:w-[40%]  outline-none mr-4 px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl  duration-300`}
                      />
                    </div>
                    <div className={`flex  flex-col mb-4`}>
                      <label
                        htmlFor="price"
                        className={`text-lg text-[#5776a5]`}
                      >
                        Price
                      </label>
                      <input
                        id="price"
                        type="number"
                        name="price"
                        ref={adPrice}
                        className={`w-[90%] md:w-[40%]  outline-none mr-4 px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl  duration-300`}
                      />
                    </div>
                    <div className={`flex  flex-col mb-4`}>
                      <label
                        htmlFor="number"
                        className={`text-lg text-[#5776a5]`}
                      >
                        Number
                      </label>
                      <input
                        id="number"
                        type="text"
                        name="number"
                        ref={adContactNumber}
                        className={`w-[90%] md:w-[40%]  outline-none mr-4 px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl  duration-300`}
                      />
                    </div>
                    <div className={`flex  flex-col mb-4`}>
                      <label
                        htmlFor="year"
                        className={`text-lg text-[#5776a5]`}
                      >
                        Year
                      </label>
                      <input
                        id="year"
                        type="number"
                        name="year"
                        ref={adYear}
                        className={`w-[90%] md:w-[40%]  outline-none mr-4 px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl  duration-300`}
                      />
                    </div>
                    <div>
                      <label>Is Purchasable</label>
                      <input type="checkbox" ref={adPurchasable} />
                    </div>
                    <div>
                      <label>Is there a guarantee</label>
                      <input type="checkbox" ref={adGuarantee} />
                    </div>
                    <div className={`flex  flex-col mb-4`}>
                      <label className={`text-lg text-[#5776a5]`}>
                        Service Photo
                      </label>
                      <input
                        type="file"
                        onChange={handleProductPhotoChange}
                        // className={`w-32 outline-none focus:w-60 mr-4 px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl ml-2 duration-300`}
                      />
                    </div>
                    <div className={`flex  flex-col mb-4`}>
                      <label className={`text-lg text-[#5776a5]`}>
                        Service Video
                      </label>
                      <input
                        type="file"
                        onChange={handleProductVideoChange}
                        // className={`w-32 outline-none focus:w-60 mr-4 px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl ml-2 duration-300`}
                      />
                    </div>
                    <div className={`flex  flex-col mb-4`}>
                      <label className={`text-lg text-[#5776a5]`}>
                        Service Photo(s)
                      </label>
                      <input
                        type="file"
                        multiple
                        max={6}
                        onChange={handleProductPhotosChange}
                        // className={`w-32 outline-none focus:w-60 mr-4 px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl ml-2 duration-300`}
                      />
                    </div>

                    <div className={`flex items-center mb-4`}>
                      <button
                        type="submit"
                        className={`w-24 flex justify-center items-center border-2 bg-[#5776a5] border-[#5776a5] rounded-xl text-white hover:bg-transparent hover:text-[#5776a5] duration-300`}
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </MainSection>
              )}
              {/*  */}
              {params.addon === "deal" && (
                <MainSection className={`!mt-44 md:!mt-24`}>
                  <p
                    className={`text-2xl font-semibold text-[#5776a5] text-center mb-8`}
                  >
                    Add {params.addon}
                  </p>
                  <form onSubmit={handleSubmit}>
                    <div>
                      <label className={`text-lg text-[#5776a5]`}>
                        Select the Category
                      </label>
                      <select
                        className={`w-[90%] md:w-[40%] mb-4  outline-none  mr-4 px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl  duration-300`}
                        value={selectedOption}
                        onChange={handleOptionChange}
                      >
                        <option value="">Select an option</option>
                        {options.map((option, index) => (
                          <option key={index} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className={`flex  flex-col mb-4`}>
                      <label className={`text-lg text-[#5776a5]`}>
                        Deal Title
                      </label>
                      <input
                        type="text"
                        required
                        ref={dealName}
                        className={`w-[90%] md:w-[40%]  outline-none  mr-4 px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl  duration-300`}
                      />
                    </div>
                    <div className={`flex  flex-col mb-4`}>
                      <label className={`text-lg text-[#5776a5]`}>
                        Deal Company
                      </label>
                      <textarea
                        required
                        ref={dealCompany}
                        className={`w-[90%] md:w-[40%]  outline-none  mr-4 px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl  duration-300`}
                      />
                    </div>
                    <div className={`flex  flex-col mb-4`}>
                      <label className={`text-lg text-[#5776a5]`}>
                        Previous Price
                      </label>
                      <input
                        type="number"
                        ref={dealPreviousPrice}
                        className={`w-[90%] md:w-[40%]  outline-none mr-4 px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl  duration-300`}
                      />
                    </div>
                    <div className={`flex  flex-col mb-4`}>
                      <label className={`text-lg text-[#5776a5]`}>
                        Current Price
                      </label>
                      <input
                        type="number"
                        ref={dealCurrentPrice}
                        className={`w-[90%] md:w-[40%]  outline-none mr-4 px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl  duration-300`}
                      />
                    </div>
                    <div className={`flex  flex-col mb-4`}>
                      <label className={`text-lg text-[#5776a5]`}>
                        Start Date
                      </label>
                      <input
                        type="date"
                        ref={dealStartDate}
                        className={`w-[90%] md:w-[40%]  outline-none mr-4 px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl  duration-300`}
                      />
                    </div>
                    <div className={`flex  flex-col mb-4`}>
                      <label className={`text-lg text-[#5776a5]`}>
                        End Date
                      </label>
                      <input
                        type="date"
                        ref={dealEndDate}
                        className={`w-[90%] md:w-[40%]  outline-none mr-4 px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl  duration-300`}
                      />
                    </div>
                    <div className={`flex  flex-col mb-4`}>
                      <label className={`text-lg text-[#5776a5]`}>
                        Location
                      </label>
                      <input
                        type="text"
                        ref={dealLocation}
                        className={`w-[90%] md:w-[40%]  outline-none mr-4 px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl  duration-300`}
                      />
                    </div>

                    <div className={`flex  flex-col mb-4`}>
                      <label className={`text-lg text-[#5776a5]`}>
                        Service Photo
                      </label>
                      <input
                        type="file"
                        onChange={handleProductPhotoChange}
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
                </MainSection>
              )}
            </>
          )}

          {(isService === undefined || isService === false) && (
            <>
              {params.addon === "products" && (
                <MainSection className={`!mt-44 md:!mt-24`}>
                  <form onSubmit={handleSubmit}>
                    <div>
                      <div className={`flex  flex-col mb-4`}>
                        <label htmlFor="userType" className={`text-xl`}>
                          {t("department")}
                        </label>
                        <select
                          id="userType"
                          name="userType"
                          value={selectedOptionsDep}
                          onChange={handleOptionsDepChange}
                          className={`w-[90%] md:w-[40%] outline-none mr-4 px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl ml-2 duration-300`}
                        >
                          {optionsDep.map((option, index) => (
                            <option key={index} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className={`flex  flex-col mb-4`}>
                      <label className={`text-xl`}>{t("productName")}</label>
                      <input
                        required
                        type="text"
                        ref={prodName}
                        className={`w-[90%] md:w-[40%] outline-none px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl duration-300`}
                      />
                    </div>
                    <div className={`flex  flex-col mb-4`}>
                      <label className={`text-xl`}>{t("country")}</label>
                      <input
                        type="text"
                        required
                        ref={prodCountry}
                        className={` w-[90%] md:w-[40%] outline-none px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl duration-300`}
                      />
                    </div>
                    <div className={`flex  flex-col mb-4`}>
                      <label className={`text-xl`}>{t("description")}</label>
                      <input
                        type="text"
                        required
                        ref={prodDescription}
                        className={`w-[90%] md:w-[40%] outline-none px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl duration-300`}
                      />
                    </div>
                    <div className={`flex  flex-col mb-4`}>
                      <label className={`text-xl`}>{t("price")}</label>
                      <input
                        required
                        type="number"
                        ref={prodPrice}
                        className={` w-[90%] md:w-[40%] outline-none px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl duration-300`}
                      />
                    </div>
                    <div className={`flex  flex-col mb-4`}>
                      <label className={`text-xl`}>{t("quantity")}</label>
                      <input
                        type="number"
                        ref={prodQuantity}
                        className={` w-[90%] md:w-[40%] outline-none px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl duration-300`}
                      />
                    </div>
                    <div className={`flex  flex-col mb-4`}>
                      <label className={`text-xl`}>{t("color")}</label>
                      <input
                        type="text"
                        ref={prodColor}
                        className={` w-[90%] md:w-[40%] outline-none px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl duration-300`}
                      />
                    </div>
                    <div className={`flex  flex-col mb-4`}>
                      <label className={`text-xl`}>{t("discount")}</label>
                      <input
                        type="number"
                        ref={prodDiscount}
                        className={`w-[90%] md:w-[40%] outline-none px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl duration-300`}
                      />
                    </div>
                    <div className={`flex  flex-col mb-4`}>
                      <p className={`text-xl`}>{t("condition")}</p>
                      <label className={`text-xl`}>{t("new")}</label>
                      <input
                        name="con"
                        value="new"
                        type="radio"
                        ref={prodCondition}
                        className={` ml-2 outline-none px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl duration-300`}
                      />
                      <label className={`text-xl`}>{t("used")}</label>
                      <input
                        name="con"
                        value="used"
                        type="radio"
                        ref={prodCondition}
                        className={` ml-2 outline-none px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl duration-300`}
                      />
                    </div>
                    <div className={`flex  flex-col mb-4`}>
                      <label className={`text-xl`}>{t("address")}</label>
                      <input
                        type="text"
                        ref={prodAddress}
                        className={`w-[90%] md:w-[40%] outline-none px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl duration-300`}
                      />
                    </div>
                    <div className={`flex  flex-col mb-4`}>
                      <label className={`text-xl`}>{t("madeIn")}</label>
                      <input
                        type="text"
                        ref={prodMadeIn}
                        className={`w-[90%] md:w-[40%] outline-none px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl duration-300`}
                      />
                    </div>
                    <div className={`flex  flex-col mb-4`}>
                      <label className={`text-xl`}>
                        {t("isThereGuarantee")}
                      </label>
                      <input
                        type="checkbox"
                        ref={prodGuarantee}
                        className={`w-[90%] md:w-[40%] outline-none px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl duration-300`}
                      />
                    </div>
                    <div className={`flex items-center mb-4`}>
                      <label className={`text-xl`}>{t("productPhoto")}</label>
                      <input
                        required
                        type="file"
                        onChange={handleProductPhotoChange}
                        // className={`w-32 outline-none focus:w-60 mr-4 px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl ml-2 duration-300`}
                      />
                    </div>
                    <div className={`flex items-center mb-4`}>
                      <label className={`text-xl`}>
                        {t("productPhoto(s)")}
                      </label>
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
                </MainSection>
              )}
              {/*  */}
              {params.addon === "advertisement" && (
                <MainSection className={`!mt-44 md:!mt-24`}>
                  <p
                    className={`text-2xl font-semibold text-[#5776a5] text-center mb-8`}
                  >
                    Add {params.addon}
                  </p>
                  <form onSubmit={handleSubmit}>
                    <div>
                      <label className={`text-lg text-[#5776a5]`}>
                        Select the Department
                      </label>
                      <select
                        className={`w-[90%] md:w-[40%] mb-4  outline-none  mr-4 px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl  duration-300`}
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                      >
                        <option value="">Department</option>
                        {categories.map((category, index) => (
                          <option key={index} value={category.value}>
                            {category.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className={`flex  flex-col mb-4`}>
                      <label
                        htmlFor="adName"
                        className={`text-lg text-[#5776a5]`}
                      >
                        Ad Name
                      </label>
                      <input
                        id="adName"
                        type="text"
                        name="adName"
                        required
                        ref={adName}
                        className={`w-[90%] md:w-[40%]  outline-none  mr-4 px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl  duration-300`}
                      />
                    </div>
                    <div className={`flex  flex-col mb-4`}>
                      <label
                        htmlFor="adDescription"
                        className={`text-lg text-[#5776a5]`}
                      >
                        Description
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        required
                        ref={adDescription}
                        className={`w-[90%] md:w-[40%]  outline-none  mr-4 px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl  duration-300`}
                      />
                    </div>
                    <div className={`flex  flex-col mb-4`}>
                      <label
                        htmlFor="adStartDate"
                        className={`text-lg text-[#5776a5]`}
                      >
                        Start Date
                      </label>
                      <input
                        id="adStartDate"
                        type="date"
                        name="adStartDate"
                        ref={adStartDate}
                        className={`w-[90%] md:w-[40%]  outline-none mr-4 px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl  duration-300`}
                      />
                    </div>
                    <div className={`flex  flex-col mb-4`}>
                      <label
                        htmlFor="adEndDate"
                        className={`text-lg text-[#5776a5]`}
                      >
                        End Date
                      </label>
                      <input
                        id="adEndDate"
                        type="date"
                        name="adEndDate"
                        ref={adEndDate}
                        onChange={handleFees}
                        className={`w-[90%] md:w-[40%]  outline-none mr-4 px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl  duration-300`}
                      />
                    </div>
                    <div>
                      Your Total Fees Amount :{" "}
                      <span className={`text-red-600`}>{totalFees}</span>
                    </div>

                    <div className={`flex  flex-col mb-4`}>
                      <label
                        htmlFor="address"
                        className={`text-lg text-[#5776a5]`}
                      >
                        Address
                      </label>
                      <input
                        id="address"
                        type="text"
                        name="address"
                        ref={adAddress}
                        className={`w-[90%] md:w-[40%]  outline-none mr-4 px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl  duration-300`}
                      />
                    </div>
                    <div className={`flex  flex-col mb-4`}>
                      <label
                        htmlFor="price"
                        className={`text-lg text-[#5776a5]`}
                      >
                        Price
                      </label>
                      <input
                        id="price"
                        type="number"
                        name="price"
                        ref={adPrice}
                        className={`w-[90%] md:w-[40%]  outline-none mr-4 px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl  duration-300`}
                      />
                    </div>
                    <div className={`flex  flex-col mb-4`}>
                      <label
                        htmlFor="number"
                        className={`text-lg text-[#5776a5]`}
                      >
                        Number
                      </label>
                      <input
                        id="number"
                        type="text"
                        name="number"
                        ref={adContactNumber}
                        className={`w-[90%] md:w-[40%]  outline-none mr-4 px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl  duration-300`}
                      />
                    </div>
                    <div className={`flex  flex-col mb-4`}>
                      <label
                        htmlFor="year"
                        className={`text-lg text-[#5776a5]`}
                      >
                        Year
                      </label>
                      <input
                        id="year"
                        type="number"
                        name="year"
                        ref={adYear}
                        className={`w-[90%] md:w-[40%]  outline-none mr-4 px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl  duration-300`}
                      />
                    </div>
                    <div>
                      <label>Is Purchasable</label>
                      <input type="checkbox" ref={adPurchasable} />
                    </div>
                    <div>
                      <label>Is there a guarantee</label>
                      <input type="checkbox" ref={adGuarantee} />
                    </div>
                    <div className={`flex  flex-col mb-4`}>
                      <label className={`text-lg text-[#5776a5]`}>
                        Service Photo
                      </label>
                      <input
                        type="file"
                        onChange={handleProductPhotoChange}
                        // className={`w-32 outline-none focus:w-60 mr-4 px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl ml-2 duration-300`}
                      />
                    </div>
                    <div className={`flex  flex-col mb-4`}>
                      <label className={`text-lg text-[#5776a5]`}>
                        Service Video
                      </label>
                      <input
                        type="file"
                        onChange={handleProductVideoChange}
                        // className={`w-32 outline-none focus:w-60 mr-4 px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl ml-2 duration-300`}
                      />
                    </div>
                    <div className={`flex  flex-col mb-4`}>
                      <label className={`text-lg text-[#5776a5]`}>
                        Service Photo(s)
                      </label>
                      <input
                        type="file"
                        multiple
                        max={6}
                        onChange={handleProductPhotosChange}
                        // className={`w-32 outline-none focus:w-60 mr-4 px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl ml-2 duration-300`}
                      />
                    </div>

                    <div className={`flex items-center mb-4`}>
                      <button
                        type="submit"
                        className={`w-24 flex justify-center items-center border-2 bg-[#5776a5] border-[#5776a5] rounded-xl text-white hover:bg-transparent hover:text-[#5776a5] duration-300`}
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </MainSection>
              )}
              {/*  */}
              {params.addon === "deal" && (
                <MainSection className={`!mt-44 md:!mt-24`}>
                  <p
                    className={`text-2xl font-semibold text-[#5776a5] text-center mb-8`}
                  >
                    Add {params.addon}
                  </p>
                  <form onSubmit={handleSubmit}>
                    <div>
                      <label className={`text-lg text-[#5776a5]`}>
                        Select the Category
                      </label>
                      <select
                        className={`w-[90%] md:w-[40%] mb-4  outline-none  mr-4 px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl  duration-300`}
                        value={selectedOption}
                        onChange={handleOptionChange}
                      >
                        <option value="">Select an option</option>
                        {options.map((option, index) => (
                          <option key={index} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className={`flex  flex-col mb-4`}>
                      <label className={`text-lg text-[#5776a5]`}>
                        Deal Title
                      </label>
                      <input
                        type="text"
                        required
                        ref={dealName}
                        className={`w-[90%] md:w-[40%]  outline-none  mr-4 px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl  duration-300`}
                      />
                    </div>
                    <div className={`flex  flex-col mb-4`}>
                      <label className={`text-lg text-[#5776a5]`}>
                        Deal Company
                      </label>
                      <textarea
                        required
                        ref={dealCompany}
                        className={`w-[90%] md:w-[40%]  outline-none  mr-4 px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl  duration-300`}
                      />
                    </div>
                    <div className={`flex  flex-col mb-4`}>
                      <label className={`text-lg text-[#5776a5]`}>
                        Previous Price
                      </label>
                      <input
                        type="number"
                        ref={dealPreviousPrice}
                        className={`w-[90%] md:w-[40%]  outline-none mr-4 px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl  duration-300`}
                      />
                    </div>
                    <div className={`flex  flex-col mb-4`}>
                      <label className={`text-lg text-[#5776a5]`}>
                        Current Price
                      </label>
                      <input
                        type="number"
                        ref={dealCurrentPrice}
                        className={`w-[90%] md:w-[40%]  outline-none mr-4 px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl  duration-300`}
                      />
                    </div>
                    <div className={`flex  flex-col mb-4`}>
                      <label className={`text-lg text-[#5776a5]`}>
                        Start Date
                      </label>
                      <input
                        type="date"
                        ref={dealStartDate}
                        className={`w-[90%] md:w-[40%]  outline-none mr-4 px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl  duration-300`}
                      />
                    </div>
                    <div className={`flex  flex-col mb-4`}>
                      <label className={`text-lg text-[#5776a5]`}>
                        End Date
                      </label>
                      <input
                        type="date"
                        ref={dealEndDate}
                        className={`w-[90%] md:w-[40%]  outline-none mr-4 px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl  duration-300`}
                      />
                    </div>
                    <div className={`flex  flex-col mb-4`}>
                      <label className={`text-lg text-[#5776a5]`}>
                        Location
                      </label>
                      <input
                        type="text"
                        ref={dealLocation}
                        className={`w-[90%] md:w-[40%]  outline-none mr-4 px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl  duration-300`}
                      />
                    </div>

                    <div className={`flex  flex-col mb-4`}>
                      <label className={`text-lg text-[#5776a5]`}>
                        Service Photo
                      </label>
                      <input
                        type="file"
                        onChange={handleProductPhotoChange}
                        // className={`w-32 outline-none focus:w-60 mr-4 px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl ml-2 duration-300`}
                      />
                    </div>
                    <div className={`flex items-center mb-4`}>
                      <button
                        type="submit"
                        className={`w-24 flex justify-center items-center border-2 bg-[#5776a5] border-[#5776a5] rounded-xl text-white hover:bg-transparent hover:text-[#5776a5] duration-300`}
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </MainSection>
              )}
              {params.addon === "cars" && (
                <MainSection
                  className={`!mt-44 md:!mt-24 h-[calc(100vh-100px)] flex flex-col justify-center items-center`}
                >
                  <h2
                    className={`text-2xl font-semibold text-[#5776a5] text-center mt-8 mb-4`}
                  >
                    Please choose Car Brand
                  </h2>
                  <form>
                    <div className={`flex items-center mb-4`}>
                      <label htmlFor="userType" className={`text-xl`}>
                        Car Brand
                      </label>
                      <select
                        id="userType"
                        name="userType"
                        value={selectedOptionCar}
                        onChange={handleOptionCarChange}
                        className={`outline-none mr-4 px-4 flex justify-center items-center border-2 border-[#5776a5] rounded-2xl ml-2 duration-300`}
                      >
                        <option value={""}>Select a car</option>
                        {data.map((ele, index) => (
                          <option key={index} value={ele.name}>
                            {ele.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </form>
                  <Link
                    to={`${selectedOptionCar}`}
                    className={`px-4 text-lg py-1 bg-[#5776a5] text-white rounded-2xl`}
                  >
                    Next{" "}
                  </Link>
                </MainSection>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Addon;
export const addonLoader = async ({ params }) => {
  if (params.addon === "cars") {
    return cars;
  } else {
    return null;
  }
};
