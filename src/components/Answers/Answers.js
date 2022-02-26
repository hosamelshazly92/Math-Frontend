// styles
import styles from "./Answers.module.css";

// vars
const { answersContainer } = styles;

const Answers = ({ data }) => {
  return (
    <div className={answersContainer}>
      {data.map((itm, idx) => (
        <div key={idx}>
          <p>{itm}</p>
        </div>
      ))}
    </div>
  );
};

export default Answers;
