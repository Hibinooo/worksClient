import React, { useState, useEffect } from 'react'
import { Box, Button, Typography } from '@mui/material'
import Hour from './Hour'
import { getWork } from '../../http/calendarApi'
import currentWeekDate from '../../helpers/currentWeekDate'
const Calendar = () => {

    const [dayAgo, setDayAgo] = useState(0)
    const [works, setWorks] = useState([])
    const [weekDates, setWeekDates] = useState([])

    let today = new Date();
    today = new Date(today.getTime() - dayAgo * 24 * 60 * 60 * 1000);

    useEffect(() => {
        const works = async () => {
            const res = await getWork(2, '2023-07-17', '2023-07-23 24:00:00')
            setWorks(res)
        }
        works()

    }, [])

    useEffect(() => {
        setWeekDates(() => currentWeekDate(today))
    }, [dayAgo])



    return (
        <Box sx={{

            justifyContent: 'center',
            display: "flex",
            gap: "5px",
            minHeight: "100vh",
            backgroundColor: "white",
            padding: "20px",
            flexWrap: "wrap"
        }}>
            {weekDates?.map((day, i) => (
                //i + 1 === today.getDay() ? "red" :
                <Box key={day.fullDate} sx={{
                    backgroundColor: "#f3deff",
                    borderRadius: "10px",
                    textAlign: "center",
                    color: "#ffae78",
                    padding: "5px 5px 10px 5px",
                }}
                >
                    <Typography sx={{ margin: "5px" }}>
                        {day.number} / {day.day} /{day.currentMonth}
                    </Typography>
                    <Hour date={weekDates[i].fullDate} />
                </Box>
            ))}
            <Button onClick={() => setDayAgo(p => p + 7)}>Назад</Button>
            <Button onClick={() => setDayAgo(p => p - 7)}>Вперед</Button>
            <Button onClick={() => setDayAgo(0)}>Вернуться</Button>
        </Box>
    )
}

export default Calendar