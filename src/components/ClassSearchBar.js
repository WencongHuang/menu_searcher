import React from "react";
import FilteredList from "./FilteredList";
import debounce from "../functionality/debounce"; // Custom debounce
// import throttle from "../functionality/throttle"; // Custom throttle

class ClassSearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allMenuItem: [],  // use to keep all the item
      newMenuItem: [],  // use to keep the filtered item
      subString: "",
    }
  }

  componentDidMount() {
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
        this.setState({
          ...this.state,
          allMenuItem: data,
          newMenuItem: data,
        });
      })
      .catch(() => {
        console.log("Something went wrong when fetch the data!");
      })
  }

  // Use a custom debounce function to get input from the search bar with a delay.
  debouncedGetSubString = debounce(
    () => this.getNewMenuItem(),
    1000
  );
  
  // Get input from the search bar and change its state.
  // Call the debounce function to change the newMenuItem.
  getSubString = (event) => {
    this.setState({ 
      subString : event.target.value 
    },
    // Uncomment the line below this if we don't want debounce.
    // this.getNewMenuItem
    )
    this.debouncedGetSubString();
  }

  // Function that filter item based on the subString from allMenuItem and update the newMenuItem.
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
        <input 
          type="text" 
          placeholder="ClassSearch..." 
          onChange={this.getSubString}
        />
        <FilteredList menu={this.state.newMenuItem}/>
      </>
    );
  }
}

export default ClassSearchBar;