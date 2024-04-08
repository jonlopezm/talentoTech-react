import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'http://localhost:3010',
        prepareHeaders: (headers, {getState}) => {
            console.log(getState())
            const token = getState().auth.token
            if(token){
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        } 
    }),
    tagTypes: ['User'],
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => '/user',
            providesTags: ['Users'],
            transformResponse: response => response.sort((a, b) => 
            (a.name[0].toUpperCase() < b.name[0].toUpperCase()) ? -1 
            : (a.name[0].toUpperCase() > b.name[0].toUpperCase()) ? 1 :0)
        }),   
        getUserById: builder.query({
            query: (_id) => '/user/'+_id,
            providesTags: ['User']

        }),     
        createUser: builder.mutation({
            query: (newUser) => ({
                url: '/user',
                method: 'POST',
                body: newUser
            }),
            invalidatesTags: ['Users']
         })
        ,
        deleteUser: builder.mutation({
            query: (_id) => ({
                url: `/user/${_id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Users']
        }),
        updateUser: builder.mutation({
            query: (user) => ({
                url: `/user/${user._id}`,
                method: 'PATCH',
                body: user
            }),
            invalidatesTags: ['Users',"User"]
        }),
        uploadAvatar: builder.mutation({
            query: (body) => ({
                url: `/upload/${body._id}/user`,
                method: 'POST',
                body: body.file
            }),
            invalidatesTags: ['Users']
        }),
        login: builder.mutation({
            query: (body) => ({
                url: '/user/login',
                method: 'POST',
                body: body
            })
        })
    })

})

export const { useGetUsersQuery, useCreateUserMutation, useDeleteUserMutation, useUpdateUserMutation , useGetUserByIdQuery, useUploadAvatarMutation, useLoginMutation} = apiSlice