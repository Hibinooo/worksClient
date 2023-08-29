import { apiSlice } from "./slices/apiSlice";

export const worksApi = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getWorks: build.query({
            query: ({ id, startdate, enddate }) => ({
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
                url: `work`,
                method: 'POST',
                body,
            }),
            invalidatesTags: [{ type: "works", id: "LIST" }]
        })
    }),
})

export const { useGetWorksQuery, useAddWorksMutation } = worksApi;