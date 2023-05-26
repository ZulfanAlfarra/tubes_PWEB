import React from "react";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Beranda from "./component/Beranda";
import Login from "./component/Login";
import Register from "./component/Register";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Kegiatan from "./component/Kegiatan";
import Zakat from "./component/Zakat/Zakat";
import Bayar from "./component/Zakat/Bayar";
import Muzakki from "./component/Zakat/Muzakki";
import Laporan from "./component/Zakat/Laporan";
import { AuthContext } from "./helpers/AuthContext";
import { useState, useEffect } from "react";
import Mustahik from "./component/Zakat/Mustahik";
import MuzakkiUpdate from "./component/update/MuzakkiUpdate";
import DistribusiUpdate from "./component/update/DistribusiUpdate";
import KatMustahik from "./component/Zakat/KatMustahik";

function App() {
  const [authState, setAuthState] = useState(false);

  useEffect(() => {
    // axios
    //   .get("http://localhost:3001/auth", {
    //     headers: { accessToken: localStorage.getItem("acccessToken") },
    //   })
    //   .then((Response) => {
    //     if (Response.data.error) {
    //       setAuthState(false);
    //     } else {
    //       setAuthState(true);
    //     }
    //   });
    if (localStorage.getItem("accessToken")) {
      setAuthState(true);
    }
  }, []);

  return (
    <div className="bg-[rgb(249,247,247)]">
      <AuthContext.Provider value={{ authState, setAuthState }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Beranda />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/kegiatan" element={<Kegiatan />} />
            <Route path="/kegiatan/zakat" element={<Zakat />} />
            <Route path="/kegiatan/zakat/bayar" element={<Bayar />} />
            <Route path="/kegiatan/zakat/muzakki" element={<Muzakki />} />
            <Route path="/kegiatan/zakat/kat" element={<KatMustahik />} />
            <Route
              path="/kegiatan/zakat/muzakki/update/:id"
              element={<MuzakkiUpdate />}
            />
            <Route path="/kegiatan/zakat/distribusi" element={<Mustahik />} />
            <Route
              path="/kegiatan/zakat/distribusi/update/:id"
              element={<DistribusiUpdate />}
            />
            <Route path="/kegiatan/zakat/laporan" element={<Laporan />} />
          </Routes>
          <Footer />
        </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
