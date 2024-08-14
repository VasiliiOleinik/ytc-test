import { getUsers, saveUsers } from '@/api'
import { UsersProps } from '@/api/types'
import { API_ENDPOINTS } from '@/constants'
import { useFieldArray, useForm } from 'react-hook-form'
import useSWR from 'swr'
import useSWRMutation from 'swr/mutation'

export const useApp = () => {
  const { control, handleSubmit, watch } = useForm<{ users: UsersProps[] }>()
  const { fields, insert, remove, replace, append } = useFieldArray({
    control,
    name: 'users',
  })

  const { data: users, isLoading } = useSWR(API_ENDPOINTS.users, getUsers, {
    onSuccess: (data) => {
      replace(data)
    },
  })

  const { trigger } = useSWRMutation(API_ENDPOINTS.users, saveUsers, {
    onSuccess(data) {
      alert(data)
    },
  })

  const onSubmit = (data: UsersProps[]) => {
    trigger(data)
  }

  const watchedFields = watch('users')
  const isAnyFieldEmpty = watchedFields?.some(
    (field) => !field.name || !field.email,
  )

  return {
    isLoading,
    users,
    fields,
    insert,
    remove,
    onSubmit,
    handleSubmit,
    isAnyFieldEmpty,
    control,
    append,
  }
}
