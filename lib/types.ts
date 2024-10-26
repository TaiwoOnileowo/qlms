export interface UserInputs {
  employeeNo: string;
  country: string;
  state: string;
  logo: string;
  address: string;
  city: string;
  zipCode: string;
  website: string;
}
export type Employee = {
  id: string;
  name: string;
  role: string;
  status: string;
  email: string;
};
export interface Lesson {
  id: string;
  name: string;
  content: string;
  featuredImage: string;
  video: string;
  exerciseFiles: File[];
}
export interface Quiz {
  id: string;
  name: string;
  summary: string;
  questions: Question[];
}
export interface Module {
  id: string;
  name: string;
  summary?: string;
  lessons?: Lesson[];
  quizzes?: Quiz[];
}
export interface Option {
  id: string;
  name: string;
  isCorrect: boolean;
}

export interface Question {
  id: string;
  question: string;
  questionType: string;
  points: number;
  description: string;
  options: Option[];
  answerExplanation: string;
}

export interface AppContextType {
  modules: Module[];
  setModules: React.Dispatch<React.SetStateAction<Module[]>>;
}
