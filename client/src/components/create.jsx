import React, {useState, useEffect} from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

const Create = (props) => {

    const {id} = useParams()

    const [newAuthor, setNewAuthor] = useState([]);
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
                console.log("Error");
                console.log(err.response.data);
            })
    }

    return <div>
        <Link to="/authors">Home</Link>
        <h3>Add an Author</h3>
            <form onSubmit={createAuthor}>
                name
                <input type="text" onChange={e => setName(e.target.value)} value={name}/>
                <button>Create</button>
            </form>
            <hr/>
    </div>

};

export default Create;
