import { useState, useEffect } from "react";
import StoryInput from "./story-input/StoryInput";
import ShowStoryPoints from "./show-point/ShowStoryPoints";
import { findLargest } from "../../utils/maxOfNum";

const StoryLayout = () => {
    const [task, setTask] = useState();
    const [dependency, setDependency] = useState();
    const [effort, setEffort] = useState();
    const [finalPoint, setFinalPoint] = useState(null);

    useEffect(() => {
        if (task || effort || dependency) {
            const largestNumber = findLargest(task, effort, dependency);
            setFinalPoint(largestNumber);
        }
    }, [task, effort, dependency]);


    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full md:w-4/5">
                <StoryInput setTask={setTask} setDependency={setDependency} setEffort={setEffort}/>
            </div>

            <div className="mt-2 lg:mt-6 text-center">
                {
                    finalPoint != null ? <ShowStoryPoints point={finalPoint} /> : null
                }
            </div>
        </>
    );
}

export default StoryLayout;