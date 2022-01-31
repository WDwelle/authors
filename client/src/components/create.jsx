import React, {useState, useEffect} from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

const Create = (props) => {

    const {id} = useParams()

    const [newAuthor, setNewAuthor] = useState([]);
    const [errors, setErrors] = useState([]); 
    const history = useHistory();
    
    const [name, setName] = useState("");

    //===CREATE===\\
    const createAuthor = (e) => {
        e.preventDefault();

        const newAuthor = {
            name: name
        }

        axios.post("http://localhost:8000/api/authors", newAuthor)
            .then((res) => {
                console.log("Success");
                history.push("/");
            })
            .catch( err => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
    }

    return <div>
        <Link to="/authors">Home</Link>
        <h3>Add an Author</h3>
            <form onSubmit={createAuthor}>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
                name
                <input type="text" onChange={e => setName(e.target.value)} value={name}/>
                <button>Create</button>
            </form>
            <hr/>
    </div>

};

export default Create;
