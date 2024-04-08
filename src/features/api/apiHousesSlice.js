import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const apiHousesSlice = createApi({
    reducerPath: "housesApi",
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3010',
        prepareHeaders: (headers, {getState}) => {
            const token = getState().auth.token
            if(token){
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        }
    }),
    tagTypes: ['Houses'],
    endpoints: (builder) => ({
        getHouses: builder.query({
            query: () => '/houses',
            providesTags: ['Houses']
        }),
        getHouseById: builder.query({
            query: (_id) => '/houses/'+_id,
            providesTags: ['House']
        }),
        createHouse: builder.mutation({
            query: (newHouse) => ({
                url: '/houses',
                method: 'POST',
                body: newHouse
            }),
            invalidatesTags: ["Houses"] // Se ejecuta cuando hay un cambio en la BD
        }),
        deleteHouse: builder.mutation({
            query: (code) => ({
                url: `/houses/${code}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Houses"]
        }),
        updateHouse: builder.mutation({
            query: (house) => ({
                url: `/houses/${house._id}`,
                method: "PATCH",
                body: house
            }),
            invalidatesTags: ["Houses","House"]
        }),
        uploadAvatar: builder.mutation({
            query: (body) => ({
                url: `/upload/${body._id}/house`,
                method: 'POST',
                body: body.file
            }),
            invalidatesTags: ['Houses']
        })
    })
})


export const { useGetHousesQuery,useGetHouseByIdQuery,useCreateHouseMutation, useDeleteHouseMutation,useUpdateHouseMutation, useUploadAvatarMutation} = apiHousesSlice