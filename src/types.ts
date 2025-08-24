
export interface ITask {
  _id: string;
  title: string;
  discription: string;
  dueDate: string; 
  isCompleted: boolean;
  priority: 'low' | 'medium' | 'high' | 'all';
  assignedTo: string | null; // User ID
}

export interface IUser {
  id: string;
  name: string;
  age : number;  
}