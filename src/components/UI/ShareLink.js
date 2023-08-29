import React, { useState } from "react";
import { BsFillShareFill } from "react-icons/bs";
const ShareLink = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      window.alert("Link Copied");
      // Reset copied state to false after 3 seconds
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  return (
    <div
      className={`px-2 mt-0 text-[#5776a5] text-xl font-medium hover:text-[#5776a5] duration-300 self-center mr-2`}
    >
      {/* <button className={`flex items-center`} onClick={handleCopy}>
        {copied ? "Link Copied!" : "Share"}{" "}
        <BsFillShareFill className={`ml-2`} />
      </button> */}
      <BsFillShareFill
        className={`cursor-pointer hover:text-[#3a4f6e] `}
        onClick={handleCopy}
      />
    </div>
  );
};

export default ShareLink;
