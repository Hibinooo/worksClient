import React, { useState, useEffect } from 'react'
import { Box, Button } from '@mui/material'
import { createWork } from '../../http/calendarApi'

const hours = [
    "00", "01", "02", '03', '04', "05", "06", '07', "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"
]
const Hour = ({ date, works, update, selectedTime, times }) => {

    const saveWork = async (hour) => {
        await createWork({
            fullDate: `${date}T${hour}:00:00.000Z`,
            userId: 2,
            timesId: selectedTime.id
        }).then(update(p => !p))
    }

    return (
        <Box sx={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
            {hours.map(hour => {
                const work = works?.find(work => work.date_time === `${date}T${hour}:00:00.000Z`)
                return (
                    <Box key={hour}>
                        {work
                            ?
                            <Button
                                key={hour}
                                sx={{ backgroundColor: times.find(t => t.id === work.times_id)?.color }}
                            >
                                {hour}
                            </Button>
                            :
                            <Button
                                onClick={() => saveWork(hour)}
                                key={hour}
                                sx={{ backgroundColor: "#f7f7f7" }}
                            >
                                {hour}
                            </Button>
                        }
                    </Box>
                )
            }
            )}
        </Box>
    )
}

export default Hour