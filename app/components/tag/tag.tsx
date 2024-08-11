import React from 'react'
interface TagProps{
  title?:string,
}

const Tag:React.FC<TagProps> = ({title}) => {
  return (
    <div className=" grid items-center h-[2.5vh] w-[6vw] text-[10px] bg-[#e4f5f4] text-center text-[#0CBBC7] font-extrabold rounded-lg ">
        <p>{title}</p>
    </div>
  )
}
export default Tag;