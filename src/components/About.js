import UserClass from "./UserClass";
import User from "./User";
const About = () => {
  return (
    <div className="about">
      About
      <User name={"Kowsi"} location={"chennai"} />
      <UserClass name={"Kowsi"} location={"chennai"} />
    </div>
  );
};
export default About;
