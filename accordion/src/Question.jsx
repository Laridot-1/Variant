import React from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ id, title, info, obj, handleToggle }) => {
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => handleToggle(id)}>
          {obj[id] ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {obj[id] && <p>{info}</p>}
    </article>
  )
};

export default Question;
