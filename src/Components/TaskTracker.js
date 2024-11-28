import React, { useState } from 'react'

const TaskTracker = () => {
  const [input, setInput] = useState('')
  const [data, setData] = useState([])

  const addClick = () => {
    if (input.trim() === '') {
      alert("Enter the text first !!");
      return;
    }
    let store = [...data, { task: input, isCompleted: false }];
    console.log(input)
    setData(store)
    setInput("")
  }

  const deleteClick = (idx) => {
    console.log(data)
    let filterData = data.filter((curValue, id) => {
      return id != idx;
    });
    setData(filterData)
  }

  const completeClick = (idx) => {
    let updatedData = data.map((task, id) => {
      if (id == idx) {
        return { ...task, isCompleted: !task.isCompleted }
      }
      return task;
    });
    setData(updatedData)
  }

  const editClick = (idx) => {
    const newTask = prompt('Edit Task:', data[idx].task);
    if (newTask) {
      let updatedData = data.map((task, id) => {
        if (id === idx) {
          return { ...task, task: newTask }
        }
        return task;
      });
      setData(updatedData);
    }
  }

  const inputChange = (e) => {
    setInput(e.target.value)
  }

  return (
    <div className="bg-gradient-to-tr from-emerald-600 to-pink-950 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-lg p-6 rounded-lg shadow-lgj">
        <h1 className="text-3xl font-bold text-center text-white mb-6">Task Tracker</h1>
        <div className="flex mb-4">
          <input
            value={input}
            onChange={inputChange}
            className="border-2 text-white border-gray-300 bg-transparent p-3 w-full rounded-l-lg "
            type="text"
            placeholder="Enter your task"
          />
          <button
            onClick={addClick}
            className="bg-blue-500 ml-2 text-white text-lg px-6 py-3 rounded-md hover:bg-blue-600">
            Add
          </button>
        </div>
        <div className="space-y-4">
          {data.map((task, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center space-x-4">
                <p
                  className={`text-lg text-white ${task.isCompleted ? 'line-through text-gray-500' : ''}`}>
                  {idx + 1}. {task.task}
                </p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => editClick(idx)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition">
                  Edit
                </button>
                <button
                  onClick={() => completeClick(idx)}
                  className={`px-4 py-2 rounded-lg ${task.isCompleted ? 'bg-green-500' : 'bg-gray-500'} text-white hover:bg-opacity-80 transition`}>
                  {task.isCompleted ? 'Completed' : 'Incomplete'}
                </button>
                <button
                  onClick={() => deleteClick(idx)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskTracker;
