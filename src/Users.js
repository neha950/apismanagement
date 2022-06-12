import { useEffect, useState } from "react"

const Users = () => {

    const [usersList, setUsersList] = useState([]);

    useEffect(() => {
        getUser()
    }, [])

    const getUser = () => {
        const apiUrl = `https://reqres.in/api/users`;

        fetch(apiUrl).then((result) => {
            result.json().then((response) => {
                // console.log("response from api", response)

                setUsersList([...response.data])
            })
        })

    }

    console.log("usersList", usersList)



    return (
        <div>
            <h4>My Users</h4>
            <table>
                <tr>
                    <th>Image</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                </tr>
                
                {
                    usersList.map((userItem, i) => (
                        <tr>
                            <td><img src={userItem.avatar} /></td>
                            <td>{userItem.first_name}</td>
                            <td>{userItem.last_name}</td>
                            <td>{userItem.email}</td>
                        </tr>
                    ))
                }
            </table>

        </div>
    )
}

export default Users