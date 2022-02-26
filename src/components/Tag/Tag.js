// styles
import styles from "./Tag.module.css";

// vars
const { tagContainer, tagText } = styles;

const Tag = ({ children }) => {
  return (
    <div className={tagContainer}>
      <p className={tagText}>{children}</p>
    </div>
  );
};

export default Tag;
