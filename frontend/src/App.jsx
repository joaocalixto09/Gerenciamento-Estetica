import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "./styles/layout.css";

function App() {

  return (
    <div className="app">
      <Header />

      <div className="main">
        <Sidebar />

        <div className="conyent">
          <h1>Tela de Agendamento</h1>

        </div>
      </div>
    </div>
  );
}

export default App;