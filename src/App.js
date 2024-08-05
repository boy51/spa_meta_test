import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to="subroute">Subroute</Link>
        <Outlet />
      </header>
    </div>
  );
}

export default App;
