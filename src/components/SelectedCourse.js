import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { CardHeader, TextField } from '@mui/material';


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function SelectedCourses(props) {

  const { set , courses, change} = props;

  const handleClick = (set, courses) => {

  }

  return (
    <Card sx={{ 
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}>
          
        <CardContent>
        <Typography sx={{ mb: 1.5 }}>
            Courses Selected for {set}
          </Typography>
        <Card elevation={0} sx={{ maxHeight: '20vh', overflow: 'auto' }}>
        {Object.keys(courses).map((x)=>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <IconButton aria-label="delete" size="small">
              <DeleteIcon fontSize="inherit" onClick = {()=>change(x)}/>
            </IconButton>
              {courses[x]}
        </Typography>
        )}
        <TextField id="outlined-basic" label="Outlined" variant="outlined" size="small"/>
        </Card>
      </CardContent>
      <CardActions disableSpacing sx={{ mt: "auto" }}>
        <Button fullWidth variant='contained' color='success' onClick={()=> handleClick(set, courses)}>Auto_Advice set - {set}</Button>
      </CardActions>
    </Card>
  );
}