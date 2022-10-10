import React from "react";
import FilteredList from "./FilteredList";
import debounce from "../functionality/debounce"; // Custom debounce

class ClassSearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allMenuItem: props.menu,
      newMenuItem: props.menu,
      subString: "",
    }
  }

  debouncedGetSubString = debounce(
    () => this.getNewMenuItem(),
    1000
  );

  getSubString = (event) => {
    this.setState({ 
      subString : event.target.value 
    },
    // Uncomment the line below this if we don't want debounce.
    // this.getNewMenuItem
    )
    this.debouncedGetSubString();
  }

  getNewMenuItem = () => {
    const filteredItem = this.state.allMenuItem.filter(item => {
      if (this.state.subString === "") {
        return item;
      }
      return item.name.toLowerCase().includes(this.state.subString.toLowerCase());
    });

    this.setState(prevState => ({
      ...prevState,
      newMenuItem: filteredItem,
    }));
  }

  render() {
    return (
      <>
        <input type="text" placeholder="Search..." onChange={this.getSubString}/>
        <FilteredList menu={this.state.newMenuItem}/>
      </>
    );
  }
}

export default ClassSearchBar;