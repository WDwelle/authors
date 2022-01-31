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
                console.log(res.data.authors)
                setAuthors(res.data.authors)
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
            <h3>Authors</h3>
            {
                authors.map((author, i) => {
                    return <div key={i}>
                        <button onClick={ () => deleteAuthor(author._id)}>DELETE</button>
                        <Link to={"/authors/" + author._id + "/update"}>Edit</Link>
                    </div>
                })
            }
        </div>
    )
};

export default Main;