import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetails = () => {
    const { friendId } = useParams()
    const [friendDetails, setFriendDetails] = useState([]);
    
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data.address.city)
                return setFriendDetails(data)
                  

            });

    }, [])
    const { name, email } = friendDetails;
    // console.log(friendDetails.address.city);

    // const { street, suite, city } = friendDetails.address;

    const detailsStyle = {
        width: '40%',
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center',
        border: '1px solid tomato',
        padding: '20px',
        borderRadius: '10px'
    }

    return (
        <div style={detailsStyle}>
            <h2>This is:  {name}</h2>
            <p>Email: {email}</p>
            {/* <p>Company Name: {friendDetails.company.name}</p> */}
            {/* <p>Street: {street}</p>
            <p>Suite: {suite}</p>
            <p>City: {city}</p> */}
        </div>
    );
};

export default FriendDetails;