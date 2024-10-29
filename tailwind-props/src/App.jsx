import "./App.css";
import Card from "./components/card";

function App() {
  return (
    <>
      <h1 className="bg-green-400 to-black p-4 rounded-xl mb-6">
        Tailwind test
      </h1>
      <Card username="chaiurcode" btnText="click me"/>
      <Card username="Ammar" />
    </>
  );
}

export default App;
