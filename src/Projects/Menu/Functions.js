import axios from "axios";
import { useEffect, useState } from "react";

const Functions = () => {
    const [data, setdata] = useState([]);
    useEffect(() => {
      axios
        .get("https://6745bf1a512ddbd807f974fc.mockapi.io/menu")
        .then((response) => {
          setdata(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    });
    return(data);
};

export{Functions}