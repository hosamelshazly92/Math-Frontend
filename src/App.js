// imports
import { useEffect, useState } from "react";
// import store from "./state/store";
import { getQuestions } from "./state/actions/questionsActions";
// import { connect } from "react-redux";

// components
import Question from "./components/Question/Question";
import Answers from "./components/Answers/Answers";
import Tag from "./components/Tag/Tag";

// imagery
import spinner from "./assets/gif/loading-spinner.gif";

// styles
import styles from "./App.module.css";
import store from "./state/store";

// vars
const {
  appContainer,
  loadingContainer,
  loadingSpinner,
  loadingText,
  questionContainer,
} = styles;
const URL = "http://localhost:5000/questions";

function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        store.dispatch(getQuestions(data.questions));
        let arr = store.getState().questionsReducer;
        setQuestions(arr);
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
        <>
          {questions.map((itm) => (
            <div key={itm._id}>
              <div className={questionContainer}>
                <Tag>{itm.type}</Tag>
                <Question>{itm.question}</Question>
              </div>
              <Answers data={itm.choices} />
            </div>
          ))}
        </>
      )}
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     questions: state.questionsReducer,
//   };
// };

// const mapDispatchToProps = (state) => {
//   return {
//     fn: () => dispatch(action()),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
