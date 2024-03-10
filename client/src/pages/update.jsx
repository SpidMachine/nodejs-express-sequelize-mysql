import axios from "axios";
import {useEffect, useState} from "react";

const Create = ()=>{
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const handleCreate =()=>{
        axios.post("http://localhost:8080/api/tutorials",{title,description}).then()
    }

    useEffect(()=>{
        axios.get("http://localhost:8080/api/tutorials").then((response)=>{
            console.log(response)
            setTitle(response.data.title)
        })
    }, [])
    return (
        <div>
            <form onSubmit={handleCreate}>
                <input value={title} onChange={e=>setTitle(e.target.value)} type="text" /><br/>
                <input value={description} onChange={e=>setDescription(e.target.value)} type="text" />
                <button type="submit">Создать</button>
            </form>
        </div>
    )
}
export {Create}