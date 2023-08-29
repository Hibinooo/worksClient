import { apiSlice } from "./slices/apiSlice";


export const authApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    loginUser: build.mutation({
      query: (body) => ({
        url: `login`,
        method: 'POST',
        body
      }),
    }),
    createUser: build.mutation({
      query: (body) => ({
        url: `user`,
        method: 'POST',
        body
      }),
    }),
  }),
})

export const { useLoginUserMutation, useCreateUserMutation } = authApi;

