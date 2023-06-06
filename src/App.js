import logo from "./logo.svg";
import "./App.css";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import debounce from "lodash/debounce";

function App() {
  const [inputChange, setInputChange] = useState();

  const sendRequest = useCallback((value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        // console.log(result);
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
