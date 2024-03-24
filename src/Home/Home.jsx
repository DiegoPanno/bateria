import Carrusel from "../component/Carrusel/Carrusel";
import Cuerpo from "../component/Cuerpo/Cuerpo";
import Header from "../component/Header/Header";
import NavBar from "../component/NavBar/NavBar";
import "../App.css";
import Footer from "../component/Footer/Footer";
import Auxilio from "../component/Auxilio/Auxilio";
import Comentarios from "../component/Comentarios/Comentarios";
import Clientes from "../component/Clientes/Clientes";


function Home() {
  return (
    <>
      <nav className="nav-app-conte">
        <NavBar />
        <Header />
      </nav>
      <main>
        <Carrusel />
        <Cuerpo />
        <Auxilio />
        <Comentarios />
         <Clientes />
      </main>
      <Footer />
    </>
  );
}

export default Home;
