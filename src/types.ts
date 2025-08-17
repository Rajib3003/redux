
export interface ITask {
  id: string;
  title: string;
  discription: string;
  dueDate: string; 
  isCompleted: boolean;
  priority: 'low' | 'medium' | 'high';
}