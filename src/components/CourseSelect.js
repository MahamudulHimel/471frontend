import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import RoutineTable from './RoutineTable';
import CourseDetail from './CourseDetail';
import ExamRoutine from './ExamRoutine';
import DropDownList from './DropDownList.js'
import SelectedCourses from './SelectedCourse';

export default function CourseSelect(props){
    const { userId } = props;

    const [c1, setC1] = React.useState([]);
    const [c2, setC2] = React.useState([]);
    const [c3, setC3] = React.useState([]);

    function change1(i){
        let arr1 = [...c1];
        arr1.splice(i,1);
        setC1(arr1);
      }
    function change2(i){
    let arr1 = [...c2];
    arr1.splice(i,1);
    setC2(arr1);
    }
    function change3(i){
    let arr1 = [...c3];
    arr1.splice(i,1);
    setC3(arr1);
    }

    return (<>
        <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={5}>
      <Grid item xs={8}>

        <Grid container>
          <Grid item xs={12}>
            {/* <RoutineTable r = {r}/> */} a
          </Grid>
        </Grid>

      </Grid>

      <Grid item xs={4}>
        {/* <DropDownList s = {s} handleChange = {handleChange_dropdown} /> */}
        <Grid item xs={12}>
            <SelectedCourses set = {1} courses = {c1} change = {change1}/>
        </Grid>
        <Grid item xs={12}>
            <SelectedCourses set = {2} courses = {c1} change = {change2}/>
        </Grid>
        <Grid item xs={12}>
            <SelectedCourses set = {3} courses = {c1} change = {change3} />
        </Grid>
        
      </Grid>
    </Grid>
    </Box>
    
    </>)
}