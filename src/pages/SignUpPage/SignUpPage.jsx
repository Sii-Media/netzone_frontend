import React from "react";
// import AuthForm from "../../Components/AuthForm/AuthForm";
// import { json, redirect } from "react-router-dom";
import SignUp from "../../components/AuthForm/SignUp/SignUp";

const SignUpPage = () => {
  return <SignUp />;
};

export default SignUpPage;
// export async function authenticationAction({ request }) {
//   const searchParams = new URL(request.url).searchParams;
//   const mode = searchParams.get("mode") || "login";

//   if (mode !== "login" && mode !== "signup") {
//     console.log("Not supported Route");
//     throw json({ message: "Unsupported mode." }, { status: 422 });
//   }
//   if (searchParams.get("mode") === "signup") {
//     const data = await request.formData();
//     console.log(data.get("pradeLicensePhoto"));
//     const authData = {
//       userType: data.get("userType").toString(),
//       email: data.get("email").toString(),
//       username: data.get("username").toString(),
//       password: data.get("password").toString(),
//       firstMobile: data.get("firstMobile").toString(),
//       secondeMobile: data.get("secondeMobile").toString(),
//       thirdMobile: data.get("thirdMobile").toString(),
//       bio: data.get("bio").toString(),
//       description: data.get("description").toString(),
//       website: data.get("website").toString(),
//       link: data.get("link").toString(),
//       slogn: data.get("slogn").toString(),
//       deliverable: data.get("deliverable") ? true : false,
//       subcategory: data.get("subcategory").toString(),
//       address: data.get("address").toString(),
//       isFreeZoon: data.get("isFreeZoon") ? true : false,
//       isServices: data.get("isService") ? true : false,
//       companyProductsNumber: +data.get("companyProductsNumber"),
//       sellType: data.get("sellType").toString(),
//       toCountry: data.get("toCountry").toString(),
//       tradeLicensePhoto: data.append(
//         "tradeLicensePhoto",
//         data.get("tradeLicensePhoto").files
//       ),
//       profilePhoto: data.append(
//         "profilePhoto",
//         data.get("profilePhoto").files
//       ),
//       coverPhoto: data.append("coverPhoto", data.get("coverPhoto").files),
//       frontIdPhoto: data.append(
//         "frontIdPhoto",
//         data.get("frontIdPhoto").files
//       ),
//       backIdPhoto: data.append("backIdPhoto", data.get("backIdPhoto").file),
//       // tradeLicensePhoto: data.get("tradeLicensePhoto"),
//       // profilePhoto: data.get("profilePhoto"),
//       // coverPhoto: data.get("coverPhoto"),
//       // frontIdPhoto: data.get("frontIdPhoto"),
//       // backIdPhoto: data.get("backIdPhoto"),
//     };
//     console.log(data);
//     console.log(data.get("backIdPhoto"));
//     console.log(authData);
//     console.log(JSON.stringify(authData));

//     console.log(request);
//     const response = await fetch(
//       `https://net-zoon.onrender.com/user/register`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(authData),
//       }
//     );
//     console.log("Response Done");
//     if (response.status === 422 || response.status === 401) {
//       return response;
//     }

//     if (!response.ok) {
//       throw json({ message: "Could not authenticate user." }, { status: 500 });
//     }
//     const resData = await response.json();
//     console.log(resData);
//     return response;
//   }
//   if (searchParams.get("mode") === "login") {
//     const data = await request.formData();
//     const authData = {
//       email: data.get("email"),
//       password: data.get("password"),
//     };
//     const response = await fetch(`https://net-zoon.onrender.com/user/signin`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(authData),
//     });
//     const resData = await response.json();
//     window.localStorage.setItem("id", JSON.stringify(resData.result._id));
//     return redirect("/add");
//   }
// }
