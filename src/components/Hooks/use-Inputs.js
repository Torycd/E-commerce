import { useReducer } from "react";
const initialstate = {
  value: "",
  isTouched: false,
};

const inutStatereducer = (state, action) => {
  if (action.type === "ADD") {
    return {
      value: action.value,
      isTouched: state.isTouched,
    };
  }
  if (action.type === "BLUR") {
    return {
      isTouched: true,
      value: state.value,
    };
  }
  if (action.type === "RESET") {
    return {
      value: "",
      isTouched: false,
    };
  }
  return initialstate;
};

const useInputs = (validateValue) => {
  const [InputState, dispatcher] = useReducer(inutStatereducer, initialstate);
  const valueIsValid = validateValue(InputState.value);
  const hasError = !valueIsValid && InputState.isTouched;

  const valueChangeHandler = (event) => {
    dispatcher({ type: "ADD", value: event.target.value });
  };
  const inputBlurHandler = (event) => {
    dispatcher({ type: "BLUR" });
  };
  const reset = (event) => {
    dispatcher({ type: "RESET" });
  };

  return {
    value: InputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInputs;
