import React, { Component } from 'react';

class Test extends Component {
  state = {
    title: '',
    body: ''
  };
  //fires off after the component mounts
  componentDidMount() {
    //where you will make your http calls in your component

    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({
          title: json.title,
          body: json.body
        });
      });
    console.log('component did mount');
  }

  //use fetch or axios

  // //deprecated
  // UNSAFE_componentWillMount() {
  //   //runs before it mounts
  //   console.log('componentwillmount');
  // }

  // //when your component updates and renders

  // componentDidUpdate() {
  //   //runs before it mounts
  //   console.log('componentDidUpdate');
  // }

  // //deprecated
  // componentWillUpdate() {
  //   //runs before it mounts
  //   console.log('componentWillUpdate');
  // }

  // //deprecated
  // componentWillReceiveProps(nextProps, nextState) {
  //   console.log('componentWillReceiveProps');
  //   //you can turn the piece of state into a component prop
  // }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   return {
  //     test: 'something'
  //   };
  // }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log('getSnapshotBeforeUpdate');
  // }

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}

export default Test;
