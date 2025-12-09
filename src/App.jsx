
import './App.css';
import Certificado from './pages/certificado/Certificado'
import Registros from './pages/registros/Registros';
import ExportCsv from './pages/exportCsv/ExportCsv';
import BottonNav from './components/bottomNav/BottonNav';
import { Route, Routes } from 'react-router';
import Home from './pages/home/home';
import { useEffect } from "react";
import { supabase } from "./services/supabaseClient";

function App() {

  useEffect(() => {
    async function check() {
      const { data } = await supabase.auth.getUser();
      if (!data.user) window.location.href = "/Login.html";
    }
    check();
  }, []);

  return (
    <>
      <Home />
    </>
  )
}

export default App
