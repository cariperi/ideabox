import React from 'react';
import './EditToggle.css';

function EditToggle({ id, status, updateIdea }) {
  if (status) {
    return <div className="checkmark">✓</div>;
  }

  return (
    <div>
      <button onClick={() => updateIdea(id)} className="edit">
        Complete Idea
      </button>
    </div>
  );
}

export default EditToggle;
