import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useHistory, useParams } from 'react-router-dom';

const Update = (props) => {

    let history = useHistory();

    const { id } = useParams();

    const [name, setName] = useState("");
    const [isSet, setIsSet] = useState(false);

    const [errors, setErrors] = useState([]); 

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors/" + id)
            .then(res => {
                console.log(res.data.Author);
                setName(res.data.Author.name);
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
            .catch(err=>{
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
    }

    return <div>
        <h3>UPDATE</h3>
        {errors.map((err, index) => <p key={index}>{err}</p>)}
        <Link to="/authors">Home</Link>
        <form onSubmit={update}>
            name:
            <input type="text" onChange={e => setName(e.target.value)} value={name} />
        </form>
    </div>;
};

export default Update;