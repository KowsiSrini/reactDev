import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    const { name, location } = this.props;
    const { count } = this.state;
    return (
      <div>
        <h2>Class comp.</h2>
        <h3>Count: {count}</h3>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}>
          Increase
        </button>
        <h3>Name : {name}</h3>
        <h3>Location: {location}</h3>
      </div>
    );
  }
}

export default UserClass;
