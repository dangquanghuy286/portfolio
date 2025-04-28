import { useState } from "react";
import Header from "./layout/Header";

function App() {
  const [menuOpen, isMenuOpen] = useState();
  return (
    <>
      <div className="bg-slate-950 h-screen overflow-x-clip antialiased">
        <Header menuOpen={menuOpen} isMenuOpen={isMenuOpen} />
      </div>
    </>
  );
}

export default App;
