import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";




interface InistialState {
    tasks: ITask[];  
}

const initialState: InistialState = {
    tasks: [
        
    ],
};

type DraftTask = Pick<ITask, 'title' | 'discription' | 'priority' | 'dueDate'>;
const createTask = (data: DraftTask): ITask => {
    return {
        id: nanoid(),       
        isCompleted: false,
        ...data,
    };
}

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask (state, action : PayloadAction<DraftTask>) {
            const taskData = createTask(action.payload);
            state.tasks.push(taskData);
        },
        toggleCompleteState : (state, action: PayloadAction<string>) => {
            state.tasks.forEach((task)=>task.id === action.payload ? (task.isCompleted = !task.isCompleted) : task);
        },
        deleteTask: (state, action: PayloadAction<string>) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload);
        },
        updateTask: (state, action: PayloadAction<ITask>) => {
            const { id, ...updatedData } = action.payload;
            const taskIndex = state.tasks.findIndex(task => task.id === id);
            if (taskIndex !== -1) {
                state.tasks[taskIndex] = {
                    ...state.tasks[taskIndex],
                    ...updatedData,
                };
            }
        },

    },
});

export const selectTasks = (state: RootState) => {
    return state.todo.tasks;
}
export const {addTask, toggleCompleteState, deleteTask, updateTask} = taskSlice.actions;

export default taskSlice.reducer;