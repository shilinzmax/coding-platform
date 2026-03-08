import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProblemList = () => {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/problems')
      .then(response => {
        setProblems(response.data);
      })
      .catch(error => {
        console.error('Error fetching problems:', error);
      });
  }, []);

  return (
    <div>
      <h1>Problem List</h1>
      <ul>
        {problems.map(problem => (
          <li key={problem.id}>
            <h2>{problem.title}</h2>
            <p>Difficulty: {problem.difficulty}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProblemList;