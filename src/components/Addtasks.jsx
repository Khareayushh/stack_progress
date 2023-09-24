import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import { InputLabel, Select, MenuItem } from '@mui/material';
import './Addtasks.css'

const Addtasks = ({updateData}) => {

  // const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");
  const [taskStatus, setTaskStatus] = useState('Incomplete'); // Default status
  const [err, setErr] = useState(false);

  // useEffect(() => {
  //   const storedTask = JSON.parse(localStorage.getItem("tasks")) || [];
  //   setTasks(storedTask);
  // }, []);

  const handleTaskTextChange = (e) => {
    setErr(false);
    setTaskText(e.target.value);
  };

  const handleTaskStatusChange = (e) => {
    setTaskStatus(e.target.value);
  };

  // const handleEnterKey = (event) => {
  //   if(event.key === 'Enter'){
  //     handleAddTask();
  //   }
  // }

  const handleAddTask = () => {
    // Here, you can add the task to your state or perform any other action
    
    //Check for the text;
    // if(!taskText || taskText==="Title is required"){
    //   setTaskText('Title is required');
    //   return;
    // }

    // // console.log(data.length+1);
    // // console.log(data);
    // const newTask = {
    //   id: tasks.length + 1,
    //   task: taskText,
    //   status: taskStatus,
    // }

    if (taskText.trim() !== '' && taskText != "Required") {
      const newTask = {
        id: Math.random(),
        task: taskText,
        status: taskStatus,
      };
      updateData(newTask);
      // setErr(false);
      setTaskText('');
    }
    else{
      setErr(true);
      return;
    }

    console.log('Task Text:', taskText);
    console.log('Task Status:', taskStatus);


    // // Reset the input fields
    setTaskText('');
    setTaskStatus('Incomplete');
  };

  return (
    <div className='addsection'>
       <Box display="flex" flexDirection="column" justifyContent="center" >
       <TextField
            label="Task"
            variant="outlined"
            value={taskText}
            onChange={handleTaskTextChange}
            error={err}
            helperText = {err ? "Task is Required" : ""}
            style={{paddingBottom: '10px'}}
            // required
            InputProps={{
                style: {
                  borderRadius: "15px",
                }
            }}
            onKeyDown={(event) => {
              if(event.key === 'Enter'){
                handleAddTask();
              }
            }}
        />
        <FormControl 
        variant="outlined"
        style={{paddingBottom: '10px'}}
        InputProps={{
            style: {
              borderRadius: "15px",
            }
        }}
        >
            <InputLabel>Task Status</InputLabel>
            <Select
            label="Task Status"
            value={taskStatus}
            onChange={handleTaskStatusChange}
            >
            <MenuItem value="Complete">Complete</MenuItem>
            <MenuItem value="Incomplete">Incomplete</MenuItem>
            </Select>
        </FormControl>
        <Button variant="contained" onClick={handleAddTask} style={{backgroundColor: "#ef5350", fontSize: "17px"}}>
            Add Task
        </Button>
       </Box>
    </div>
  )
}

export default Addtasks
