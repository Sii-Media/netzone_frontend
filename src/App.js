import React from "react";
import { I18nextProvider, initReactI18next } from "react-i18next";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationEn from "./locales/en/translation.json";
import translationAr from "./locales/ar/translation.json";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root/Root";
import Home, { loaderHome } from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Search from "./pages/Search/Search";
import Profile from "./pages/Profile/Profile";
import Contract from "./pages/More/More";
import Notification, {
  loaderNotifications,
} from "./pages/Notification/Notification";
import Products, { addonLoader } from "./pages/Products/Addon";
import Services from "./pages/Services/Services";
import Advertisement, {
  advertisementLoader,
} from "./pages/Advertisement/Advertisement";
import Deal from "./pages/Deal/Deal";
import News, { newsLoader } from "./pages/News/News";
import Cars from "./pages/Cars/Cars";
import Aircraft from "./pages/Aircraft/Aircraft";
import RealEstate from "./pages/Real Estate/RealEstate";
import { useSelector } from "react-redux";
import SearchedDep, {
  searchedDepLoader,
} from "./pages/SearchedDep/SearchedDep";
import SingleCataPage, {
  singleCataPageLoader,
} from "./pages/SingleCata/SingleCataPage";
import CatagoriesPage from "./pages/Catagories/CatagoriesPage";
import UserPage, { userPageLoader } from "./pages/User/UserPage";
import ProServ from "./pages/User/Sub/ProServ";
import About from "./pages/User/Sub/About";
import UserAds from "./pages/User/Sub/UserAds";
import Government, { governmentLoader } from "./pages/Government/Government";
import Em, { emLoader } from "./pages/Government/Em/Em";
import EmInfo, { emInfoLoader } from "./pages/Government/Em/EmInfo/EmInfo";
import Factory, { factoryLoader } from "./pages/Factory/Factory";
import OneFactory, {
  oneFactoryLoader,
} from "./pages/Factory/OneFactory/OneFactory";
import FactoryProfile, {
  factoryProfileLoader,
} from "./pages/Factory/FactoryProfile/FactoryProfile";
import AboutFac from "./pages/Factory/FactoryProfile/Sub/AboutFac";
import UserAdsFac, {
  userAdsFacLoader,
} from "./pages/Factory/FactoryProfile/Sub/UserAdsFac";
import AuthPage from "./pages/AuthPage/AuthPage";
import Login from "./pages/Login/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import LoginPage from "./pages/Login/LoginPage";
import DepartmentAsAGrid, {
  departmentAsAGridLoader,
} from "./pages/DepartmentAsAGrid/DepartmentAsAGrid";
import DepartmentAsAGridWithCountry, {
  DepartmentAsAGridWithCountryLoader,
} from "./pages/DepartmentAsAGrid/DepartmentAsAGridWithCountry/DepartmentAsAGridWithCountry";
import CategoryAsAGrid, {
  categoryAsAGridLoader,
} from "./pages/CategoryAsAGrid/CategoryAsAGrid";
import ProductDetails, {
  productDetailsLoader,
} from "./pages/ProductDetails/ProductDetails";
import Followings, {
  followingsLoader,
} from "./pages/User/Followings/Followings";
import Followers, { followersLoader } from "./pages/User/Followers/Followers";
import CarDetailsPage, {
  CarDetailsPageLoader,
} from "./pages/CarDetails/CarDetailsPage";
import PlaneDetailsPage, {
  planeDetailsPageLoader,
} from "./pages/PlaneDetails/PlaneDetailsPage";
import RealEstateDetails, {
  realEstateDetailsLoader,
} from "./pages/RealEstateDetails/RealEstateDetails";
import DealTypes from "./pages/DealsTypes/DealTypes";
import OneTypeDealsListPage, {
  oneTypeDealsListPageLoader,
} from "./pages/OneTypeDealsList/OneTypeDealsListPage";
import DealDetails, {
  dealDetailsLoader,
} from "./pages/DealDetails/DealDetails";
import AdsDetails, { adsDetailsLoader } from "./pages/AdsDetails/AdsDetails";
import Comments, { commentsLoader } from "./pages/News/Comments/Comments";
import AboutUs from "./pages/Profile/AboutUsCurrentUser";
import AboutUsCurrentUser from "./pages/Profile/AboutUsCurrentUser";
import ProductsCurrentUser from "./pages/Profile/ProductsCurrentUser";
import { productsCurrentUserLoader } from "./pages/Profile/Profile";
import More from "./pages/More/More";
import ContactUs from "./pages/More/ContactUs/ContactUs";
import LegalAdvice from "./pages/More/LegalAdvice/LegalAdvice";
import Views, {
  currentUserViewsLoader,
} from "./pages/Profile/CurrentUserViews/CurrentUserViews";
import CurrentUserFollowers, {
  currentUserFollowersLoader,
} from "./pages/Profile/Followers/CurrentUserFollowers";
import Opinions, {
  opinionsAction,
} from "./pages/More/ContactUs/Opinions/Opinions";
import Complaints, {
  complaintsAction,
  complaintsLoader,
} from "./pages/More/ContactUs/Complaints/Complaints";
import Question, {
  questionAction,
} from "./pages/More/ContactUs/Question/Question";
import SpecialRequest, {
  specialRequestAction,
} from "./pages/More/ContactUs/SpecialRequest/SpecialRequest";
import CurrentUserViews from "./pages/Profile/CurrentUserViews/CurrentUserViews";
import CurrentUserFollowings, {
  currentUserFollowingsLoader,
} from "./pages/Profile/Followings/CurrentUserFollowings";
import { SendMail } from "./pages/More/ContactUs/SendMail/SendMail";
import SignUpInfoPage from "./pages/SignUpPage/SignUpInfoPage/SignUpInfoPage";
import ProsAndSers, {
  prosAndSersLoader,
} from "./pages/User/Sub/ProsAndSers/ProsAndSers";
import ProServFac, {
  ProServFacLoader,
} from "./pages/Factory/FactoryProfile/Sub/ProServFac";
import Addon from "./pages/Products/Addon";
import FacProd, { facProdLoader } from "./pages/Factory/FacProd/FacProd";
import CarBrand, { carBrandLoader } from "./pages/Products/CarBrand/CarBrand";
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationEn },
      ar: { translation: translationAr },
    },
    fallbackLng: "en", // Default language if user's language is not available
    interpolation: {
      escapeValue: false, // React already escapes all strings, so we don't need i18next to do it
    },
  });

const App = () => {
  const currency = useSelector((state) => state.currency.selectedCurrency);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <Home />,
          loader: () => loaderHome(currency),
        },
        {
          path: "/auth",
          element: <AuthPage />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/notification",
          // eslint-disable-next-line react/jsx-no-undef
          element: <Notification />,
          loader: loaderNotifications,
        },
        {
          path: "/search",
          element: <Search />,
        },
        {
          path: "/catagories",
          element: <CatagoriesPage />,
        },
        {
          path: "/:department",
          element: <DepartmentAsAGrid />,
          loader: departmentAsAGridLoader,
        },
        {
          path: "/advertisements",
          element: <Advertisement />,
          loader: advertisementLoader,
        },
        {
          path: "/advertisements/:adId",
          element: <AdsDetails />,
          loader: adsDetailsLoader,
        },
        {
          path: "/:department/:category/:currency",
          element: <CategoryAsAGrid />,
          loader: categoryAsAGridLoader,
        },
        {
          path: "/:department/:category/:currency/:productId",
          element: <ProductDetails />,
          loader: productDetailsLoader,
        },
        {
          path: "/:department/:currency",
          element: <DepartmentAsAGridWithCountry />,
          loader: DepartmentAsAGridWithCountryLoader,
        },
        {
          path: "/cars/:currency/:carId",
          element: <CarDetailsPage />,
          loader: CarDetailsPageLoader,
        },
        {
          path: "/planes/:currency/:planeId",
          element: <PlaneDetailsPage />,
          loader: planeDetailsPageLoader,
        },
        {
          path: "/realEstate/:currency/:realEstateId",
          element: <RealEstateDetails />,
          loader: realEstateDetailsLoader,
        },

        {
          path: "/deals/:currency/dealsTypes",
          element: <DealTypes />,
        },
        {
          path: "/deals/:currency/dealsTypes/:dealsType/:currency",
          element: <OneTypeDealsListPage />,
          loader: oneTypeDealsListPageLoader,
        },
        {
          path: "/deals/:currency/dealsTypes/:dealsType/:currency/:dealId",
          element: <DealDetails />,
          loader: dealDetailsLoader,
        },
        {
          path: "/catagories/factory",
          element: <Factory />,
          loader: factoryLoader,
        },
        {
          path: "/catagories/factory/:typeId/:currency",
          element: <OneFactory />,
          id: "oneFactory",
          loader: oneFactoryLoader,
        },
        {
          path: "/catagories/factory/:typeId/:currency/:facId",
          element: <FactoryProfile />,
          id: "facId",
          loader: factoryProfileLoader,
          children: [
            {
              path: "/catagories/factory/:typeId/:currency/:facId",
              element: <ProServFac />,
              loader: ProServFacLoader,
            },
            {
              path: "ads",
              element: <UserAdsFac />,
              // loader: userAdsFacLoader,
            },
            {
              path: "About",
              element: <AboutFac />,
            },
          ],
        },
        {
          path: "/catagories/factory/:typeId/:currency/:facId/:productId",
          element: <FacProd />,
          loader: facProdLoader,
        },
        {
          path: "/catagories/governmental",
          element: <Government />,
          loader: governmentLoader,
        },
        {
          path: "/catagories/governmental/:emId",
          element: <Em />,
          id: "em",
          loader: emLoader,
        },
        {
          path: "/catagories/governmental/:emId/:emInfoId",
          element: <EmInfo />,
          loader: emInfoLoader,
        },
        {
          path: "/catagories/:routeId",
          element: <SingleCataPage />,
          loader: singleCataPageLoader,
        },
        {
          path: "/catagories/:routeId/:userId",
          element: <UserPage />,
          loader: userPageLoader,
          id: "user",
          children: [
            {
              path: "/catagories/:routeId/:userId",
              element: <ProServ />,
            },
            {
              path: "ads",
              element: <UserAds />,
            },
            {
              path: "About",
              element: <About />,
            },
          ],
        },
        {
          path: "/catagories/:routeId/:userId/:prodId",
          element: <ProsAndSers />,
          loader: prosAndSersLoader,
        },
        {
          path: "/catagories/:routeId/:userId/followings",
          element: <Followings />,
          loader: followingsLoader,
        },
        {
          path: "/catagories/:routeId/:userId/followers",
          element: <Followers />,
          loader: followersLoader,
        },
        {
          path: "/profile",
          element: <Profile />,
          id: "currentLoader",
          loader: productsCurrentUserLoader,
          children: [
            {
              path: "/profile",
              element: <AboutUsCurrentUser />,
            },
            {
              path: "products",
              element: <ProductsCurrentUser />,
            },
          ],
        },
        {
          path: "/profile/followings",
          element: <CurrentUserFollowings />,
          loader: currentUserFollowingsLoader,
        },
        {
          path: "/profile/followers",
          element: <CurrentUserFollowers />,
          loader: currentUserFollowersLoader,
        },
        {
          path: "/profile/views",
          element: <CurrentUserViews />,
          loader: currentUserViewsLoader,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/signup",
          element: <SignUpPage />,
        },
        {
          path: "/signup/:userType",
          element: <SignUpInfoPage />,
        },
        {
          path: "/more",
          element: <More />,
        },
        {
          path: "/more/contactUs",
          element: <ContactUs />,
        },

        {
          path: "/more/contactUs/opinions",
          element: <Opinions />,
          action: opinionsAction,
        },
        {
          path: "/more/contactUs/complaints",
          element: <Complaints />,
          loader: complaintsLoader,
          action: complaintsAction,
        },
        {
          path: "/more/contactUs/questions",
          element: <Question />,
          action: questionAction,
        },
        {
          path: "/more/contactUs/specialRequest",
          element: <SpecialRequest />,
          action: specialRequestAction,
        },
        {
          path: "/more/contactUs/mailNetzoon",
          element: <SendMail />,
        },
        {
          path: "/more/legalAdvice",
          element: <LegalAdvice />,
        },
        {
          path: "add/:addon",
          element: <Addon />,
          loader: addonLoader,
        },
        {
          path: "add/:addon/:carBrand",
          element: <CarBrand />,
          loader: carBrandLoader,
        },
        {
          path: "/services",
          element: <Services />,
        },
        {
          path: "/deal",
          element: <Deal />,
        },
        {
          path: "/advertisement",
          element: <Advertisement />,
        },
        {
          path: "/news",
          element: <News />,
          loader: newsLoader,
        },
        {
          path: "/news/:newId/comments",
          element: <Comments />,
          loader: commentsLoader,
        },
        {
          path: "/cars",
          element: <Cars />,
        },
        {
          path: "/aircraft",
          element: <Aircraft />,
        },
        {
          path: "/realestate",
          element: <RealEstate />,
        },
        {
          path: "/search",
          element: <Search />,
        },
        {
          path: "search/:searchId",
          element: <SearchedDep />,
          loader: searchedDepLoader,
        },
        {
          path: "search/:searchId/:searchCurrency",
          element: <SearchedDep />,
          loader: searchedDepLoader,
        },
      ],
    },
  ]);
  return (
    <I18nextProvider i18n={i18n}>
      <RouterProvider router={router} />
    </I18nextProvider>
  );
};

export default App;
