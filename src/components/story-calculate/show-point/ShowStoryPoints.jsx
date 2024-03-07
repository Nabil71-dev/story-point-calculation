import RefreshButton from "../../button/RefreshButton";
import { Color } from "../../../service/RandomColor";

const ShowPoints = ({ point }) => {
    
    const refresh=()=>{
        window.location.reload(false);
    }
    return (
        <>
            <div className="bg-white dark:bg-gray-800 p-8 lg:p-12 rounded-lg border-shadow shadow-xl">
                <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">Story point is</h2>
                {point ? <p className={`text-5xl font-bold ${Color[point]}`}>
                    {point}
                </p> : <p className="font-semibold text-red-600">
                    You must select all of the above
                </p>}
                <RefreshButton click={refresh} text="Reset"/>
            </div>

        </>
    );
}

export default ShowPoints;