import classes from "./Checkout.module.css";
const Checkout = (props) => {
  const confirmHandler = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name"></input>
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street"></input>
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal"></input>
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city"></input>
      </div>
      <button onClick={props.onCancel} type="button">
        Cancel
      </button>
      <button>Confirm</button>
    </form>
  );
};

export default Checkout;
