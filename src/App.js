// imports
import { useEffect, useState } from "react";

// components
import Question from "./Question/Question";

// styles
import styles from "./App.module.css";

function App() {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/questions")
      .then(async (res) => {
        const data = await res.json();
        console.log(data.questions);
        setQuestions(data.questions);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {questions.length === 0 ? (
        <p>loading...</p>
      ) : (
        <div>
          {questions.map((itm) => (
            <div key={itm._id}>
              <Question>{itm.question}</Question>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
