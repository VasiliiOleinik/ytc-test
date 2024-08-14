import { DEFAULT_USER } from '@/constants'
import { FormHeadType } from './types'

export const FormHead = ({ append }: FormHeadType) => {
  return (
    <div className="flex justify-between items-center mt-[47px] mb-[25px]">
      <div className="font-inter font-bold text-[24px] leading-[29px] text-black">
        Users
      </div>
      <button
        onClick={() => append(DEFAULT_USER)}
        type="button"
        className="font-inter font-bold text-[16px] leading-[19px] underline text-[#00B93F]"
      >
        Add New
      </button>
    </div>
  )
}
