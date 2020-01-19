/* eslint-disable */
import { AspidaClient, optionToRequest } from 'aspida'
import { Methods as Methods0 } from './posts/index'
import { Methods as Methods1 } from './posts/_postId@number'

const api = (client: AspidaClient, baseURL?: string) => {
  const prefix = (baseURL === undefined ? 'https://jsonplaceholder.typicode.com' : baseURL).replace(/\/$/, '')

  return {
    posts: {
      _postId: (val0: number) => ({
        get: () =>
          client.fetch<Methods1['get']['resData']>(`${prefix}/posts/${val0}`, 'GET').json(),
        $get: async () =>
          (await client.fetch<Methods1['get']['resData']>(`${prefix}/posts/${val0}`, 'GET').json()).data
      }),
      get: () =>
        client.fetch<Methods0['get']['resData']>(`${prefix}/posts`, 'GET').json(),
      $get: async () =>
        (await client.fetch<Methods0['get']['resData']>(`${prefix}/posts`, 'GET').json()).data
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
