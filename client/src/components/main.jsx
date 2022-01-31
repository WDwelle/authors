import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';

const Main = (props) => {

    const history = useHistory();

    const [authors, setAuthors] = useState([]);

//===READ===\\
    useEffect( () => {
        axios.get("http://localhost:8000/api/authors")
            .then( (res) => { 
                console.log(res.data.Authors)
                setAuthors(res.data.Authors)
            })
            .catch( err => console.log(err))
    },[])

//===DELETE===\\
    const deleteAuthor = (deleteId) => {
        axios.delete("http://localhost:8000/api/authors/" + deleteId)
            .then( res => {
                console.log("Success")
                setAuthors(authors.filter( (author) => author._id !== deleteId))
            })
            .catch( err => console.log(err))
    }

    return (
        <div>
            <Link to="/authors/new">Create an author</Link>
            {
                authors.map((author, i) => {
                    return <div key={i}>
                        <p>{author.name}</p>
                        <button onClick={ () => deleteAuthor(author._id)}>DELETE</button>
                        <button><Link to={"/authors/" + author._id + "/update"}>Edit</Link></button>
                    </div>
                })
            }
        </div>
    )
};

export default Main;