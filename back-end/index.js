const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 4000;

app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://coding-platform-shilinzmax.vercel.app/'
  ]
}));

app.use(express.json());

const problems = [
  {
    id: 1,
    title: 'Two Sum',
    difficulty: 'Easy',
    description: 'Find two numbers that add up to a specific target.',
    starterCode: 'function twoSum(nums, target) { }'
  },
  {
    id: 2,
    title: 'Binary Search',
    difficulty: 'Medium',
    description: 'Implement binary search on a sorted array.',
    starterCode: 'function binarySearch(nums, target) { }'
  }
];

app.get('/problems', (req, res) => {
  res.json(problems);
});

app.get('/problems/:id', (req, res) => {
  const problem = problems.find(p => p.id === parseInt(req.params.id));
  if (problem) {
    res.json(problem);
  } else {
    res.status(404).send('Problem not found');
  }
});

app.post('/submit', (req, res) => {
  res.json({
    status: 'Accepted',
    runtime: '10 ms'
  });
});

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});