import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import chatsLogo from "../../../assets/ChatsLogo/chatsLogo.png";
const Chats = () => {
  const { t } = useTranslation();
  return (
    <Link to="/chats">
      <div
        className={`mb-40 mt-5 flex justify-between items-center border-2 border-[#5776a5] w-[99%] mx-auto rounded-xl`}
      >
        <div
          className={`text-xs md:text-xl font-semibold text-[#5776a5] pl-4 w-[80%] md:w-auto`}
        >
          {t("chat_home")}
        </div>
        <div
          className={`text-white  bg-[#5776a5] w-16 h-16 rounded-md flex items-center justify-center text-3xl`}
        >
          <img src={chatsLogo} alt={chatsLogo.toString().slice(0, 3)} />
        </div>
      </div>
    </Link>
  );
};

export default Chats;
