"use client";

import CommonButton from "@/app/components/common/CommonButton";
import CustomInput from "@/app/components/common/CustomInput";
import SearchBar from "@/app/components/common/SearchBar";
import { ChangeEvent } from "react";

const page = () => {
  const onClick = () => {
    console.log('click')
  }
  return (
    <div>
      <CommonButton text='button' color='primary' onClick={onClick}/>
      <SearchBar/>
      <CustomInput placeholder={"내용을 입력해주세요"} onChange={function (event: ChangeEvent<HTMLInputElement>): void {
        throw new Error("Function not implemented.");
      } }/>
    </div>
  )
}

export default page