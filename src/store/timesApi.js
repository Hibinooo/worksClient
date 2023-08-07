import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const timesApi = createApi({
    reducerPath: 'timesApi',
    tagTypes: ['times'],
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/' }),
    endpoints: (build) => ({
        getTimes: build.query({
            query: (id) => ({
                url: `times`,
                params: { id }
            }),
            providesTags: (result) =>
                result
                    ? [
                        ...result.map(({ id }) => ({ type: 'times', id })),
                        { type: 'times', id: 'LIST' },
                    ]
                    : [{ type: 'times', id: 'LIST' }],
        }),
        addTimes: build.mutation({
            query: (body) => ({
                url: `times`,
                method: 'POST',
                body,
            }),
            invalidatesTags: [{type:"times", id: "LIST"}]
        })
    }),
})

export const { useGetTimesQuery, useAddTimesMutation } = timesApi;