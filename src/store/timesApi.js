import { apiSlice } from "./slices/apiSlice";

export const timesApi = apiSlice.injectEndpoints({
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
            invalidatesTags: [{ type: "times", id: "LIST" }]
        }),
        editTimes: build.mutation({
            query: (body) => ({
                url: 'times',
                method: 'PATCH',
                body,
            }),
            invalidatesTags: [{ type: "times", id: "LIST" }]
        })
    }),
})

export const { useGetTimesQuery, useAddTimesMutation, useEditTimesMutation } = timesApi;