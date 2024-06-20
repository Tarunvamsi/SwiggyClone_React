import UserContext from "../../utils/UserContext";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // You can add any logic here that needs to run after the component mounts
  }

  render() {
    return (
      <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold mb-8">About Us:</h1>
        <h2 className=" p-4 font-semibold  ">Developed and Maintained By</h2>
        <div className="bg-white p-4 rounded-lg shadow-md mb-4">
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-semibold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <UserClass name={"Tarunsdgd Vamsi"} location={"tuni"} />
        </div>
      </div>
    );
  }
}

export default About;
