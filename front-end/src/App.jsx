import { useEffect, useState } from "react";

const API = "https://coding-platform.onrender.com"

function App() {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    fetch(`${API}/problems`)
      .then((res) => res.json())
      .then((data) => setProblems(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h1>Problem List</h1>

      {problems.length === 0 ? (
        <p>Loading problems...</p>
      ) : (
        <ul>
          {problems.map((p) => (
            <li key={p.id}>
              {p.title} — {p.difficulty}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;