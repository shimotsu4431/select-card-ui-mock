import React, { ChangeEvent } from 'react'
import clsx from "clsx"

type Props = {
  id: number,
  name: string,
  src: string,
  checked: boolean,
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void,
  isSelected?: boolean
}

const Card: React.FC<Props> = ({ id, name, src, checked, handleChange, isSelected }) => {
  return (
    <>
      <input className="hidden" type="checkbox" value={name} id={JSON.stringify(id)} checked={checked} onChange={handleChange} />
      <label className={clsx({
        "flex": true,
        "justify-center": true,
        "items-center": true,
        "text-3xl": true,
        "mb-4": true,
        "mx-2": true,
        "w-36": true,
        "h-36": true,
        "border-4": true,
        "bg-gray-200": true,
        "cursor-pointer": true,
        "border-red-600": checked,
        "pointer-events-none": isSelected
      })} htmlFor={JSON.stringify(id)}>
        <img className="w-36 h-36" src={src} alt=""/>
      </label>
    </>
  )
}

export default Card
