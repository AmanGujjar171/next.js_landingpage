import React from "react";

interface ButtonProps{
  title?:string,
  customClasses?:{}
}

const Button: React.FC<ButtonProps> = ({title,customClasses}) => {
  return (
  <div className={` ${customClasses} text-white bg-[#0CBBC7] w-[9vw] h-[5vh] flex justify-center items-center text-2xl hover:bg-white border hover:border-[#0CCBC7] hover:text-[#0CBBC7] hover:cursor-pointer`}>
        {title}
  </div>
)

};
export default Button;
