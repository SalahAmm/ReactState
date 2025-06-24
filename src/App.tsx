import { useState } from 'react';
import NewGoal from './components/newGoal.tsx'

import Header from './components/Header.tsx';
import goalsImg from './assets/goals.jpg';
import CourseGoalList from './components/CouseGoalList.tsx';

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};


export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal(goal:string , summary: string) {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: 'Learn React + TS',
        description: 'Learn it in depth!',
      };
      return [...prevGoals, newGoal];
    });
  }


   function handleDeleteGoal (id:number) {
    setGoals(prevGoals => prevGoals.filter((goal) => goal.id !== id));

   }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal}/>
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal}/>  
    </main>
  );
}
