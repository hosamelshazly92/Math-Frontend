// styles
import styles from "./Answers.module.css";

// vars
const { answersContainer, answerContainer, answerText } = styles;

const Answers = ({ data }) => {
  return (
    <div className={answersContainer}>
      {data.map((itm, idx) => (
        <div className={answerContainer} key={idx} alt={idx}>
          <p className={answerText}>{itm}</p>
        </div>
      ))}
    </div>
  );
};

export default Answers;
