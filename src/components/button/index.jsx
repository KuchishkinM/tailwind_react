import React from 'react'

const borderStyles = 'border-2 border-almost-black rounded-lg'
const filledStyles = 'text-white bg-black rounded-lg fond-bold py-4 px-6 mx-0 hover:bg-transparent hover:text-almost-black border-2 border-almost-black'

export const Button = ({
  children = '',
  hasBorder = false,
  isFilled = false,
}) => {
  return (
    <button className={`text-medium-gray px-5 py-2 ${hasBorder && borderStyles} ${isFilled && filledStyles}`}>{ children }</button>
  )
}
