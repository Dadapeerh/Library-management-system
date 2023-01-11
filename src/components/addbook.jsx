import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/addbook.css'

const AddBook = () => {

    //title,categories,authors,pageCount,shortDescriptionDescription.longDescriptionDescription,thumbnailthumbnailUrl
    let [title, setTitle] = useState("")
    let [authors, setAuthors] = useState("")
    let [categories, setCategories] = useState("")
    let [pageCount, setPagecount] = useState("")
    let [shortDescription, setShortDescription] = useState("")
    let [longDescription, setLongDescription] = useState("")
    let [thumbnailUrl, setthumbnailUrl] = useState("")

    let navigate = useNavigate()

    let handleSubmit = (e) => {
        e.preventDefault()
        let bookdata = { title, authors, categories, pageCount, shortDescription, longDescription, thumbnailUrl }

        //posting to server
        fetch("http://localhost:4000/books", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(bookdata)
        })
        alert(`book added sucessfully`)
        navigate("/admin/book-list")
    }
    return (
        <div className="addbook">
            <h1>Add A Book</h1>
            <div className="addbook_form">
                <form action="" onSubmit={handleSubmit}>
                    <div className="title">
                        <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" required placeholder="title of the book" />
                    </div>
                    <div className="authors">
                        <input value={authors} onChange={(e) => setAuthors(e.target.value)} type="text" required placeholder="authors of the book" />
                    </div>
                    <div className="categories">
                        <input value={categories} onChange={(e) => setCategories(e.target.value)} type="text" required placeholder="categories of the book" />
                    </div>
                    <div className="pagecount">
                        <input value={pageCount} onChange={(e) => setPagecount(e.target.value)} type="number" required placeholder="number of page" />
                    </div>
                    <div className="shortDescriptiondescription">
                        <textarea value={shortDescription} onChange={(e) => setShortDescription(e.target.value)} name="" id="" cols="30" rows="10" required placeholder="short description of the book"></textarea>
                    </div>
                    <div className="longDescriptiondescription">
                        <textarea value={longDescription} onChange={(e) => setLongDescription(e.target.value)} name="" id="" cols="30" rows="10" required placeholder="long description of the book"></textarea>
                    </div>
                    <div className="thumbnailthumbnailUrl">
                        <input value={thumbnailUrl} onChange={(e) => setthumbnailUrl(e.target.value)} type="text" required placeholder="thumbnail Url of the book" />
                    </div>
                    <button className="addbook_btn">Add Book</button>
                </form>
            </div>
        </div>
    );
}

export default AddBook;