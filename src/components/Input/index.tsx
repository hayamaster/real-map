import { ChangeEvent } from 'react'

interface InputProps {
  label: string
  value?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

const Input = ({ label, value, onChange }: InputProps) => {
  return (
    <div className="grid grid-cols-7 items-center gap-3 md:grid-cols-4 md:gap-4">
      <label
        htmlFor="name"
        className="col-span-2 text-right text-lg text-[#70046C] md:col-span-1 md:text-2xl"
      >
        {label}
      </label>
      <input
        onChange={onChange}
        value={value}
        type="text"
        className="col-span-5 rounded-lg border border-black bg-white px-2 py-1 text-base focus:outline-[#9747FF] md:col-span-3 md:px-2.5 md:py-1.5 md:text-xl"
      />
    </div>
  )
}
export default Input
