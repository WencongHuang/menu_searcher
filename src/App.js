import React, { useEffect, useState } from 'react';
import FuncSearchBar from './components/FuncSearchBar';
import ClassSearchBar from './components/ClassSearchBar';
import './App.css';

function App() {
  const [menuData, setMenuData] = useState([]);

  // Fetch data from the API
  useEffect(() => {
    fetch("https://stream-restaurant-menu-svc.herokuapp.com/item")
      .then(response => {
        // If successfully gets the data, return the data.
        // Else, throw an error.
        if(response.ok) {
          return response.json();
        }
        throw response;
      })
      //  Store the fetched data into menuData as an array.
      .then(data => {
        setMenuData(data);
      })
      .catch(() => {
        console.log("Something went wrong when fetch the data!");
      })
  });

  return (
    <div className="App">
      <p>
        Debouncing and Throttling are two different ways that we can prevent a function from running in multiple instances at the same time.
      </p>
      <p>
        If we decide to delay the first process for a given amount of time to see if our user wants to type something else, so that if they do, we’ll cancel the first one and then work on the second instead, that would be debouncing.
      </p>
      <p>
        If we decide to prevent the second process from happening by making sure that our function can only run once in a given interval, that would be throttling.
      </p>
      <FuncSearchBar menu={menuData}/>
      <ClassSearchBar />
    </div>
  );
}

export default App;
