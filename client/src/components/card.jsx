import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import {useNavigate} from "react-router-dom";

const bull = (
  <Box
    component="div"
    sx={{ display: 'flex', mx: '2px', transform: 'scale(0.8)' }}
  >
  </Box>
);

export default function BasicCard({title,description,id,setPosts}) {

    const navigate = useNavigate()

    const handleDelete = async ()=>{
        axios.delete(`http://localhost:8080/api/tutorials/${id}`).then()
        axios.get("http://localhost:8080/api/tutorials").then(({data})=>{
            setPosts(data)
          })
    }
    const handleEdit = ()=>{
        navigate(`/create/${id}`)
    }
  return (
    <Card sx={{ maxWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {title}
        </Typography>

        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleDelete} size="small">Удалить</Button>
        <Button onClick={handleEdit} size="small">Редактировать</Button>
      </CardActions>
    </Card>
  );
}