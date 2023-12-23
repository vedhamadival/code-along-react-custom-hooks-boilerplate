import { useState, useEffect } from "react";

function getSavedValue(key, initialValue, storageType) {
  const savedValue = JSON.parse(storageType.getItem(key));
  if (savedValue) return savedValue;

  if (initialValue instanceof Function) return initialValue();
  return initialValue;
}

export default function useStorage(key, initialValue, storageType = localStorage) {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue, storageType);
  });

  useEffect(() => {
    storageType.setItem(key, JSON.stringify(value));
  }, [value, key, storageType]);

  return [value, setValue];
}