interface Task {
  _id: string;
  task: string;
}

const getall = async (setTasks: React.Dispatch<React.SetStateAction<Task[]>>): Promise<void> => {
  try {
    const res = await fetch('http://localhost:5002/todo/');
    const resData = await res.json();
    setTasks(resData);
  } catch (error) {
    console.error('Error fetching tasks:', error);
  }
};

const addnew = async (task: string, setTasks: React.Dispatch<React.SetStateAction<Task[]>>): Promise<void> => {
  try {
    const res = await fetch('http://localhost:5002/todo/new', {
      method: 'POST',
      body: JSON.stringify({ task }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (res.ok) {
      getall(setTasks);
      console.log('Todo added successfully.');
    } else {
      console.error('Failed to add todo.');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

const updateTask = async (
  id: string,
  editableText: string,
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
): Promise<void> => {
  try {
    const res = await fetch('http://localhost:5002/todo/update', {
      method: 'PUT',
      body: JSON.stringify({ id, task: editableText }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
     console.log("update id :=",id)
    if (res.ok) {
      setTasks((prevTasks) => {
        return prevTasks.map((task) => {
          if (task._id === id) {
            return { ...task, task: editableText };
          }
          return task;
        });
      });
    }
  } catch (err) {
    console.log('Error:', err);
  }
};

const deletetask = async (id: string, setTasks: React.Dispatch<React.SetStateAction<Task[]>>): Promise<void> => {
  try {
    console.log(id)
    const res = await fetch('http://localhost:5002/todo/delete', {
      method: 'DELETE',
      body: JSON.stringify({ id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (res.ok) {
      setTasks((prev) => prev.filter((obj) => obj._id !== id));
      console.log('Deleted successfully');
    }
  } catch (err) {
    console.log('Error:', err);
  }
};

export { getall, addnew, updateTask, deletetask };
