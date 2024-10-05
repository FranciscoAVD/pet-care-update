import { useEffect, useState } from "react";

export function useDebounce<T>(value: T, delay = 500):[debounce:T,loading:boolean] {
  const [loading, setLoading] = useState(false);
  const [debounce, setDebounce] = useState(value);
  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setDebounce(value);
      setLoading(false);
    }, delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return [debounce, loading];
}