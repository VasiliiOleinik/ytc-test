import './App.css'
import { FormRow } from '@/components'
import { useApp } from '@/hooks/useApp'
import { DEFAULT_USER, NEXT_INDEX_OFFSET } from '@/constants'

function App() {
  const {
    isLoading,
    fields,
    insert,
    remove,
    onSubmit,
    handleSubmit,
    isAnyFieldEmpty,
    control,
    append,
  } = useApp()

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="w-12 h-12 border-4 border-t-4 border-gray-300 border-t-[#0C9A00] rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="w-[480px] mx-auto">
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full bg-white border border-[#E8E8E8] rounded-[10px] mb-[16px] p-4">
              {fields.map(({ id, name, email }, index) => (
                <FormRow
                  itemIndex={index}
                  control={control}
                  key={id}
                  name={name}
                  email={email}
                  handleRemoveItem={() => remove(index)}
                  addAfter={() =>
                    insert(index + NEXT_INDEX_OFFSET, DEFAULT_USER)
                  }
                />
              ))}
            </div>
            <div className="w-full flex justify-start items-center">
              <button
                type="submit"
                className={`w-[103px] h-[23px] rounded-[10px] text-white ${
                  isAnyFieldEmpty
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-[#0C9A00] cursor-pointer'
                }`}
                disabled={isAnyFieldEmpty}
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  )
}

export default App
