import { useEffect, useState } from "react"
import Layout from "./page/Layout"

function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("mode");
    setDark(savedMode === "true");
  }, []);

  const toggleMode = () => {
    setDark(!dark);
    localStorage.setItem('mode', !dark);
  }

  return (
    <div className={`${dark ? "dark" : ""}`}>
      <Layout toggleMode={toggleMode}/>
    </div >
  )
}

export default App;
