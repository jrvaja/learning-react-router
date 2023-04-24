import React from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const programaticallyNavigateHandler = () => {
    navigate("products");
  };
  return (
    <>
      <h1>Home Page</h1>
      <button onClick={programaticallyNavigateHandler}>
        programmaticallyNavigateHandler
      </button>
    </>
  );
};

export default Home;
