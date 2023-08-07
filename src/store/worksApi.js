import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const worksApi = createApi({
    reducerPath: 'worksApi',
    tagTypes: ['works'],
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/' }),
    endpoints: (build) => ({
        getWorks: build.query({
            query: ({id, startdate, enddate}) => ({
                url: `work`,
                params: { id, startdate, enddate }
            }),
            providesTags: (result) =>
                result
                    ? [
                        ...result.map(({ id }) => ({ type: 'works', id })),
                        { type: 'works', id: 'LIST' },
                    ]
                    : [{ type: 'works', id: 'LIST' }],
        }),
        addWorks: build.mutation({
            query: (body) => ({
                url: `works`,
                method: 'POST',
                body,
            }),
            invalidatesTags: [{ type: "works", id: "LIST" }]
        })
    }),
})

export const { useGetWorksQuery, useAddWorksMutation} = worksApi;