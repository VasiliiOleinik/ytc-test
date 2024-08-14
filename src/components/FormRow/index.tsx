import { Controller } from 'react-hook-form'
import { TextInput } from '@/components'
import { FormRowType } from './types'

export const FormRow = ({
  name,
  email,
  handleRemoveItem,
  addAfter,
  control,
  itemIndex,
}: FormRowType) => {
  return (
    <div className="flex items-center gap-[16px] mb-[16px]">
      <Controller
        control={control}
        name={`users.${itemIndex}.name`}
        defaultValue={name}
        render={({ field }) => <TextInput {...field} placeholder="Name" />}
      />
      <Controller
        control={control}
        name={`users.${itemIndex}.email`}
        defaultValue={email}
        render={({ field }) => <TextInput {...field} placeholder="Email" />}
      />

      <button
        onClick={addAfter}
        type="button"
        className="w-[54px] h-[15px] text-[#0500FF] text-[12px] font-medium leading-[15px] bg-transparent border-none"
      >
        Add after
      </button>
      <button
        onClick={handleRemoveItem}
        type="button"
        className="w-[38px] h-[15px] text-[#FF0000] text-[12px] font-medium leading-[15px] bg-transparent border-none top-[11px] left-[408px]"
      >
        Delete
      </button>
    </div>
  )
}
