// import React from "react";
// import { useLoaderData } from "react-router-dom";
// import MainSection from "../UI/MainSection";
// import Card from "../UI/Card";
// import ProductDetailsCard from "../UI/ProductDetilesCard/ProductDetailsCard";

// const CategoryAsAGridComp = () => {
//   const data = useLoaderData();
//   console.log(data);
//   return (
//     <MainSection className={`!mt-56 md:!mt-24 mb-2 min-h-[calc(100vh-100px)]`}>
//       <ul
//         className={`flex  justify-between flex-row items-center md:items-start flex-wrap w-full md:w-[calc(18rem*2+3rem)] lg:w-[calc(18rem*3+5rem)] mx-auto [&>*]:mb-4`}
//       >
//         {data.message === "success" ? (
//           data.results.length > 0 ? (
//             data.results.map((ele) => (
//               <li className={`p-1 rounded-md bg-gray-100`}>
//                 <ProductDetailsCard
//                   condition={ele.condition === "new" ? "New" : "Old"}
//                   path={ele._id}
//                   imgSrc={ele.imageUrl}
//                   imgAlt={ele.name}
//                   title={ele.name}
//                   price={ele.price}
//                   description={ele.description}
//                   discountPercentage={ele.discountPercentage}
//                   priceAfterDiscount={ele.priceAfterDiscount}
//                 />
//               </li>
//             ))
//           ) : (
//             <p>No Data Found</p>
//           )
//         ) : (
//           <p
//             className={`w-full min-h-[calc(100vh-200px)] flex justify-center items-center text-lg font-bold`}
//           >
//             Sorry, No Data found!
//           </p>
//         )}
//       </ul>
//     </MainSection>
//   );
// };

// export default CategoryAsAGridComp;
import React from "react";
import { useLoaderData } from "react-router-dom";
import MainSection from "../UI/MainSection";
import ProductDetailsCard from "../UI/ProductDetilesCard/ProductDetailsCard";

const ProductCard = ({ ele }) => (
  <li className={`p-1 rounded-md bg-gray-100`} key={ele._id}>
    <ProductDetailsCard
      condition={ele.condition === "new" ? "New" : "Old"}
      path={ele._id}
      imgSrc={ele.imageUrl}
      imgAlt={ele.name}
      title={ele.name}
      price={ele.price}
      description={ele.description}
      discountPercentage={ele.discountPercentage}
      priceAfterDiscount={ele.priceAfterDiscount}
    />
  </li>
);

const CategoryAsAGridComp = () => {
  const { message, results } = useLoaderData();

  let content;
  if (message === "success") {
    if (results.length > 0) {
      content = results.map((ele) => <ProductCard ele={ele} />);
    } else {
      content = <p>No Data Found</p>;
    }
  } else {
    content = (
      <p
        className={`w-full min-h-[calc(100vh-200px)] flex justify-center items-center text-lg font-bold`}
      >
        Sorry, No Data found!
      </p>
    );
  }

  return (
    <MainSection className={`!mt-56 md:!mt-24 mb-2 min-h-[calc(100vh-100px)]`}>
      <ul
        className={`flex justify-between flex-row items-center md:items-start flex-wrap w-full md:w-[calc(18rem*2+3rem)] lg:w-[calc(18rem*3+5rem)] mx-auto [&>*]:mb-4`}
      >
        {content}
      </ul>
    </MainSection>
  );
};

export default CategoryAsAGridComp;
