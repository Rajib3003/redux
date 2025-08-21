import type { RootState } from "@/redux/store";
import type { IUser } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";




interface InistialState {
    users: IUser[];      
}

const initialState: InistialState = {
    users: [
        {
            id: nanoid(),
            name: "John Doe",
            age: 30,
        },
        {
            id: nanoid(),
            name: "Jane Smith",
            age: 25,
        },
        
    ],    
};

type DraftUser = Pick<IUser, 'name' | 'age'>;
const createUsers = (data: DraftUser): IUser => {
    return {
        id: nanoid(), 
        ...data,
    };
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser (state, action : PayloadAction<DraftUser>) {
            const userData = createUsers(action.payload);
            state.users.push(userData);
        },        
        deleteUser: (state, action: PayloadAction<string>) => {
            state.users = state.users.filter((user) => user.id !== action.payload);
        },
    },
});

export const selectUsers = (state: RootState) => {
        return state.todoUser.users;  
}

export const {addUser, deleteUser} = userSlice.actions;

export default userSlice.reducer;