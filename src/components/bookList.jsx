import { useState, useEffect } from "react";
import '../styles/booklist.css'
import ReadBook from "./readBook";
import { useNavigate } from "react-router-dom";

const BookList = () => {

    let [books, setBooks] = useState([])
    let navigate = useNavigate()

    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch("http://localhost:4000/books")
            let data = await response.json()
            setBooks(data)
        }
        fetchData()
    }, [books])

    // delete a book from server
    let handleDelete = (id, title) => {
        fetch(`http://localhost:4000/books/${id}`, {
            method:'DELETE'
        })
        alert(`${title} will be deleted permanently`)
    }
    let handleRead = (id) =>{
        navigate(`/admin/book-list/${id}`)
    }
    return (
        <div className="booklist">
            <h1>Book List : {books.length}</h1>
            <hr />
            <div className="books_section">
                {
                    books.map((data) => (
                        <div className="book_card">
                            <div className="book_image">
                                <img src={data.thumbnailUrl} alt="" />
                            </div>
                            <div className="bookinfo">
                                <h2><u>{data.title}</u></h2>
                                <p><b>Authors :</b> {data.authors.toString()}</p>
                                {/* <h5>{data.authors[0]}</h5> */}
                                <p><b>Category :</b> {data.categories}</p>
                                <p><b>Page Count :</b> {data.pageCount}</p>
                                <button className="btn1" onClick={ () => handleRead(data.id)}>Read More</button>
                                <button className="btn2" onClick={ () => handleDelete(data.id, data.title)}>Delete Book</button>
                            </div>
                        </div>
                    ))
                }
            </div>
            <ReadBook />
        </div>
    );
}

export default BookList;