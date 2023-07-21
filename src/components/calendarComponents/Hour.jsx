import React, { useState, useEffect } from 'react'
import { Box, Button } from '@mui/material'
import { createWork } from '../../http/calendarApi'
const hours = [
    "00", "01", "02", '03', '04', "05", "06", '07', "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"
]
const Hour = ({ date }) => {

    const [fullDate, setFullDate] = useState()

    const saveWork = async (hour) => {
        await createWork({
            fullDate: `${date} ${hour}:00:00`,
            userId: 2,
            timesId: 1
        })
    }

    return (
        <Box sx={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent:"center"}}>
            {hours.map(hour => (
                <Button
                    
                    onClick={() => saveWork(hour)}
                    key={hour}
                    sx={{ backgroundColor: "#f7f7f7" }}
                >
                    {hour}
                </Button>
            ))}
        </Box>
    )
}

export default Hour