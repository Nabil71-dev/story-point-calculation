import DarkSwitch from "../../assets/DarkSwitch";
import LightSwitch from "../../assets/LightSwitch";
import Alert from "../alert/Alert";

const ToggleTheme = ({ handleClick }) => {

    if (typeof handleClick !== "function") {
        return <Alert />
    }

    return (
        <button onClick={handleClick} className="h-12 w-12 lg:h-16 lg:w-16 rounded-lg p-2">
            <DarkSwitch />
            <LightSwitch />
        </button>
    );
}

export default ToggleTheme;