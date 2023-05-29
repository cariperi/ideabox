import React from 'react';
import Card from './Card';
import './Ideas.css';

function Ideas({ ideas, deleteIdea, updateIdea }) {
  const ideaCards = ideas.map((idea) => {
    return (
      <Card
        title={idea.title}
        description={idea.description}
        id={idea.id}
        key={idea.id}
        status={idea.status}
        deleteIdea={deleteIdea}
        updateIdea={updateIdea}
      />
    );
  });

  return <div className="ideas-container">{ideaCards}</div>;
}

export default Ideas;
