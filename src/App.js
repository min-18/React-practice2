import { useState } from "react";

function App() {
  const [toDo, settoDo] = useState("");
  // toDo 들이 담길 Array
  const [toDos, settoDos] = useState([]);
  const onChange = (event) => {
    settoDo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    // toDos 배열을 업데이트하기 위한 함수 ; 함수형태로 현재 state를 받아와 거기에다 업데이트
    // ... 은 배열안의 element들만 가져오는 방법
    settoDos((currentArray) => [toDo, ...currentArray]);
    // state 를 직접 수정하지 않고 state를 변경하는 함수를 통해 수정 ; reset 되도록
    settoDo("");
  };
  return (
    <div>
      <h1>To Do List ({toDos.length})</h1>
      {/* form 태그 안의 하나있는 버튼이 클릭되면 onSubmit 함수 실행 */}
      <form onSubmit={onSubmit}>
        <input
          value={toDo}
          onChange={onChange}
          placeholder="Write your to do..."
          type="text"
        ></input>
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {/* map 은 하나의 array에 있는 item을 내가 원하는 거로 바꿔주는 역할 */}
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

// 느끼기에 react
