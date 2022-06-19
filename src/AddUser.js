import { useState } from "react"


const AddUser = () => {
    const [user, setUser] = useState({
        name: "",
        job: ""
    })

    const handleChange = (e, fieldname) => {
        const temp = user;

        // temp={
        //     name :"",
        //     job:""
        // }
        //if fieldname is name then 
        // temp["name"]=e.target.value
        //if fieldname is job then 
        // temp["job"]=e.target.value
        temp[fieldname] = e.target.value;
        // console.log("temp",temp);

        setUser({ ...temp })
    }


    const handleSubmit = async () => {
        // console.log("user", user);
        //api call to save data in database using api
        const response = await fetch(`https://reqres.in/api/users`, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            body: JSON.stringify(user)
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