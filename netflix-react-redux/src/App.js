import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./pages/HomeScreen";
import { setMovie } from "./features/slices/movieSlice";
import { useDispatch } from "react-redux";
import axios from "axios";
import requests from "./api/apiRequests";

const App = () => {
  const dispatch = useDispatch();

  const getApiData = async () => {
    try {
      const results = await axios.get(requests.fetchTrending);
      results.data.results.forEach((item, index) => {
        item.uniqueId = Math.random() + index;
      });
      dispatch(setMovie(results.data.results));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getApiData();
  }, []);

  return (
    <>
      <div className="app">
        <HomeScreen />
      </div>
    </>
  );
};

export default App;
