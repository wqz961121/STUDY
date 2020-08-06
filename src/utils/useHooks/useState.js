import { useState, useCallback } from "react";

// 封装setState
export default function useSetState(initialState = {}) {
  const [state, set] = useState(initialState);
  const setState = useCallback(
    (newState) => {
      set((prevState) => ({ ...prevState, newState }));
    },
    [set]
  );
  return [state, setState];
}
