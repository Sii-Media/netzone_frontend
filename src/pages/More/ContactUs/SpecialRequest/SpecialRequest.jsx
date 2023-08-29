import React, { useEffect } from "react";
import MainSection from "../../../../components/UI/MainSection";
import { Form, useActionData } from "react-router-dom";

const SpecialRequest = () => {
  const actionData = useActionData();
  console.log(actionData);
  useEffect(() => {
    if (actionData !== undefined) {
      window.alert(actionData.message);
    }
  });
  return (
    <MainSection className={`!mt-52 md:!mt-28`}>
      <h2 className={`mb-4 text-2xl font-semibold`}>-Private Request</h2>
      <Form method="post">
        <div className={`flex flex-col`}>
          <label className={`mb-4 text-lg`}>-Address</label>
          <input
            name="address"
            className={`border-2 border-[#5776a5] mb-4 p-1 outline-none rounded-xl`}
          />
        </div>
        <div className={`flex flex-col`}>
          <label className={`mb-4 text-lg`}>-Special Request</label>
          <input
            name="specialRequest"
            className={`border-2 border-[#5776a5] mb-4 p-1 outline-none rounded-xl`}
          />
        </div>
        <button
          className={`px-4 py-1 mb-4 border-2 bg-[#5776a5] text-white hover:border-[#5776a5] hover:text-[#5776a5] hover:bg-transparent duration-300 rounded-2xl`}
        >
          Submit!
        </button>
      </Form>
    </MainSection>
  );
};

export default SpecialRequest;
export const specialRequestAction = async ({ request }) => {
  const data = await request.formData();
  const address = await data.get("address");
  const text = await data.get("text");
  const formData = new FormData();
  formData.append("text", text);
  formData.append("address", address);

  const response = await fetch(`https://net-zoon.onrender.com/requests`, {
    method: request.method,
    body: formData,
  });
  const responseData = response;
  console.log(responseData);
  return responseData;
};
