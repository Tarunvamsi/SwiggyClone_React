import React from "react";
import { Link } from "react-router-dom";

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
    try {
      const data = await fetch("https://api.github.com/users/Tarunvamsi");
      const json = await data.json();
      this.setState({
        userInfo: json,
      });
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }

  render() {
    const { name, location, avatar_url, followers } = this.state.userInfo;
    return (
      <div className="user-card bg-white p-6 rounded-lg shadow-md">
        <img
          src={avatar_url}
          alt="User Avatar"
          className="rounded-full h-32 w-32 mx-auto mb-4"
        />
        <h2 className="text-2xl font-bold text-center mb-2">{name}</h2>
        <h3 className="text-lg text-gray-600 text-center mb-4">
          📍 {location}
        </h3>
        <div className="text-center">
          <Link to="https://x.com/TarunDevlogs">
            <p className="text-sm text-white p-2 bg-red-600">
              🔗 @TarunDevLogs
            </p>
          </Link>
          <p className="text-sm  p-2">GitHub Followers: {followers}</p>
          <p className="bg-green-300 p-2">📞 +91 8919188499</p>
        </div>
      </div>
    );
  }
}

export default UserClass;

// parent constructor , parent render , child constructor , child render , child mount,  child const , child render , child mount , parent mount
