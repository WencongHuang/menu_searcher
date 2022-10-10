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
      <FuncSearchBar menu={menuData}/>
      <ClassSearchBar menu={menuData}/>
    </div>
  );
}

export default App;
