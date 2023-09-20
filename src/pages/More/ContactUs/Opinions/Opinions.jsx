import React, { useEffect, useRef, useState } from "react";
import MainSection from "../../../../components/UI/MainSection";
import { Form, useActionData } from "react-router-dom";

const Opinions = () => {
  const [opinionText, setOpinionText] = useState("");
  const opinionTextHandler = (e) => {
    setOpinionText(e.target.value);
  };
  const data = useActionData();
  console.log(data);
  useEffect(() => {
    if (data !== undefined) {
      window.alert(data.message);
    }
  });

  return (
    <MainSection className={`!mt-52 md:!mt-24`}>
      <h2 className={`mb-4 text-2xl font-semibold`}>Opinions</h2>
      <Form method="post">
        <div className={`flex flex-col`}>
          <label className={`mb-4 text-lg`}>-Tell Us About Your Opinion</label>
          <textarea
            value={opinionText}
            onChange={opinionTextHandler}
            name="opinion"
            className={`border-2 border-[#5776a5] mb-4 p-1 outline-none rounded-xl`}
          />
        </div>
        <button
          disabled={opinionText === "" ? true : false}
          className={`px-4 py-1 mb-4 border-2 bg-[#5776a5] text-white hover:border-[#5776a5] hover:text-[#5776a5] hover:bg-transparent duration-300 rounded-2xl`}
        >
          Submit!
        </button>
      </Form>
    </MainSection>
  );
};

export default Opinions;
export const opinionsAction = async ({ request }) => {
  const baseUrl = process.env.REACT_APP_BASE_URL;

  const data = await request.formData();
  const text = await data.get("opinion");
  const formData = new FormData();
  formData.append("text", text);
  const response = await fetch(baseUrl + `/openions`, {
    method: request.method,
    body: formData,
  });
  const responseData = response;
  console.log(responseData);
  return responseData;
};
