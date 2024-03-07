import { useState, useEffect } from "react";
import StoryInput from "./story-input/StoryInput";
import ShowPoints from "./show-point/ShowStoryPoints";
import { findLargest } from "../../service/MaxOfNums";

const StoryLayout = () => {
    const [task, setTask] = useState();
    const [dependencie, setDependencie] = useState();
    const [effort, setEffort] = useState();
    const [finalPoint, setFinalPoint] = useState(null);

    useEffect(() => {
        if (task || effort || dependencie) {
            const largestNumber = findLargest(task, effort, dependencie);
            setFinalPoint(largestNumber);
        }
    }, [task, effort, dependencie]);


    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full md:w-4/5">
                <StoryInput setTask={setTask} setDependencie={setDependencie} setEffort={setEffort}/>
            </div>

            <div className="mt-2 lg:mt-6 text-center">
                {
                    finalPoint != null ? <ShowPoints point={finalPoint} /> : null
                }
            </div>
        </>
    );
}

export default StoryLayout;