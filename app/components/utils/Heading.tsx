import React from "react";

interface HeadingProps {
  title: string;
  subTitle?: string;
}

export const Heading: React.FC<HeadingProps> = ({ title, subTitle }) => {
  return (
    <div>
      <h1
        className={`
        text-xl
        font-bold
        text-white
      `}
      >
        {title}
      </h1>
      <h4>{subTitle}</h4>
    </div>
  );
};
