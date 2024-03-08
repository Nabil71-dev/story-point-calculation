import { useEffect, useState } from "react"
import Layout from "./page/Layout"

function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const savedMode = localStorage?.getItem("mode") === "true";
    setDark(savedMode);
  }, []);

  const handleToggleMode = () => {
    setDark(!dark);
    localStorage?.setItem('mode', !dark);
  }

  return (
    <div className={`${dark ? "dark" : ""}`}>
        <Layout handleToggleMode={handleToggleMode} />
    </div >
  )
}

export default App;
