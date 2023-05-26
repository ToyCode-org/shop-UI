import { useState } from "react";

export const useBooleanHandler = () => {
  const [isTrue, setIsTrue] = useState(false);
  const booleanHandler = (bool: boolean) => {
    setIsTrue(bool);
  };
  return {
    isTrue,
    handler: booleanHandler,
  };
};
