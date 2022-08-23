const counterReducer = (state, action) => {
  if (action.type === "Increment") {
    return { ...state, count: state.count + 1 };
  }
  if (action.type === "Decrement") {
    return { ...state, count: state.count - 1 };
  }
};

export { counterReducer };
