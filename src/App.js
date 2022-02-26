// imports
import { useEffect, useState } from "react";

// components
import Question from "./components/Question/Question";
import Answers from "./components/Answers/Answers";
import Tag from "./components/Tag/Tag";

// imagery
import spinner from "./assets/gif/loading-spinner.gif";

// styles
import styles from "./App.module.css";

// vars
const { appContainer, loadingContainer, loadingSpinner, loadingText } = styles;

function App() {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/questions")
      .then(async (res) => {
        const data = await res.json();
        console.log(data.questions);
        // setQuestions(data.questions);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={appContainer}>
      {questions.length === 0 ? (
        <div className={loadingContainer}>
          <img className={loadingSpinner} src={spinner} alt="loading spinner" />
          <p className={loadingText}>loading</p>
        </div>
      ) : (
        <div>
          {questions.map((itm) => (
            <div key={itm._id}>
              <Tag>{itm.type}</Tag>
              <Question>{itm.question}</Question>
              <Answers data={itm.answers} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
