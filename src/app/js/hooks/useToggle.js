import { useCallback, useState } from "react";

const useToggle = (defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  const toggle = useCallback(() => setValue((prev) => !prev), []);

  return { value, toggle, setValue };
};

export default useToggle;

