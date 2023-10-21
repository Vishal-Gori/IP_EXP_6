
// function ThankYou(props) {
//   return (
//     <div>
//       <h2>Thank You!</h2>
//       <p>Name: {props.name}</p>
//       <p>Email: {props.email}</p>
//     </div>
//   );
// }

// export default ThankYou;

function ThankYou({ name, email }) {
  return (
    <center>
      <font face="Comic Sans MS" color="white">
        <fieldset style={{ width: "40%" }}>
          <h1>Thank you, {name}!</h1>
          <p>We have received your email address, {email}. We will be in touch soon.</p>
        </fieldset>
      </font>
    </center>
  );
}

export default ThankYou;
