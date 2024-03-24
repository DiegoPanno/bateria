import "./Comentarios.css"
import uno from "./img/comentarioUno.png"
import dos from "./img/comentarioDOS.png"
import tres from "./img/comentariotRES.png"
import { Link } from "react-router-dom"
import { FaRegCommentDots } from "react-icons/fa";
import React from 'react'

const Comentarios = () => {
  return (
    <div className="conte-comentario">
      <h2 className="h2-comentario">Comentarios de clientes</h2>
      <div className="conte-coment-img">
        <div className="comentario-img">
            <img className="img-coment" src={uno} alt="Comentario de google" />
        </div>
        <div className="comentario-img">
            <img className="img-coment" src={dos} alt="Comentario de google" />
        </div>
        <div className="comentario-img">
            <img className="img-coment" src={tres} alt="Comentario de google" />
        </div>
      </div>
      <Link to={"https://g.page/r/Cfn-TKevgW-AEB0/review"} target="_blank"  className="comentar">Comenta <FaRegCommentDots /> </Link>
    </div>
  )
}

export default Comentarios
