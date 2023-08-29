import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials, logOut } from './authSlice'

const baseQuery = fetchBaseQuery({
  baseUrl: 'api/',
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers
  }
})

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions)

  console.log(result)
  if (result?.error?.status === 403) {

    const refreshResult = await baseQuery('/refresh_token', api, extraOptions)
    if (refreshResult?.data) {
      const user = api.getState().auth.user
      api.dispatch(setCredentials({ accessToken: refreshResult.data, user }))
      result = await baseQuery(args, api, extraOptions)
    } else {
      api.dispatch(logOut())
    }
  }
  return result
}

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: builder => ({})
})