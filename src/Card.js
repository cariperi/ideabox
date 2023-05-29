import React from 'react';
import EditToggle from './EditToggle';
import './Card.css';

const Card = ({ title, description, id, status, deleteIdea, updateIdea }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={() => deleteIdea(id)}>🗑</button>
      <EditToggle id={id} status={status} updateIdea={updateIdea} />
    </div>
  );
};

export default Card;
