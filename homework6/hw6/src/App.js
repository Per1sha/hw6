import React, { useState, useEffect } from 'react';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [naiti, setNaiti] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([]);



   
  const naitichto = () => {
    const filtered = posts.filter(post =>
      post.title.toLowerCase().includes(naiti.toLowerCase())
       ||
      post.body.toLowerCase().includes(naiti.toLowerCase())
    );
    setFilteredPosts(filtered);
  };


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setPosts(data);
        setFilteredPosts(data);
       
      }) .catch(error => console.error('mistake',error))
  }, []);



  return (
    <div>
     <h1>Поиск</h1>

  
      <input
        type="text"
        placeholder="type smth"
        value={naiti}
        onChange={e => setNaiti(e.target.value)}
      />

      <button onClick={naitichto}>search</button>

      <ul>
        {filteredPosts.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;