import './App.css'
import { FormRow, Spinner } from '@/components'
import { useApp } from '@/hooks/useApp'
import { DEFAULT_USER, NEXT_INDEX_OFFSET } from '@/constants'
import { FormHead } from './components/FormHead'

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
        <Spinner />
      ) : (
        <div className="w-[480px] mx-auto">
          <FormHead append={append} />
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
