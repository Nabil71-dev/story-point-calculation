import Dark from "../../assets/DarkSwitch";
import Light from "../../assets/LightSwitch";

const DarkModeSwitch = ({ click }) => {
    return (
        <button onClick={() => click()} className="h-12 w-12 lg:h-16 lg:w-16 rounded-lg p-2">
            <Dark />
            <Light />
        </button>
    );
}

export default DarkModeSwitch;