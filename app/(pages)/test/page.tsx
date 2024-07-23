"use client";

import CommonButton from "@/app/components/common/CommonButton";

const page = () => {
  const onClick = () => {
    console.log('click')
  }
  return (
    <div>
      <CommonButton text='button' color='primary' onClick={onClick}/>
    </div>
  )
}

export default page