import { useState } from "react";

function App() {
  const [toDo, settoDo] = useState("");
  const onChange = (event) => {
    settoDo(event.target.value);
  };
  return (
    <div>
      <form>
        <input
          onChange={onChange}
          placeholder="Write your to do..."
          type="text"
        ></input>
        <button>Add To Do</button>
      </form>
    </div>
  );
}

export default App;
