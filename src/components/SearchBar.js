import React, { useState, useMemo } from "react";
import FilteredList from "./FilteredList";
import debounce from "lodash.debounce";

function SearchBar(props) {
  const { menu } = props;
  const [subString, setSubString] = useState("");

  const getSubString = (event) => {
    setSubString(event.target.value);
  };

  const debounceGetSubString = useMemo(
    () => debounce(getSubString, 1000),
    []
  );

  const newMenuItem = menu.filter((item) => {
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
