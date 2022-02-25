const Answers = ({ data }) => {
  return (
    <div>
      {data.map((itm, idx) => (
        <div key={idx}>
          <p>{itm}</p>
        </div>
      ))}
    </div>
  );
};

export default Answers;
