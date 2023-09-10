import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import { InputLabel, Select, MenuItem } from '@mui/material';
import './Addtasks.css'

const Addtasks = () => {

  const [taskText, setTaskText] = useState('');
  const [taskStatus, setTaskStatus] = useState('incomplete'); // Default status

  const handleTaskTextChange = (e) => {
    setTaskText(e.target.value);
  };

  const handleTaskStatusChange = (e) => {
    setTaskStatus(e.target.value);
  };

  const handleAddTask = () => {
    // Here, you can add the task to your state or perform any other action
    console.log('Task Text:', taskText);
    console.log('Task Status:', taskStatus);
    // Reset the input fields
    setTaskText('');
    setTaskStatus('incomplete');
  };

  return (
    <div className='addsection'>
       <Box display="flex" flexDirection="column" justifyContent="center" >
       <TextField
            label="Task"
            variant="outlined"
            value={taskText}
            onChange={handleTaskTextChange}
            style={{paddingBottom: '10px'}}
            InputProps={{
                style: {
                  borderRadius: "15px",
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
            <MenuItem value="complete">Complete</MenuItem>
            <MenuItem value="incomplete">Incomplete</MenuItem>
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
