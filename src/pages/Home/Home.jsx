import React from "react";
import Catagories from "../../components/Catagories/Catagories";
import PageSection from "../../components/UI/PageSection";
import Departments from "../../components/Departments/Departments";

const Home = () => {
  return (
    <PageSection>
      <Catagories />
      <Departments />
    </PageSection>
  );
};

export default Home;
export const loaderHome = async (currency) => {
  const responseEle = await fetch(
    "https://net-zoon.onrender.com/departments/categories?department=الكترونيات"
  );
  const ele = await responseEle.json();

  const responseApp = await fetch(
    "https://net-zoon.onrender.com/departments/categories?department=أجهزة المنزل والمكتب"
  );
  const app = await responseApp.json();

  const responseMen = await fetch(
    "https://net-zoon.onrender.com/departments/categories?department=موضة رجالية"
  );
  const men = await responseMen.json();

  const responseWomen = await fetch(
    "https://net-zoon.onrender.com/departments/categories?department=موضة نسائية"
  );
  const women = await responseWomen.json();

  const responseFood = await fetch(
    "https://net-zoon.onrender.com/departments/categories?department=منتجات غذائية"
  );
  const food = await responseFood.json();

  const responsePerfume = await fetch(
    "https://net-zoon.onrender.com/departments/categories?department=عطور"
  );
  const perfume = await responsePerfume.json();

  const responseWatches = await fetch(
    "https://net-zoon.onrender.com/departments/categories?department=ساعات"
  );
  const watches = await responseWatches.json();

  const responseCars = await fetch(
    `https://net-zoon.onrender.com/categories/latest-cars-by-creator?country=${currency}`
  );
  const cars = await responseCars.json();

  const responseAnimals = await fetch(
    "https://net-zoon.onrender.com/departments/categories?department=حيوانات"
  );
  const animals = await responseAnimals.json();

  const responseInst = await fetch(
    "https://net-zoon.onrender.com/departments/categories?department=آلات موسيقية"
  );
  const inst = await responseInst.json();

  const responseSports = await fetch(
    "https://net-zoon.onrender.com/departments/categories?department=أجهزة رياضية"
  );
  const sports = await responseSports.json();

  const responseAgr = await fetch(
    "https://net-zoon.onrender.com/departments/categories?department=الزراعة"
  );
  const agr = await responseAgr.json();
  const responseDeals = await fetch(
    `https://net-zoon.onrender.com/deals/alldealsItems?country=${currency}`
  );
  const deals = await responseDeals.json();
  const responseAds = await fetch(
    "https://net-zoon.onrender.com/advertisements"
  );
  const Ads = await responseAds.json();
  const responseNews = await fetch("https://net-zoon.onrender.com/news");
  const news = await responseNews.json();
  const responseAirCraft = await fetch(
    `https://net-zoon.onrender.com/categories/planes/getnewplanes?country=${currency}`
  );
  const airCraft = await responseAirCraft.json();
  const responseRealEstate = await fetch(
    `https://net-zoon.onrender.com/real-estate?country=${currency}`
  );
  const realEstate = await responseRealEstate.json();
  return [
    ele,
    app,
    men,
    women,
    food,
    perfume,
    watches,
    cars,
    animals,
    inst,
    sports,
    agr,
    deals,
    Ads,
    news,
    airCraft,
    realEstate,
  ];
};
