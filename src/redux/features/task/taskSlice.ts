import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";



interface InistialState {
    task: ITask[];  
}

const initialState: InistialState = {
    task: [
        {
            id: '1',
            title: 'Sample Task 1',
            description: 'This is a sample task description.',
            dueDate: new Date().toISOString(),
            isCompleted: false,
            priority: 'medium',
        },
        {
            id: '2',
            title: 'backend',
            description: 'This is a sample task description.',
            dueDate: new Date().toISOString(),
            isCompleted: false,
            priority: 'medium',
        },
    ],
};

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {},
});

export default taskSlice.reducer;