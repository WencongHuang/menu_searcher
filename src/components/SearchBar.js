import React, { useState, useMemo } from "react";
import FilteredList from "./FilteredList";
import debounce from "lodash.debounce";

function SearchBar(props) {
  const { menu } = props;
  const [subString, setSubString] = useState("");

  // Get the input from the search bar.
  const getSubString = (event) => {
    setSubString(event.target.value);
  };

  // Debounce, or get input from search bar with a delay.
  const debounceGetSubString = useMemo(
    () => debounce(getSubString, 1000),
    []
  );
  
  // Gets the new list of menu item based on the input from the search bar.
  const newMenuItem = menu.filter((item) => {
    // If the search bar has no input, return all items.
    if (subString === "") {
      return item;
    }
    return item.name.toLowerCase().includes(subString.toLowerCase());
  });

  return (
    // Use a Fragment to group the element together
    <>
      <input
        type="text"
        placeholder="Search..."
        onChange={debounceGetSubString}
      />
      <FilteredList menu={newMenuItem} />
    </>
  );
}

export default SearchBar;
