import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: ""
    };
  }

  onChange = e => {
    this.setState({
      userInput: e.target.value
    });
    this.props.onChange(e.target.value);
  };

  render() {
    const { list } = this.props;
    const { userInput } = this.state;

    const orderedList = list.filter(dataFilter => {
      return (
        dataFilter.name.toLowerCase().indexOf(userInput.toLowerCase()) !== -1
      );
    });

    return (
      <div className="search">
        <form>
          <input
            className="searchBar"
            type="text"
            value={userInput}
            onChange={this.onChange}
            placeholder="Type a name..."
          />
        </form>
        <div className="results">
          {userInput &&
            orderedList.map(oneName => {
              return (
                <p className="p-results" key={oneName.id}>
                  {" "}
                  {oneName.name}
                </p>
              );
            })}
        </div>
      </div>
    );
  }
}

export default Search;
