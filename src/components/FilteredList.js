function FilteredList(props) {
  const {menu} = props;
  
  return (
    <ul>
      {
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