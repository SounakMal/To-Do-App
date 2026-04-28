import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';

const Task = ({ task, elem, id, markAsComplete,markAsDeleted }) => {
  const [expanded, setExpanded] = useState(false);

  const handleDone = () => {
    markAsComplete(id);
    setExpanded(false);  // Optionally collapse the accordion
  };

  const handleChange = (event, isExpanded) => {
    if (!elem.completed) {
      setExpanded(isExpanded);
    }
  };

  return (
    <div className={`flex flex-col p-5 gap-5 rounded-2xl bg-transparent h-max shadow-2xl`}>
      <Accordion
        disabled={elem.completed}
        expanded={expanded}
        onChange={handleChange}
        square={false}
        sx={{
          bgcolor: '#2c0514',
          borderRadius: 2,
          boxShadow: '0 0 10px #7f1d1d',
          color: '#fbcfe8',
          mb: 2,
          '&:before': { display: 'none' },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: '#dc2626' }} />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            bgcolor: 'transparent',
            fontWeight: 'bold',
          }}
        >
          <Typography component="span" sx={{ fontWeight: 'bold' }}>
            {elem.taskTitle}
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            bgcolor: '#4b1120',
            color: '#f9a8d4',
            width: "100%",
            height: { xs: '15rem', md: '20rem' },
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
          }}
        >
          {elem.taskDescription}
          <div className="flex justify-center items-center w-full text-white">
            <button
              className='px-3 py-1 lg:px-4 lg:py-2 rounded-xl cursor-pointer bg-emerald-600'
              onClick={(e) => {
                e.stopPropagation(); // Prevent accordion toggle when clicking button
                handleDone();
              }}
              disabled={elem.completed}
            >
              Done
            </button>
          </div>
        </AccordionDetails>
      </Accordion>
      <button 
      className='px-3 py-1 lg:px-4 lg:py-2 rounded-xl cursor-pointer bg-rose-600 self-end'
      onClick={() => markAsDeleted(id)}>Delete</button>
    </div>
  );
};

export default Task;
