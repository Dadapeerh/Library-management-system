import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const ReadBook = () => {

    //to get route parameter
    let params = useParams()
    let [books, setBooks] = useState([])
    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch(`http://localhost:4000/books/${params.id}`)
            let data = await response.json()
            setBooks(data)
        }
        fetchData()
    })

    return (
        <div className="readbook">
            <h1>Read Book </h1>
            <h2>{books.title}</h2>
            <div className="bookdescription">
                <p>{books.longDescription}</p>
                <p>{books.shortDescription}</p>
            </div>
        </div>
    );
}

export default ReadBook;