import {useState, useEffect} from "react";

function RemoteDropDown(){
    const [options, setOption] = useState([]);

    useEffect(
        () => {
            fetch("https://www.swapi.tech/api/people")
            .then((result) => result.json())
            .then((data) => data.results)
            .then((characters) => characters.map(({ name }) => name))
            .then((names) => setOption(names));
        }, [options] );
    return (
        <select>
            {
                options.map((option) => <option key={option}>{option}</option>)
            }
        </select>
    );
}

export default RemoteDropDown;