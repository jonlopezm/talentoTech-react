import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiMessageSlice = createApi({
    reducerPath: "MessageApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3010",
    }),
    endpoints: (builder) => ({
        getMessages: builder.query({
            query: () => "/message",
            providesTags: ["Messages"],
        }),
        createMessage: builder.mutation({
            query: (newMessage) => ({
                url: "/message",
                method: "POST",
                body: newMessage,
            }),
            invalidatesTags: ["Message"],
        }),
    }),
});

export const { useGetMessagesQuery, useCreateMessageMutation } = apiMessageSlice;