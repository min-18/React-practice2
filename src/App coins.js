import { useState, useEffect } from "react";

function App() {
  // 로딩페이지를 컨트롤 하기 위해
  const [loading, setLoading] = useState(true);
  // 코인들의 정보를 담기 위한 Array
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    // fetch는 대표적인 비동기함수인데, API로부터 받아온 정보를 사용할 필요가 있는 경우에 .then함수를 써서 작동이 끝날 때까지 멈춰놓을 수 있다.
    fetch("https://api.coinpaprika.com/v1/tickers")
      // response 중 json 받음.
      .then((response) => response.json())
      .then((json) => {
        // api에서 받은 json 정보를 state걸린 coins 변수에 담음. ; 나중에 뽑아쓰자.
        setCoins(json);
        // 로딩하는 페이지에서 넘어가기 위해 state로 변수값 변경.
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>Coin List! ({coins.length})</h1>
      {loading ? <strong>Loading...</strong> : null}
      {/* coins 배열에 담긴 element들 하나씩 가공하기 위해 map 사용 */}
      <ul>
        {/* map으로 하나씩 뽑아내는 element는 coin 의미 */}
        {coins.map((coin) => (
          <li>
            {/* js 쓰려면 중괄호 해줘야한다! */}
            {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
