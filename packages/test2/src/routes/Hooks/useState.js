import { useState, useCallback, useEffect, useRef } from "react";

export default function useSetState(initState = {}) {
  const [state, set] = useState(initState);
  const isUpdate = useRef(null);
  const setState = useCallback(
    (nextState, callback) => {
      if (typeof callback === "function") {
        isUpdate.current = callback;
      }
      if (typeof nextState === "function") {
        set((prevState) => ({ ...prevState, ...nextState(prevState) }));
      } else {
        set((prevState) => ({ ...prevState, ...nextState }));
      }
    },
    [set]
  );

  useEffect(() => {
    if (isUpdate.current) {
      isUpdate.current(state);
    }
  }, [state]);

  return [state, setState];
}
