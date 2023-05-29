import React, { Component } from 'react';
import Ideas from './Ideas';
import Form from './Form';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      ideas: [
        {
          id: 1,
          title: 'Pet a cat',
          description: 'This cat is Number 1',
          status: false,
        },
        {
          id: 2,
          title: 'Pet a second cat',
          description: 'This cat is Number 2',
          status: false,
        },
        {
          id: 3,
          title: 'Pet a third cat',
          description: 'This cat is Number 3',
          status: false,
        },
      ],
    };
  }

  addIdea = (newIdea) => {
    this.setState({ ideas: [...this.state.ideas, newIdea] });
  };

  deleteIdea = (id) => {
    const filteredIdeas = this.state.ideas.filter((idea) => idea.id !== id);
    this.setState({ ideas: filteredIdeas });
  };

  updateIdea = (id) => {
    const thisIdea = this.state.ideas.find((idea) => idea.id === id);
    const updatedIdea = thisIdea;
    updatedIdea.status = !thisIdea.status;
    const filteredIdeas = this.state.ideas.filter((idea) => idea.id !== id);
    filteredIdeas.push(updatedIdea);
    filteredIdeas.sort((a, b) => a.id - b.id);
    this.setState({ ideas: filteredIdeas });
  };

  render() {
    return (
      <main className="App">
        <h1>IdeaBox</h1>
        <Form addIdea={this.addIdea} />
        {!this.state.ideas.length && <h2>No ideas yet -- add some!</h2>}
        <Ideas
          ideas={this.state.ideas}
          deleteIdea={this.deleteIdea}
          updateIdea={this.updateIdea}
        />
      </main>
    );
  }
}

export default App;
