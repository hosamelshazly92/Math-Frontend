// styles
import styles from "./Question.module.css";

// vars
const { questionContainer, questionLabel, questionText } = styles;

const Question = ({ children }) => {
  return (
    <div className={questionContainer}>
      <p className={questionLabel}>Question</p>
      <p className={questionText}>{children}</p>
    </div>
  );
};

export default Question;
