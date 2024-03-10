import {Grid} from '@mui/material';
import {useEffect, useState} from "react";
import axios from "axios";
import Card from "../components/card"

const Home = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8080/api/tutorials").then(({data}) => {
            setPosts(data)
        })
    }, [])
    return (
        <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
            {posts.map((item, index) => (
                <Grid item xs={2} sm={4} md={4}>
                    <Card setPosts={setPosts} id={item.id} title={item.title} description={item.description}/>
                </Grid>
            ))}
        </Grid>
    )
}
export {Home}