const RefreshButton = ({click,text}) => {
    return (
        <button onClick={click} className="bg-transparent mt-5 hover:bg-sky-500 dark:text-white font-semibold hover:text-white py-1 px-4 border border-sky-500 hover:border-transparent rounded-xl">
           {text ? text : "Refresh"}
        </button>
    );
}

export default RefreshButton;