import React, { useState, ChangeEvent } from 'react';
import { updateTask, deletetask } from '../handleHttp/Api'

interface TaskProps {
  tasktext: string;
  setTasks: React.Dispatch<React.SetStateAction<any[]>>;
  id: string;
}

const Task: React.FC<TaskProps> = ({ tasktext, setTasks, id }) => {
  const [editable, setEditable] = useState<boolean>(false);
  const [editableText, setEditableText] = useState<string>(tasktext);

  const handleUpdate = async (): Promise<void> => {
    await updateTask(id, editableText, setTasks);
    setEditable(false);
  };

  const handleRemove = async (): Promise<void> => {
    await deletetask(id, setTasks);
  };

  const toggleEditable = (): void => {
    setEditable((prev) => !prev);
  };

  const handleTextChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setEditableText(event.target.value);
  };

  return (
    <li className="flex items-center justify-between bg-white p-3 my-2 rounded shadow">
      {editable ? (
        <input
          className="text-lg"
          type="text"
          value={editableText}
          onChange={handleTextChange}
          onBlur={handleUpdate}
          autoFocus
        />
      ) : (
        <span className="flex-1 text-lg" onClick={toggleEditable}>
          {tasktext}
        </span>
      )}
      {editable ? (
        <button className="text-blue-500 hover:text-blue-700 focus:outline-none" onClick={handleUpdate}>
          Save
        </button>
      ) : (
        <button className="text-yellow-500 hover:text-yellow-700 focus:outline-none" onClick={toggleEditable}>
          ✏️ Edit
        </button>
      )}
      {!editable && (
        <button className="text-red-500 hover:text-red-700 focus:outline-none" onClick={handleRemove}>
          🗑 Remove
        </button>
      )}
    </li>
  );
};

export default Task;
