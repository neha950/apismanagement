import { useState } from "react"


const AddUser = () => {
    const [user, setUser] = useState({
        name: "",
        job: ""
    })

    const handleChange = (e, fieldname) => {
        const temp = user;
        temp[fieldname] = e.target.value;
        // console.log("temp",temp);

        setUser({ ...temp })
    }


    const handleSubmit = async () => {
        console.log("user", user);
        const response = await fetch(`https://reqres.in/api/users`, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            body: JSON.stringify(user) // body data type must match "Content-Type" header
        });

        console.log("response from api", response)
        if (response.status === 201) {
            alert("Successfully added data")
        }
        else {
            alert("Something went wrong")
        }


    }

    return (
        <div>
            <h1>Add User</h1>
            <label>NAME:</label> <br />
            <input onChange={(e) => handleChange(e, "name")} type="text" /> <br />

            <label>JOB:</label> <br />
            <input onChange={(e) => handleChange(e, "job")} type="text" /> <br />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}
export default AddUser