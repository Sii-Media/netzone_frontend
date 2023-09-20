import SendbirdApp from "@sendbird/uikit-react/App";
import "@sendbird/uikit-react/dist/index.css";
import { useEffect, useState } from "react";
import AuthPage from "../AuthPage/AuthPage";
import NotAuthed from "../../components/CurrentUserProfile/NotAuthed/NotAuthed";
import logo from "../../assets/netzoon-logo.png";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

const ChatsBird = () => {
  const [userId, setUserId] = useState("");
  const [profilePhoto, setProfilePhoto] = useState("");
  useEffect(() => {
    if (window.localStorage.getItem("user")) {
      const user = JSON.parse(window.localStorage.getItem("user"));
      setUserId(user.result.username);
      setProfilePhoto(user.result.profilePhoto);
    }
  }, []);
  const appID = process.env.REACT_APP_SEND_BIRD;

  return (
    <div className={`w-screen h-screen md:h-[90vh] md:w-[95%] mx-auto`}>
      {userId ? (
        <>
          <div className={`pr-4 py-2 border-b border-gray-400`}>
            <Link to="/" className={`flex items-center `}>
              <AiOutlineArrowLeft className={`mr-2 text-[#2072b7]`} />
              <span className={`text-[#2072b7] mr-2`}>Back To</span>
              <img
                src={logo}
                alt={logo.toString().slice(0, 3)}
                className={`w-16`}
              />
            </Link>
          </div>
          <SendbirdApp
            breakpoint="567px"
            // Add the two lines below.
            appId={appID} // Specify your Sendbird application ID.
            userId={userId} // Specify your user ID.
            nickname={userId}
            profileUrl={profilePhoto}
            showSearchIcon={true}
          />
        </>
      ) : (
        <NotAuthed />
      )}
    </div>
  );
};

export default ChatsBird;
