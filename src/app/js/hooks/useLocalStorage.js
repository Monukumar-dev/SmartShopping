import { useState, useEffect } from 'react';

const useLocalStorage = (key, initialValue) => {
  // State to store the value
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get the value from local storage by key
      const item = window.localStorage.getItem(key);

      // Parse JSON if it's a string
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // Return initialValue on errors
      console.error('Error retrieving data from localStorage:', error);
      return initialValue;
    }
  });

  // Function to set the value in local storage and update state
  const setValue = (value) => {
    try {
      // Allow value to be a function so it can be executed on subsequent reads
      const newValue = value instanceof Function ? value() : value;

      // Set the value in local storage
      window.localStorage.setItem(key, JSON.stringify(newValue));

      // Update state to trigger component re-renders
      setStoredValue(newValue);
    } catch (error) {
      // Log errors but don't throw to prevent crashes
      console.error('Error saving data to localStorage:', error);
    }
  };

  // Remove the item from local storage
  const removeItem = () => {
    try {
      window.localStorage.removeItem(key);
      setStoredValue(undefined);
    } catch (error) {
      console.error('Error removing item from localStorage:', error);
    }
  };

  return [storedValue, setValue, removeItem];
};

export default useLocalStorage;
