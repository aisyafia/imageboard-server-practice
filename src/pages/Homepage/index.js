const HomePage = (props) => {
  return (
    <div>
      <h3>Homepage</h3>
      <h5>{props.userName ? `Hello ${props.userName}` : ``}</h5>
    </div>
  );
};

export { HomePage };
