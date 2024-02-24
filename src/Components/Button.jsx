import React from "react";

const Button = ({ styles, text, sectionId }) => {
  return (
    <a
      href={`#${sectionId}`}
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium tex-[18px] text-primary outline-none ${styles} rounded-[10px]`}
    >
      Scale Your Business
    </a>
  );
};

export default Button;
