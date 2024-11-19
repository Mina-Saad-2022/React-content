import { useEffect, useState } from "react";

const Custom = () => {

  const [state, setState] = useState([]);
  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/todos/",{
        method:'Get'
    })
      .then((response) => response.json())
      .then((data) => data(setState));
  }, []);
    
  return state;
};

export { Custom };
