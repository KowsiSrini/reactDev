import { useState } from "react";

const User = (props) => {
  const { name, location } = props;
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Functional comp.</h2>
      <h3>Count : {count}</h3>
      <button
        onClick={() => {
          setCount(count + 1);
        }}>
        Increase
      </button>
      <h3>Name:{name} </h3>
      <h3>Location:{location} </h3>
    </div>
  );
};
export default User;
