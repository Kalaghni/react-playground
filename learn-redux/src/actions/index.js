export const increment = (x) => {
    return {
      type: "INCREMENT",
      interval: x,
    };
  };
  
  export const decrement = (x) => {
    return {
      type: "DECREMENT",
      interval: x,
    };
  };
  
  export const reset = () => {
    return {
      type: "RESET",
    }; 
  };
  
  export const increaseInterval = () => {
    return {
        type: "INCREASE_INTERVAL"
    }
  }

  export const decreaseInterval = () => {
    return {
        type: "DECREASE_INTERVAL"
    }
  }

  export const resetInterval = () => {
    return {
        type: "RESET_INTERVAL"
    }
  }

  export const logIn = () => {
    return {
      type: "LOG_IN",
    };
  };
  
  export const logOut = () => {
    return {
      type: "LOG_OUT",
    };
  };