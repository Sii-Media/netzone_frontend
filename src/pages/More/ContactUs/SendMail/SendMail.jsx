import React from "react";
import MainSection from "../../../../components/UI/MainSection";
import { Form } from "react-router-dom";

const SendMail = () => {
  return (
    <MainSection className={`!mt-52 md:!mt-24 flex flex-col`}>
      <h2 className={`text-2xl font-semibold text-center mb-4`}>Send a Mail</h2>
      <Form method="post">
        <div className={`flex flex-col`}>
          <label className={`mb-4 text-lg`}>Your Name</label>
          <input
            name="address"
            className={`border-2 border-[#5776a5] mb-4 p-1 outline-none rounded-xl`}
          />
        </div>
      </Form>
    </MainSection>
  );
};

export default SendMail;
