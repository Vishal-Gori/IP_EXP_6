
function ThankYou(props) {
  return (
    <div>
      <h2>Thank You!</h2>
      <p>Name: {props.name}</p>
      <p>Email: {props.email}</p>
    </div>
  );
}

export default ThankYou;