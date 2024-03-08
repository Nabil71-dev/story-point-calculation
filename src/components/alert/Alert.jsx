const Alert = () => {
    return (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Wait!</strong> <br />
            <span className="block sm:inline">Wrong prop type sent.</span>
        </div>
    );
}

export default Alert;