import React, { useEffect, useState } from 'react';
import Task from './Task';
import { getall, addnew } from '../handleHttp/Api.ts'

interface TaskType {
  _id: string;
  task: string;
}

const Input: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      await getall(setTasks);
    };
    fetchData();
  }, []);

  const handleButtonClick = async () => {
    await addnew(inputValue, setTasks);
    setInputValue('');
  };

  return (
    <div className="container mx-auto mt-8 p-8 bg-gray-200 rounded-lg shadow-lg">
      <div className="flex mb-4">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className="p-3 border rounded-l focus:outline-none w-full text-lg placeholder-gray-500"
          placeholder="Add a new todo..."
        />
        <button
          className="bg-purple-600 text-white p-3 rounded-r-md hover:bg-blue-700 focus:outline-none transition duration-300 ease-in-out"
          onClick={handleButtonClick}
        >
          Add
        </button>
      </div>
      <ul>
        {tasks.map((task) => (
          <Task key={task._id} tasktext={task.task} setTasks={setTasks} id={task._id} />
        ))}
      </ul>
    </div>
  );
};

export default Input;
