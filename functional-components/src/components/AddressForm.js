import { useState } from "react";

function AddressForm(){
    const [data, setData] = useState(
        {
            address1: "",
            address2: "",
            zip: "",
            city: "",
            state: "",
            country: "",
        }
    );

    const onChange = (key) => (event) => {
        setData(
            (oldData) => {
                return ({...oldData, [key]: event.target.value})
            }
        );
    };
    
    return (
        <form style={{display: "flex", flexDirection: "column", width: "350px", margin: "auto"}}>
            <label>
                Address line 1:
            </label>
            <input type="text" onChange={onChange("address1")} value={data.address1} />
            <label>
                Address line 2:
            </label>
            <input type="text" onChange={onChange("address2")} value={data.address2} />
            <label>
                Zip:
            </label>
            <input onChange={onChange("zip")} value={data.zip} />
            <label>
                City:
            </label>
            <input onChange={onChange("city")} value={data.city} />
            <label>
                State:
            </label>
            <input onChange={onChange("state")} value={data.state} />
            <label>
                Country:
            </label>
            <input onChange={onChange("country")} value={data.country} />

        </form>
    )
}

export default AddressForm;