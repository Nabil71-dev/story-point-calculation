import RefreshButton from "../../button/RefreshButton";
import { Color } from "../../../utils/randomColor";
import Alert from "../../alert/Alert";

const ShowStoryPoints = ({ point }) => {
    
    if(typeof point!== "number"){
        return <Alert />
    }

    const handleRefresh = () => {
        window.location.reload(false);
    }

    return (
        <div className="bg-white dark:bg-gray-800 px-12 py-4 lg:py-12 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <h2 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Story point is</h2>

            {
                point ? <p className={`text-3xl font-bold ${Color[point]}`}>
                    {point}
                </p> : <p className="font-semibold text-red-600">
                    You must select all of the above
                </p>
            }

            <RefreshButton handleClick={handleRefresh} text="Reset" />
        </div>
    );
}

export default ShowStoryPoints;