// import React, { useState } from "react";
// import {
//   Form,
//   useActionData,
//   useNavigation,
//   useSearchParams,
// } from "react-router-dom";

// const AuthForm = () => {
//   const actionData = useActionData();
//   const navigation = useNavigation();
//   const [searchParams] = useSearchParams();
//   const isSubmitting = navigation.state === "submitting";
//   const [selectedFiles, setSelectedFiles] = useState({
//     tradeLicensePhoto: null,
//     profilePhoto: null,
//     coverPhoto: null,
//     frontIdPhoto: null,
//     backIdPhoto: null,
//   });
//   const handleFileChange = (event, fieldName) => {
//     const newSelectedFiles = { ...selectedFiles };
//     newSelectedFiles[fieldName] = event.target.files[0];
//     setSelectedFiles(newSelectedFiles);
//   };
//   console.log(selectedFiles.tradeLicensePhoto);
//   // if (actionData) {
//   //   console.log(actionData);
//   //   console.log(actionData.result._id);
//   //   window.localStorage.setItem("id", JSON.stringify(actionData.result._id));
//   // }

//   const options = [
//     { value: "", label: "Select an option" },
//     { value: "local_company", label: "local companies" },
//     { value: "real_estate", label: "Real Estate" },
//     { value: "trader", label: "Trader" },
//     { value: "car", label: "Cars" },
//     { value: "sea_companies", label: "Sea Companies" },
//     { value: "clients", label: "Clients" },
//     { value: "freezone", label: "Free Zone" },
//     { value: "news_agency", label: "New Agency" },
//     { value: "delivery_company", label: "Delivery Company" },
//   ];

//   const [selectedOption, setSelectedOption] = useState("");

//   const handleOptionChange = (event) => {
//     setSelectedOption(event.target.value);
//   };

//   const selectedOptionLabel =
//     options.find((option) => option.value === selectedOption)?.label || "";
//   // console.log(FormData)
//   return (
//     <Form method="post">
//       {searchParams.get("mode") === "signup" && (
//         <>
//           <div>
//             <label htmlFor="userType">Select the User Type:</label>
//             <select
//               id="userType"
//               name="userType"
//               value={selectedOption}
//               onChange={handleOptionChange}
//             >
//               {options.map((option, index) => (
//                 <option key={index} value={option.value}>
//                   {option.label}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <div>
//             <label htmlFor="email">Enter the E-mail ID:</label>
//             <input id="email" type="email" name="email" required />
//           </div>
//           <div>
//             <label htmlFor="username">Enter the User Name:</label>
//             <input id="username" type="text" name="username" required />
//           </div>
//           <div>
//             <label htmlFor="password">Enter the Password:</label>
//             <input id="password" type="password" name="password" required />
//           </div>
//           <div>
//             <div>
//               <label htmlFor="firstMobile">Enter the Contact Number 1:</label>
//               <input
//                 id="firstMobile"
//                 type="number"
//                 name="firstMobile"
//                 required
//               />
//             </div>
//             <div>
//               <label htmlFor="secondeMobile">
//                 Enter the Contact Number 2 (If Available):
//               </label>
//               <input id="secondeMobile" type="number" name="secondeMobile" />
//             </div>
//             <div>
//               <label htmlFor="thirdMobile">
//                 Enter the Contact Number 3 (If Available):
//               </label>
//               <input id="thirdMobile" type="number" name="thirdMobile" />
//             </div>
//           </div>
//           <div>
//             <label htmlFor="bio">Enter the Bio:</label>
//             <textarea id="bio" name="bio" minLength={0} maxLength={300} />
//           </div>
//           <div>
//             <label htmlFor="description">Enter the Description:</label>
//             <textarea id="description" name="description" minLength={0} />
//           </div>
//           <div>
//             <label htmlFor="website">Enter the Link:</label>
//             <input id="website" type="text" name="website" required />
//           </div>
//           <div>
//             <label htmlFor="link">Enter the Link:</label>
//             <input id="link" type="text" name="link" required />
//           </div>
//           <div>
//             <label htmlFor="slogn">Enter the Slogan:</label>
//             <input id="slogn" type="text" name="slogn" required />
//           </div>
//           <div>
//             <label htmlFor="deliverable">Is there delivery:</label>
//             <input type="checkbox" id="deliverable" name="deliverable" />
//           </div>
//           <div>
//             <label htmlFor="subcategory">Enter the Subcategory:</label>
//             <input id="subcategory" type="text" name="subcategory" required />
//           </div>
//           <div>
//             <label htmlFor="address">Enter the Address:</label>
//             <input id="address" type="text" name="address" required />
//           </div>
//           <div>
//             <label htmlFor="isFreeZoon">Affiliated to Free Zone:</label>
//             <input type="checkbox" id="isFreeZoon" name="isFreeZoon" />
//           </div>
//           <div>
//             <label htmlFor="isService">
//               Do you offer Services rather then Products:
//             </label>
//             <input type="checkbox" id="isService" name="isService" />
//           </div>
//           <div>
//             <label htmlFor="companyProductsNumber">
//               Number of Company Products
//             </label>
//             <input
//               id="companyProductsNumber"
//               type="number"
//               name="companyProductsNumber"
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="sellType">
//               Method of sale (Retail of Wholesale)
//             </label>
//             <input id="sellType" type="text" name="sellType" required />
//           </div>
//           <div>
//             <label htmlFor="toCountry">Where to sell (To Which Country)</label>
//             <input id="toCountry" type="text" name="toCountry" required />
//           </div>
//           <div>
//             <div>
//               <label htmlFor="tradeLicensePhoto">Copy of trade license</label>
//               <input
//                 id="tradeLicensePhoto"
//                 type="file"
//                 name="tradeLicensePhoto"
//                 onChange={(e) => handleFileChange(e, "tradeLicensePhoto")}
//                 multiple
//               />
//             </div>
//             <div>
//               <label htmlFor="profilePhoto">Profile Photo</label>
//               <input
//                 id="profilePhoto"
//                 type="file"
//                 name="profilePhoto"
//                 onChange={(e) => handleFileChange(e, "profilePhoto")}
//               />
//             </div>
//             <div>
//               <label htmlFor="coverPhoto">Cover Photo</label>
//               <input
//                 id="coverPhoto"
//                 type="file"
//                 name="coverPhoto"
//                 onChange={(e) => handleFileChange(e, "coverPhoto")}
//               />
//             </div>
//             <div>
//               <label htmlFor="frontIdPhoto">Front ID Photo</label>
//               <input
//                 id="frontIdPhoto"
//                 type="file"
//                 name="frontIdPhoto"
//                 onChange={(e) => handleFileChange(e, "frontIdPhoto")}
//               />
//             </div>
//             <div>
//               <label htmlFor="backIdPhoto">Back ID Photo</label>
//               <input
//                 id="backIdPhoto"
//                 type="file"
//                 name="backIdPhoto"
//                 onChange={(e) => handleFileChange(e, "backIdPhoto")}
//               />
//             </div>
//           </div>
//           <button>{isSubmitting ? "Submitting..." : "Save"}</button>
//         </>
//       )}
//       {searchParams.get("mode") === "login" && (
//         <>
//           <p>
//             <label htmlFor="email">Email</label>
//             <input id="email" type="email" name="email" required />
//           </p>
//           <p>
//             <label htmlFor="password">Password</label>
//             <input id="password" type="password" name="password" required />
//           </p>
//           <button disabled={isSubmitting}>
//             {isSubmitting ? "Submitting..." : "Save"}
//           </button>
//         </>
//       )}
//     </Form>
//   );
// };

// export default AuthForm;
