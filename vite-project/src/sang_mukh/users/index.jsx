import { useEffect, useState } from "react"


const Index = () => {

    const [userList, setUserList] = useState([]);

    const [pending, setPending] = useState(false);

    const fetchAllUsers = async () => {
        try {
            setPending(true);
            const apiResponse = await fetch('http://dummyjson.com/users');
            const result = await apiResponse.json();
            if (result?.users) {
                setUserList(result?.users);    //data is fetched successfully!
                setPending(false);
            }
            else {
                setUserList([]);
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    // const handleFetchListOfUsers = () => {
    //     fetchAllUsers()
    // }
    // useEffect(() => {
    //     fetchAllUsers()
    // }, [])

    if (pending) return <h1>Fetching users!Please wait</h1> //h1 is rendered initially,after this useffect is run.

    return (
        <div>
            <h1>All users list</h1>
            {/* <button onClick={handleFetchListOfUsers}>Fetch Users List</button> */}
            <button onClick={fetchAllUsers}>Fetch Users List</button>
            <ul>
                {
                    userList && userList.length > 0 ?
                        userList.map((userItem) => {
                            return (
                                <li key={userItem?.id}>
                                    <p>{userItem?.firstName} {userItem?.lastName}</p>
                                </li>
                            )
                        }) : <h1>No data found! Please Try again</h1>
                }
            </ul>
        </div>
    )
}

export default Index
