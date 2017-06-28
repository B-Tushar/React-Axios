import React, { Component } from 'react';
import axios from 'axios';


class App extends Component {
  constructor(props){
    super(props);
    this.state = { r_posts:[],a_posts:[],j_posts:[]}
  }

  componentDidMount(){
  axios.get('https://www.reddit.com/r/reactjs.json').then(res =>{
     const posts = res.data.data.children.map(obj => obj.data);
      this.setState({ r_posts:posts });
  });
  axios.get('https://www.reddit.com/r/angularjs.json').then(res =>{
     const posts = res.data.data.children.map(obj => obj.data);
      this.setState({ a_posts:posts });
  });
   axios.get('https://www.reddit.com/r/jquery.json').then(res =>{
     const posts = res.data.data.children.map(obj => obj.data);
      this.setState({ j_posts:posts });
  })
  }

  render() {
    return (
     <div>
        <h1>ReactJs</h1>
        <ul>
          {this.state.r_posts.map(post =>
            <li key={post.id}>{post.title}</li>
          )}
        </ul>
        <h1>AngularJs</h1>
        <ul>
          {this.state.a_posts.map(post =>
            <li key={post.id}>{post.title}</li>
          )}
        </ul>
        <h1>Jquery</h1>
        <ul>
          {this.state.j_posts.map(post =>
            <li key={post.id}>{post.title}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
