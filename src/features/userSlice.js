import {createSlice} from '@reduxjs/toolkit'

const users = [
    {
        "_id": "65e6724ff133fa35d0d97d2e",
        "id": 1,
        "name": "John",
        "lastname": "Doe",
        "email": "johndoe@example.com",
        "password": "$2b$10$aKQWGDnvo9/9RXJ64wwXs.BwyXDAMs5Awdj.JJwLxs0zuQWrFwcfa", 
        "avatar": "708390545609-2410.PNG"      
    }
]

export const userSlice = createSlice({
    name: 'users',
    initialState: users,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload)
        }
    }
})

export const { addUser } = userSlice.actions
export default userSlice.reducer