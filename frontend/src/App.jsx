import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "./styles/layout.css";
import Agendamento from "./pages/Agendamento";

function App() {

  return (
    <div className="app">
      <Header />

      <div className="main">
        <Sidebar />

        <div className="content">
          <Agendamento />
        </div>
      </div>
    </div>
  );
}

export default App;