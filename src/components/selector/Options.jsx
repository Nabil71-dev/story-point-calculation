import Alert from "../alert/Alert";

const Options = ({ data }) => {

    if (typeof data !== "object") {
        return <option className="text-red-500"><Alert /> </option>
    }

    return (
        <>
            {
                Object?.keys(data)?.map((key, index) => (
                    <option key={`${index}+data[key]`} value={data[key]}>
                        {key}
                    </option>
                ))
            }
        </>
    );
}

export default Options;