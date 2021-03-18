import Welcome from "./componetns/Welcome";


function App() {
  return (
    <div className="App">
      <Welcome 
        library="React" 
        message="Have fun"
        number={3}
      ></Welcome>
    </div>
  );
}

export default App;
