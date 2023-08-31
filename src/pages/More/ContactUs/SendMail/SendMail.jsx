import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import MainSection from "../../../../components/UI/MainSection";

export const SendMail = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_x67jyuw",
        "template_cmny7bu",
        form.current,
        "W46O5SuH3NyMtu_gW"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <MainSection className={`!mt-52 md:!mt-24 flex flex-col`}>
      <h2 className={`text-2xl font-semibold text-center mb-4`}>Contact Us</h2>
      <form className={`flex flex-col`} ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input
          type="text"
          name="user_name"
          className={`border-2 border-[#5776a5] mb-4 p-1 outline-none rounded-xl`}
        />
        <label className={`mb-4 text-lg`}>Email</label>
        <input
          type="email"
          name="user_email"
          className={`border-2 border-[#5776a5] mb-4 p-1 outline-none rounded-xl`}
        />
        <label className={`mb-4 text-lg`}>Email</label>
        <input
          type="text"
          name="user_subject"
          className={`border-2 border-[#5776a5] mb-4 p-1 outline-none rounded-xl`}
        />
        <label className={`mb-4 text-lg`}>Message</label>
        <textarea
          name="user_message"
          className={`border-2 border-[#5776a5] mb-4 p-1 outline-none rounded-xl`}
        />
        <input
          type="submit"
          value="Send"
          className={`px-4 py-1 mb-4 border-2 bg-[#5776a5] text-white hover:border-[#5776a5] hover:text-[#5776a5] hover:bg-transparent duration-300 rounded-2xl cursor-pointer`}
        />
      </form>
    </MainSection>
  );
};
