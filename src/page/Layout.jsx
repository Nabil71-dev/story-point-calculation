import DarkModeSwitch from "../components/button/DarkModeSwitch";
import StoryLayout from "../components/story-calculate/StoryLayout";

const Layout = ({ toggleMode }) => {
    return (
        <>
            <div className="flex flex-col h-screen bg-gray-50 dark:bg-gray-900">
                <div className="flex-none text-right">
                    <DarkModeSwitch click={toggleMode} />
                </div>
                <div className="grow flex items-center justify-center flex-col">
                    <div className="w-full md:w-4/5 text-left">
                        <h1 className="font-bold mb-3 lg:mb-5 text-xl ml-4 dark:text-white">Check story points</h1>
                    </div>
                    <StoryLayout />
                </div>
            </div>
        </>
    );
}

export default Layout;