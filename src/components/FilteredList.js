function FilteredList(props) {
  const {menu} = props;
  
  return (
    <ul>
      {
        // Loop through the menu list and create <li> element from each item.
        menu.map((element, index) => {
          return (
            <li key={`${element}-${index}`}>
              {element.name}
            </li>
          );
        })
      }
    </ul>
  );
}

export default FilteredList;