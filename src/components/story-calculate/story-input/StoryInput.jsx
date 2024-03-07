import { Tasks } from '../../../dropDown-data/task';
import { Dependencies } from '../../../dropDown-data/dependencies';
import { Efforts } from '../../../dropDown-data/effort';
import Selector from "../../selector/Selector";

const StoryInput = ({ setDependencie, setTask, setEffort }) => {
    return (
        <>
            <Selector label="How much is known about the task" options={Tasks} setState={setTask} />
            <Selector label="Dependencies" options={Dependencies} setState={setDependencie} />
            <Selector label="How much work effort" options={Efforts} setState={setEffort} />
        </>
    );
}

export default StoryInput;