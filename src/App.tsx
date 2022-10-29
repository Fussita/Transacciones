
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import './App.css';
import MenuAddTrans from "./Transacciones/addTrans";
import MenuModTrans from "./Transacciones/modTrans";
import MenuDelTrans from "./Transacciones/removeTrans";

function Home() {
  const nav = useNavigate();
  const goAdd = () => { nav('/menuAdd') };
  const goDel = () => { nav('/menuDel') };
  const goMod = () => { nav('/menuMod') };

  const msgHome = " Para poder registrar transacciones debe de haber registrado una cuenta bancaria previamente"

  return (
    <div className ="bg">
    <div className="mainHome">
      <h1>Transacciones</h1>
      <h4> { msgHome } </h4> <br/>
      <button className="glow-button" onClick={ goAdd }> Añadir Transaccion </button> 
      <button className="glow-button" onClick={ goMod }> Modificar Transaccion </button>
      <button className="glow-button" onClick={ goDel }> Eliminar Transaccion </button>
      <br/>
      <button className="glow-button"> Regresar al Menu Principal </button>
    </div>
    </div>
  );
}

const Err = () => <div> <h1>Error - Page not Found</h1> </div>;

export default function App() {
  return (       
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/menuAdd" element={ <MenuAddTrans/> } />
        <Route path="/menuMod" element={ <MenuModTrans/> } />
        <Route path="/menuDel" element={ <MenuDelTrans/> } />
        <Route path="*" element={ <Err/> } />
      </Routes>
    </BrowserRouter>
  );
}
