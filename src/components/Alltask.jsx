import React, { useEffect, useState } from 'react'
import './Alltasks.css';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';


const columns = [
  { id: 'task', label: 'Task', minWidth: 300 , style: {
    fontSize: '17px', // Adjust the font size as needed
    fontWeight: 500, // Adjust the font weight as needed
  }},
  { id: 'status', label: 'Status', minWidth: 80 },
  { id: 'action', label: 'Close', minWidth: 50 },
];

// const initialRows = JSON.parse(localStorage.getItem("tasks")) || [];

// const initialRows = [
//   { sno: 1, task: 'Finish project proposal', status: 'In Progress' },
//   { sno: 2, task: 'Prepare for client meeting', status: 'Pending' },
//   { sno: 3, task: 'Review code for bug fixes', status: 'Completed' },
//   { sno: 4, task: 'Create wireframes for new feature', status: 'In Progress' },
//   { sno: 5, task: 'Write documentation', status: 'Pending' },
//   { sno: 6, task: 'Test new software release', status: 'Completed' },
//   { sno: 7, task: 'Organize team meeting', status: 'In Progress' },
//   { sno: 8, task: 'Complete user interface design', status: 'Pending' },
//   { sno: 9, task: 'Respond to customer inquiries', status: 'Completed' },
//   { sno: 10, task: 'Submit weekly progress report', status: 'In Progress' },
//   // Add more tasks as needed
// ];

const Alltask = ({tasks, updateData}) => {

  const rows = tasks;
  // console.log( typeof tasks);
  // const [rows, setRows] = useState(tasks || []);
  // useEffect(() => {
  //   setRows(tasks);
  // }, []);


  const handleTaskClose = (id) => {
    updateData(id);
  };

  // useEffect(() => {
  //   localStorage.setItem("tasks", JSON.stringify(tasks));
  // }, [tasks])

  return (
    <div className='all_tasks'>
        <h2 style={{ paddingLeft: '10px' }}>Task List</h2>
        <Paper sx={{ width: '100%', overflow: 'hidden', height: "40vh" }}>
        <TableContainer sx={{ maxHeight: 280 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth, fontWeight: 800, fontSize: "17px"}}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        const cellStyle = column.id === 'task' ? { ...column.style } : {};
            
                        return (
                          <TableCell key={column.id} align={column.align} style={cellStyle}>
                            {column.id === 'action' ? (
                              <button className='del_btn' onClick={() => handleTaskClose(index)}>
                                <DeleteIcon />
                              </button>
                            ) : (
                              value
                            )}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  )
}

export default Alltask;
