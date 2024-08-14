import axios from 'axios'
import { UsersProps } from './types'

export async function getUsers(url: string): Promise<UsersProps[]> {
  try {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com${url}`,
    )

    return data
  } catch (error) {
    throw new Error(`Get Users: ${error}`)
  }
}

function mockApiCall(data: UsersProps[]): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('mockApiCall', data)
      resolve('Success')
    }, 1000)
  })
}

export async function saveUsers(data: UsersProps[]): Promise<string> {
  try {
    const response = await mockApiCall(data)

    return response
  } catch (error) {
    throw new Error(`Save users: ${error}`)
  }
}
