import { useState, useCallback } from "react";

export default function useInput(initial = "") {
  const [value, setValue] = useState(initial);
  const onChange = useCallback((e) => setValue(e.target.value), []);
  const reset = useCallback(() => setValue(""), []);
  const set = useCallback((v) => setValue(v), []);
  return { value, onChange, reset, set };
}