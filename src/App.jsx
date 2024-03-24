import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AutoPickups from "./component/AutoPickups/AutoPickups";
import LineaAsiatica from "./component/LineaAsiatica/LineaAsiatica"
import Home from "./Home/Home";
import LineaPesada from "./component/LineaPesada/LineaPesada";
import PequenosTractores from "./component/PequenosTractores/PequenosTractores";
import LineaEFB from "./component/LineaEFB/LineaEFB";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/auto-pickups" Component={AutoPickups} />
          <Route path="/linea-asiatica" Component={LineaAsiatica} />
          <Route path="/linea-pesada" Component={LineaPesada} />
          <Route path="/pequenos-tractores" Component={PequenosTractores} />
          <Route path="/linea-efb" Component={LineaEFB} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
