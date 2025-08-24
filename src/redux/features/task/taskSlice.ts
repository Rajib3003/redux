import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
import { deleteUser } from "./userSlice";




interface InistialState {
    tasks: ITask[];  
    filter: 'low' | 'medium' | 'high' | 'all';
}

const initialState: InistialState = {
    tasks: [],
    filter : 'all',
};

type DraftTask = Pick<ITask, 'title' | 'discription' | 'priority' | 'dueDate' | 'assignedTo'>;
const createTask = (data: DraftTask): ITask => {
    return {
        ...data,
        _id: nanoid(),       
        isCompleted: false,        
        assignedTo: data.assignedTo ? data.assignedTo : null,
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
        setTasks: (state, action: PayloadAction<ITask[]>) => {
            state.tasks = action.payload;
        },
        toggleCompleteState : (state, action: PayloadAction<string>) => {
            state.tasks.forEach((task)=>task._id === action.payload ? (task.isCompleted = !task.isCompleted) : task);
        },
        deleteTask: (state, action: PayloadAction<string>) => {
            state.tasks = state.tasks.filter((task) => task._id !== action.payload);
        },
        updateTask: (state, action: PayloadAction<ITask>) => {
            const { _id, ...updatedData } = action.payload;
            const taskIndex = state.tasks.findIndex(task => task._id === _id);
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
    extraReducers: (builder) => {
        builder.addCase(deleteUser, (state, action)=> {
            state.tasks.forEach((task)=>{
                task.assignedTo === action.payload ? (task.assignedTo = null) : task
            })
        })
    }
});

export const selectTasks = (state: RootState) => {
    // const f = state.tasks.filter;
       const filter = state.todo.filter;
       console.log("Filter from state===================", filter);
    if (filter === 'low') {                   
            return state.todo.tasks.filter((task : ITask)=> task.priority === "low");            
    } 
    else if (filter === 'medium') {
        return state.todo.tasks.filter((task : ITask)=> task.priority === "medium");                
    }
    else if (filter === 'high') {
        return state.todo.tasks.filter((task : ITask)=> task.priority === "high");                
    } else {
        return state.todo.tasks;
    }
}
export const selectFilter = (state: RootState) => { 
            return state.todo.filter;   
            
}
export const {addTask, toggleCompleteState, deleteTask, updateTask, updateFilter,setTasks} = taskSlice.actions;

export default taskSlice.reducer;