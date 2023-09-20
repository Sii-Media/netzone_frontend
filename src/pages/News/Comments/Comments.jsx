import React, { useRef } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import MainSection from "../../../components/UI/MainSection";
import styles from "./Comments.module.css";
import { useState } from "react";
const Comments = () => {
  const data = useLoaderData();
  const commentRef = useRef();
  const params = useParams();
  const [commentsState, setCommentsState] = useState([...data]);
  console.log(commentRef);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = JSON.parse(window.localStorage.getItem("user"));

    if (!user) {
      // Display a window.alert and return early
      window.alert("Please Login");
      return; // Exit the function without executing the rest of the code
    }

    const formData = new FormData();
    formData.append("userId", user.result._id);
    formData.append("text", commentRef.current.value);
    const baseUrl = process.env.REACT_APP_BASE_URL;

    const response = await fetch(baseUrl + `/news/${params.newId}/comment`, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    window.location.reload();
    console.log(data);
  };

  console.log(data);
  return (
    <MainSection className={`!mt-52 md:!mt-28 min-h-screen`}>
      <h1 className={`text-center text-2xl mb-4`}>Comments</h1>
      <ul
        className={`h-[calc(100vh-300px)] overflow-y-scroll  shadow-[inset_-12px_-8px_40px_#46464620] bg-gray-100 rounded-lg ${styles["no-scrollbar"]} cursor-all-scroll`}
      >
        {commentsState.map((ele) => (
          <li className={`p-2 border-b border-gray-400 flex`}>
            <div>
              <img
                src={ele.user.profilePhoto}
                alt={ele.user.username}
                className={`w-12 rounded-full mr-4`}
              />
            </div>
            <div className={`pt-3`}>
              <h2 className={`text-lg font-semibold mb-1`}>
                {ele.user.username}
              </h2>
              <p>{ele.text}</p>
            </div>
          </li>
        ))}
      </ul>
      <div
        className={`mt-4 shadow-[inset_-12px_-8px_40px_#46464620] bg-gray-100 rounded-lg p-4`}
      >
        <h4 className={`text-xl mb-2`}>Add a Comment :</h4>
        <form onSubmit={handleSubmit} className={`flex items-center`}>
          <textarea
            // disabled={commentRef.current.value === "" ? true : false}
            type="text"
            ref={commentRef}
            className={`rounded-lg p-2 border border-[#5776a5] outline-none`}
          />
          <button
            // disabled={commentRef.current.value === "" ? true : false}
            type="submit"
            className={`px-4 bg-[#5776a5] text-lg text-white rounded-lg ml-4 border border-[#5776a5] hover:bg-transparent hover:text-[#5776a5] duration-300`}
          >
            Comment
          </button>
        </form>
      </div>
    </MainSection>
  );
};

export default Comments;
export const commentsLoader = async ({ params }) => {
  const newId = params.newId;
  const baseUrl = process.env.REACT_APP_BASE_URL;

  const response = await fetch(baseUrl + `/news/${newId}/comments`);
  const data = await response.json();
  return data;
};
