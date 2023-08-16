import { useState, useEffect } from "react";
import { fetchDataFromApi } from "./utils/api";
function App() {
  useEffect(() => {
    ApiTesting();
  }, []);
  const ApiTesting = () => {
    fetchDataFromApi(`/movie/popular`).then((res) => {
      console.log(res);
    });
  };
  return (
    <>
      <div className="App">App</div>
    </>
  );
}

export default App;
