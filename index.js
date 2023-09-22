const Button = (props) => {
  const { name, className } = props;
  return <button className={className}>{name}</button>;
};

const element = (
  <div className="bg-container">
    <h1 className="heading">Social Buttons</h1>
    <div className="button-container">
      <Button name="Like" className="button button1" />
      <Button name="Comment" className="button button2" />
      <Button name="Share" className="button button3" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
