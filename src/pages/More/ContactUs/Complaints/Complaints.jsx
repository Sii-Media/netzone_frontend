import React, { useEffect } from "react";
import MainSection from "../../../../components/UI/MainSection";
import { Form, useActionData, useLoaderData } from "react-router-dom";

const Complaints = () => {
  const loaderData = useLoaderData();
  console.log(loaderData);
  const actionData = useActionData();
  console.log(actionData);
  useEffect(() => {
    if (actionData !== undefined) {
      window.alert(actionData);
    }
  });
  return (
    <MainSection className={`!mt-52 md:!mt-28`}>
      <h2 className={`mb-4 text-2xl font-semibold`}>Complaints</h2>
      <Form method="post">
        <div className={`flex flex-col`}>
          <label className={`mb-4 text-lg`}>-Address</label>
          <input
            name="address"
            className={`border-2 border-[#5776a5] mb-4 p-1 outline-none rounded-xl`}
          />
        </div>
        <div className={`flex flex-col`}>
          <label className={`mb-4 text-lg`}>-Subject</label>
          <input
            name="subject"
            className={`border-2 border-[#5776a5] mb-4 p-1 outline-none rounded-xl`}
          />
        </div>
        <button
          className={`px-4 py-1 mb-4 border-2 bg-[#5776a5] text-white hover:border-[#5776a5] hover:text-[#5776a5] hover:bg-transparent duration-300 rounded-2xl`}
        >
          Submit!
        </button>
      </Form>
      <h2 className={`text-xl font-medium text-center mb-2`}>Complaints</h2>
      <ul
        className={`w-full md:w-[80%] mx-auto p-2 bg-[#5776a5] bg-opacity-25 rounded-2xl`}
      >
        {loaderData.results.map((ele, i) => (
          <li className={`mb-4 border-b border-gray-600 pb-2`}>
            <p className={`flex items-center justify-between mb-2`}>
              <span className={`test-lg font-medium`}>Number</span>
              <span>{i + 1}</span>
            </p>
            <p className={`flex items-center justify-between  mb-2`}>
              <span className={`test-lg font-medium`}>Date</span>
              <span>{ele.createdAt.slice(0, 10)}</span>
            </p>
            <p className={`flex items-center justify-between  mb-2`}>
              <span className={`test-lg font-medium`}>Address</span>
              <span>{ele.address}</span>
            </p>
            <p className={`flex items-center justify-between  mb-2`}>
              <span className={`test-lg font-medium`}>The Reply</span>
              <span>{ele.reply}</span>
            </p>
          </li>
        ))}
      </ul>
    </MainSection>
  );
};

export default Complaints;
export const complaintsLoader = async () => {
  const baseUrl = process.env.REACT_APP_BASE_URL;

  const response = await fetch(baseUrl + `/complaints`);
  const data = await response.json();
  return data;
};
export const complaintsAction = async ({ request }) => {
  const baseUrl = process.env.REACT_APP_BASE_URL;

  const data = await request.formData();
  const text = await data.get("opinion");
  const address = await data.get("address");
  const formData = new FormData();
  formData.append("text", text);
  formData.append("address", address);

  const response = await fetch(baseUrl + `/complaints`, {
    method: request.method,
    body: formData,
  });
  const responseData = response;
  console.log(responseData);
  return responseData;
};
