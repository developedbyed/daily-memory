import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    title: '',
    story: ''
  }
  onChangeHandler = (e)=>{
    this.setState({[e.target.name]: e.target.value});
  }
  submitHandler = (e) => {
    e.preventDefault();

    axios.post('/memories',{
      title: this.state.title,
      story: this.state.story
    })
      .then(res=>{
        console.log(res);
      });
  };
  render() {
    return (
      <div className="App">
      <form onSubmit={this.submitHandler}>
        <input type="text" name="title" value={this.state.title} onChange={this.onChangeHandler}/>
        <input type="text" name="story" value={this.state.story} onChange={this.onChangeHandler}/>
        <button type="submit">Submit</button>
      </form>
      </div>
    );
  }
}

export default App;
