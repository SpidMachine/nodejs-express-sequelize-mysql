import axios from "axios";
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";

const Create = () => {
    const {id} = useParams()
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const navigate = useNavigate()

    const handleCreate = () => {
        if (id) {
            axios.put(`http://localhost:8080/api/tutorials/${id}`, {title, description})
        } else {
            axios.post("http://localhost:8080/api/tutorials", {title, description})
        }
        // axios.post("http://localhost:8080/api/tutorials/", {title, description}).then()
        navigate("/")
    }
    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:8080/api/tutorials/${id}`).then(({data}) => {
                setTitle(data.title)
                setDescription(data.description)
            })
        } else {
            axios.get(`http://localhost:8080/api/tutorials/`).then()
        }

    }, [id])
    return (
        <div>
            <form onSubmit={handleCreate}>
                <input value={title} onChange={e => setTitle(e.target.value)} type="text"/><br/>
                <input value={description} onChange={e => setDescription(e.target.value)} type="text"/>
                <button type="submit">Создать</button>
            </form>
        </div>
    )
}
export {Create}