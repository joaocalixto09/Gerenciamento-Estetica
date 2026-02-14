import "../styles/agendamento.css";


function Agendamento () {
return (
    <div>
        <h1>Agendar Horários</h1>

        <div className="form-container">

            <div className="from-group">
                <label>Serviço</label>
          <select>
            <option>Selecione um serviço</option>
            <option>Corte de Cabelo</option>
            <option>Barba</option>
            <option>Corte + Barba</option>
          </select>
            </div>

            <div className="form-group">
          <label>Profissional</label>
          <select>
            <option>Selecione um profissional</option>
            <option>João</option>
            <option>Carlos</option>
          </select>
        </div>

        <div className="form-group">
          <label>Data</label>
          <input type="date" />
        </div>

        <div className="form-group">
          <label>Horário</label>
          <input type="time" />
        </div>

        <button className="btn-primary">
          Confirmar Agendamento
        </button>


        </div>

    </div>
);

}

export default Agendamento;