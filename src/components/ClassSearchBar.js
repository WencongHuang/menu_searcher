import React from "react";
import FilteredList from "./FilteredList";
// import debounce from "../functionality/debounce"; // Custom debounce
// import debounce from "lodash.debounce";

class ClassSearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allMenuItem: props.menu,
      newMenuItem: props.menu,
      subString: "",
    }
  }

  // debouncedGetSubString = debounce(
  //   function(){this.getNewMenuItem.call(this)} ,
  //   1000
  // );

  getSubString = (event) => {
    this.setState({ 
      subString : event.target.value 
    },
    this.getNewMenuItem
    // this.debouncedGetSubString
    )
  }

  getNewMenuItem = () => {
    const filteredItem = this.state.allMenuItem.filter(item => {
      console.log(this.state.subString);
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