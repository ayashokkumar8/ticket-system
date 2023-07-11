// Import third parts.
import { useState, useCallback } from "react";

// flag hook for update state for boolean.
export const useFlag = (): [boolean, () => void] => {
  const [flag, setFlag] = useState<boolean>(false);

  const toggleFlag = useCallback(() => {
    setFlag((flag) => !flag);
  }, []);

  return [flag, toggleFlag];
};

export default useFlag;
