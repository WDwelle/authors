import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useHistory, useParams } from 'react-router-dom';

const Update = (props) => {

    let history = useHistory();

    const { id } = useParams();

    const [name, setName] = useState("");
    const [isSet, setIsSet] = useState(false);
    useEffect(() => {
        axios.get("http://localhost:8000/api/authors/" + id)
            .then(res => {
                console.log(res.data.author);
                setName(res.data.author.name);
                setIsSet(true);
            })
            .catch(err => console.log(err))
    }, [isSet])


    const update = (e) => {
        e.preventDefault();

        // create the obj from the form
        const newAuthor = {
            name: name
        }

        axios.put("http://localhost:8000/api/authors/" + id, newAuthor)
            .then(res => {
                console.log(res.data);
                console.log("SUCCESS");
                history.push("/")
            })
            .catch(err => {
                console.log("ERROR");
                console.log(err);
            })
    }

    return <div>
        <h3>UPDATE</h3>
        <Link to="/authors">Home</Link>
        <form onSubmit={update}>
            name:
            <input type="text" onChange={e => setName(e.target.value)} value={name} />
        </form>
    </div>;
};

export default Update;