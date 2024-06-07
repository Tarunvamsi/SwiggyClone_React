import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "default",
        avatar_url: "http://dummy-photo.com",
        followers: "1000",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Tarunvamsi");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }
  render() {
    const { name, location, avatar_url, followers } = this.state.userInfo; // destructuring
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3> Location : {location}</h3>
        <h4>Contact : @TarunDevLogs</h4>
        <h2> followers: {followers}</h2>
      </div>
    );
  }
}

export default UserClass;

// parent constructor , parent render , child constructor , child render , child mount,  child const , child render , child mount , parent mount
