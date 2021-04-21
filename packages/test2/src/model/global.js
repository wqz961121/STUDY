import theme from '../../config/theme';

const defaultState = {
  name: "qq",
  age: 18,
  sex: "male",
  theme,
};
export default (state = defaultState, action) => {
  switch (action.type) {
    case "global/update":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
