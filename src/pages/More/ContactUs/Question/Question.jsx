import React, { useEffect, useState } from "react";
import MainSection from "../../../../components/UI/MainSection";
import { Form, useActionData } from "react-router-dom";

const Question = () => {
  const [questionText, setQuestionText] = useState("");
  const questionTextHandler = (e) => {
    setQuestionText(e.target.value);
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
      <h2>Leave Your Question</h2>
      <Form method="post">
        <div className={`flex flex-col`}>
          <label className={`mb-4 text-lg`}>-What is your Question</label>
          <textarea
            value={questionText}
            onChange={questionTextHandler}
            name="question"
            className={`border-2 border-[#5776a5] mb-4 p-1 outline-none rounded-xl`}
          />
        </div>
        <button
          disabled={questionText === "" ? true : false}
          className={`px-4 py-1 mb-4 border-2 bg-[#5776a5] text-white hover:border-[#5776a5] hover:text-[#5776a5] hover:bg-transparent duration-300 rounded-2xl`}
        >
          Submit!
        </button>
      </Form>
    </MainSection>
  );
};

export default Question;
export const questionAction = async ({ request }) => {
  const baseUrl = process.env.REACT_APP_BASE_URL;

  const data = await request.formData();
  const question = await data.get("question");
  const formData = new FormData();
  formData.append("text", question);
  const response = await fetch(baseUrl + `/questions`, {
    method: request.method,
    body: formData,
  });
  const responseData = response;
  console.log(responseData);
  return responseData;
};
