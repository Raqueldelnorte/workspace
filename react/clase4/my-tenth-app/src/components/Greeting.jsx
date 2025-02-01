import UserGreeting from "./UserGreeting";
import SignUp from "./SignUp";

const Greeting = ({ isLoggedIn }) => {
  return isLoggedIn ? <UserGreeting /> : <SignUp />;
};

export default Greeting;
