import Tasks from '../../../constant/task';
import Dependencies from '../../../constant/dependency';
import Efforts from '../../../constant/effort';
import Selector from "../../selector/Selector";
import Alert from '../../alert/Alert';

const StoryInput = ({ setDependency, setTask, setEffort }) => {

    if(typeof setDependency!== "function" || typeof setTask!== "function" || typeof setEffort!== "function"){
        return <Alert />
    }

    return (
        <>
            <Selector label="How much is known about the task" options={Tasks} setState={setTask} />
            <Selector label="Dependencies" options={Dependencies} setState={setDependency} />
            <Selector label="How much work effort" options={Efforts} setState={setEffort} />
        </>
    );
}

export default StoryInput;