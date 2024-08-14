import { TextInputType } from './types'

export const TextInput = ({ placeholder, value, onChange }: TextInputType) => {
  return (
    <input
      type="text"
      className="w-[150px] h-[24px] border border-[#CCCCCC] rounded-[8px] px-2 box-border"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  )
}
