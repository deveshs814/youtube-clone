import React from 'react'
import { Stack } from '@mui/material';
import { categories } from '../utils/constants';

const selectedCategory='New';
const Sidebar = () =>  (    
    <Stack
    direction="row"
    sx={{
        overflowY:"auto",
        height:{sx:"auto" ,md:'95%'},
        flexDirection:{md:'column'},
    }}
    >
    {categories.map((category,index)=>(
        <button 
        key={index}   className='category-btn'
        style={{
            background: category.name === selectedCategory ? '#FC1503' : 'black',
            color: "white"
        }}
        >
            <span>{category.icon}</span>
            <span>{category.name}</span>
        </button>
    ))}
    </Stack>
  )


export default Sidebar