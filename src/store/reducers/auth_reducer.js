const initiaState = {
  value: 1,
  value2:2
};

const reducer = (state = initiaState, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, value: state.value + 1 };
      break;
    case "SUB":
      return { ...state, value: state.value - 1 };
      break;
    default:
      return state;
  }
};

export default reducer;
