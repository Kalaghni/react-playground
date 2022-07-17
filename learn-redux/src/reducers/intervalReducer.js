const intervalReducer = (state = 1, action) => {
    switch (action.type) {
      case "INCREASE_INTERVAL":
        return state + 1;
      case "DECREASE_INTERVAL":
        if (state === 1) {
            return state;
        }
        return state - 1;
      case "RESET_INTERVAL":
        return (state = 1);
      default:
        return state;
    }
  };
  export default intervalReducer;