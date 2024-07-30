import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';

export const InputForm = ({taskList, setTaskList}) => {

  const [inputText, setInputText] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault(); //イベントデフォルトの動作を無効化する。

    // タスクを追加する
    setTaskList([
      ...taskList,
      {
        id: taskList.length,
        text: inputText, 
        completed: false
      }
      
    ]);
    setInputText(''); // 入力フィールドをクリア

  }

  const handleChange = (e) => {
    setInputText(e.target.value);
    console.log(inputText)
  }

  return (
    <div className="inputForm">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={inputText}/>
        <button>
        <FontAwesomeIcon icon={faSquarePlus} />
        </button>
      </form>
    </div>
  )
}