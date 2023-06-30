import React from 'react';

function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(true);
  
    React.useEffect(() => {
      const localStorageItem = localStorage.getItem(itemName);
      let parsedItem;
      
      if (localStorageItem) {
        parsedItem = JSON.parse(localStorageItem);
      } else {
        localStorage.setItem("TODOS_V1", JSON.stringify(initialValue));
        parsedItem = initialValue;
      };
    });
  
    const saveItem = (newItem) => {
      localStorage.setItem("TODOS_V1", JSON.stringify(newItem));
      setItem(newItem);
    };
    return {
      item,
      saveItem,
      loading,
      error};
  };

  export { useLocalStorage }