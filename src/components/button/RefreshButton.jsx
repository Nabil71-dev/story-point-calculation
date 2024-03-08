import Alert from "../alert/Alert";

const RefreshButton = ({ handleClick, text }) => {

    if(typeof handleClick!== "function" || typeof text!== "string"){
        return <Alert />
    }

    return (
        <button onClick={handleClick} className="bg-transparent mt-5 hover:bg-sky-500 dark:text-white font-semibold hover:text-white py-1 px-4 border border-sky-500 hover:border-transparent rounded-xl">
            {text || "Refresh"}
        </button>
    );
}

export default RefreshButton;