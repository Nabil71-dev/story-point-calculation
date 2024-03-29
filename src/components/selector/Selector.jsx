import Alert from "../alert/Alert";
import Options from "./Options";

const Selector = ({ label, options, setState }) => {
    
    if(typeof setState!== "function" || typeof label!== "string" || typeof options!== "object"){
        return <Alert />
    }

    const handleChange = (event) => {
        const value = event.target.value;
        setState(value);
    };

    return (
        <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
            <div className="relative bg-inherit ">
                <label htmlFor="selector" className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 dark:text-gray-300 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">{label ? label : "Type inside me"}</label>

                <select onChange={handleChange} id="selector" className="shadow-xl peer bg-transparent h-12 lg:h-16 w-full rounded-lg placeholder-transparent ring-2 px-2 focus:ring-sky-600 focus:outline-none dark:text-gray-100 dark:bg-gray-900" placeholder="Type inside me">
                    <option disabled selected >Select one</option>
                    {
                        options ? <Options data={options} /> :
                            <option disabled> No options available</option>
                    }
                </select>

            </div>
        </div>
    );
}

export default Selector;