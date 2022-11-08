import "./styles.css";
import UseFetchData from "./UseFetchData";
export default function App() {
  const { data, loading } = UseFetchData(
    "https://62bb0520573ca8f83290fcc0.mockapi.io/api/v1/comments"
  );
  const data2 = UseFetchData("https://retoolapi.dev/rTppcV/data").data;
  const loading2 = UseFetchData("https://retoolapi.dev/rTppcV/data").loading;

  console.log("data", data);
  if (loading || loading2) {
    return <h2>Loading....</h2>;
  }

  return (
    <div className="App">
      {data.map((ele, index) => {
        return <li key={ele.id}>{ele.username}</li>;
      })}
      {data2.map((ele, index) => {
        return <li key={ele.id}>{ele.address}</li>;
      })}
    </div>
  );
}
