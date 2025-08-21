import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";




interface InistialState {
    tasks: ITask[];  
    filter: 'low' | 'medium' | 'high' | 'all';
}

const initialState: InistialState = {
    tasks: [],
    filter : 'all',
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
        updateFilter : (state, action: PayloadAction<'low' | 'medium' | 'high' | 'all'>) => {
            state.filter = action.payload;
        },

    },
});

export const selectTasks = (state: RootState) => {
    // const f = state.tasks.filter;
    //    const filter = state.todo.filter;
    // if (filter === 'low') {                   
    //         return state.todo.tasks.filter((task)=> task.priority === "low");            
    // } 
    // else if (filter === 'medium') {
    //     return state.todo.tasks.filter((task)=> task.priority === "medium");                
    // }
    // else if (filter === 'high') {
    //     return state.todo.tasks.filter((task)=> task.priority === "high");                
    // } else {
        return state.todo.tasks;
    // }
}
export const selectFilter = (state: RootState) => { 
            // return state.todo.filter;   
            
}
export const {addTask, toggleCompleteState, deleteTask, updateTask, updateFilter} = taskSlice.actions;

export default taskSlice.reducer;