import { useState, useEffect } from "react";

export const useDebounce = (value, delay) => {
  // setting search value in debouncevalue varibale
  const [debounceValue, setDebounceValue] = useState("");

  useEffect(() => {
    const handle = setTimeout(() => {
      setDebounceValue(value);
    }, delay);


    return () => {
      clearTimeout(handle);
    };
  }, [value, delay]);

  return debounceValue;
};