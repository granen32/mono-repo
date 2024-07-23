import React from 'react'
import { CommonButtonProps } from '@/app/types/common'
import {Button} from '@mui/material'
const CommonButton  = ({onClick,text,disabled,color}:CommonButtonProps) => {
  return (
    <Button variant='contained' color={color} disabled={disabled} onClick={onClick}>{text}</Button>
  )
}

export default CommonButton