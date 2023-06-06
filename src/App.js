import logo from "./logo.svg";
import "./App.css";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import debounce from "lodash/debounce";

function App() {
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState([])
  const [inputChange, setInputChange] = useState();

  const getSuggestions = async(word) => {
    if(word) {
      setLoading(true);
      // let response = 
    }
  };

  const sendRequest = useCallback((value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log("res", res);
        return res.json();
      })
      .then((result) => {
        console.log(result, value);
        return [result, value];
      });
  }, []);

  const debounceSendRequest = useMemo(() => {
    return debounce(sendRequest, 3000);
  }, [sendRequest]);

  const onChangeHandler = (e) => {
    setInputChange(e.target.value);
    // setTimeout(() => {
    //   // apiFetching();
    // }, 3000);
    debounceSendRequest(e.target.value);
  };

  return (
    <div className="App">
      <input type="text" name="search" onChange={onChangeHandler} />
    </div>
  );
}

export default App;
