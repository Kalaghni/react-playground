
const counterReducer = (state = 0, action) => {
    switch (action.type) {
      case "INCREMENT":
        return state + action.interval;
      case "DECREMENT":
        return state - action.interval;
      case "RESET":
        return (state = 0);
      default:
        return state;
    }
  };
  export default counterReducer;