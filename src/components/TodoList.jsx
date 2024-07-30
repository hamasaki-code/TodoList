import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';

export const TodoList = ({ taskList, setTaskList }) => {
  const handleCompleted = (id) => {
    /* 現在のタスクに取り消し線を追加する。 */
    setTaskList(
      taskList.map((task) => {
        // console.log("a");
        if (id === task.id) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      })
    );
  };

  const handleDelete = (id) => {
    /* 現在のタスクを削除する。 */
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  return (
    <div className='todoList'>
      <div className='todos'>
        {taskList.map((task, index) => (
          <div className={`todo ${task.completed ? "completed" : ""}`} key={index} >
          <div className='todoText'>
            <span>{task.text}</span>
            <div className='icons'>
              <button onClick={() => handleCompleted(task.id)}>
                <FontAwesomeIcon icon={faCheck} />
              </button>
              <button onClick={() => handleDelete(task.id)}>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </div>
        </div>
        ))}
        
      </div>
    </div>
  );
};

