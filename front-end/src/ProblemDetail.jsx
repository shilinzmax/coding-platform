import React, { useState, useEffect } from 'react';
import axios from 'axios';
import axios from 'axios';

const ProblemDetail = ({ problemId }) => {
  const [problem, setProblem] = useState(null);
  const [code, setCode] = useState('');
  const [result, setResult] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:4000/problems/${problemId}`)
      .then(response => {
        setProblem(response.data);
      })
      .catch(error => {
        console.error('Error fetching problem details:', error);
      });
  }, [problemId]);

  const handleSubmit = () => {
    axios.post('http://localhost:4000/submit', {
      problemId: problem.id,
      code: code
    })
    .then(response => {
      setResult(response.data);
    })
    .catch(error => {
      console.error('Error submitting code:', error);
    });
  };

  if (!problem) return <p>Loading...</p>;

  return (
    <div>
      <h1>{problem.title}</h1>
      <p>Difficulty: {problem.difficulty}</p>
      <p>{problem.description}</p>
      <textarea value={code} onChange={(e) => setCode(e.target.value)} rows="10" cols="50" />
      <button onClick={handleSubmit}>Submit</button>
      {result && (
        <div>
          <p>Status: {result.status}</p>
          <p>Runtime: {result.runtime}</p>
        </div>
      )}
    </div>
  );
};

export default ProblemDetail;