import React, { useState, useEffect } from 'react'
import { Box, Button, Typography, Container } from '@mui/material'
import Hour from './Hour'
import { getWork } from '../../http/calendarApi'
import { getTimes } from '../../http/timesApi'
import currentWeekDate from '../../helpers/currentWeekDate'
import Header from '../Header'
const Calendar = () => {

    const [dayAgo, setDayAgo] = useState(0)
    const [works, setWorks] = useState([])
    const [times, setTimes] = useState([])
    const [weekDates, setWeekDates] = useState([])
    const [update, setUpdate] = useState(true)
    const [selectedTime, setSelectedTime] = useState({})

    let today = new Date();
    today = new Date(today.getTime() - dayAgo * 24 * 60 * 60 * 1000);

    useEffect(() => {
        setWeekDates(() => currentWeekDate(today))
    }, [dayAgo])

    const getWorks = async () => {
        const res = await getWork(2, `${weekDates[0]?.fullDate}`, `${weekDates[weekDates.length - 1]?.fullDate} 24:00:00`)
        setWorks(res)
    }
    useEffect(() => {
        const times = async () => {
            const res = await getTimes(2)
            setTimes(res)
        }
        if (weekDates.length > 0) {
            getWorks()
        }
        ///times()

    }, [weekDates, update])

    useEffect(() => {
        const req = async () => {
            const res = await getTimes(2)
            setTimes(res)
        }
        req()
    }, [])


    useEffect(() => { console.log(weekDates) }, [dayAgo])

    return (
        <>
            <Header setSelected = {setSelectedTime}/>
            <Typography>
                Выбран {selectedTime.price}
            </Typography>
            < Container sx={{
                marginBottom: "40px",
                justifyContent: 'center',
                display: "flex",
                gap: "15px",
                minHeight: "100vh",
                backgroundColor: "white",
                padding: "20px",
                flexWrap: "wrap",

            }}>
                {weekDates?.map((day, i) => (
                    //i + 1 === today.getDay() ? "red" :
                    <Box key={day.fullDate} sx={{
                        backgroundColor: "white",
                        borderRadius: "10px",
                        textAlign: "center",
                        color: "#ffae78",
                        padding: "5px 5px 10px 5px",
                        boxShadow: "0px 0px 9px 0px rgba(255, 0, 225, 0.18)"
                    }}
                    >

                        <Typography sx={{ margin: "5px" }}>
                            {day.number} / {day.weekday} /{day.currentMonth}
                        </Typography>
                        <Hour date={weekDates[i].fullDate} update={setUpdate} works={works} selectedTime={selectedTime} times={times}/>
                    </Box>
                ))}
                <Button onClick={() => setDayAgo(p => p + 7)}>Назад</Button>
                <Button onClick={() => setDayAgo(p => p - 7)}>Вперед</Button>
                <Button onClick={() => setDayAgo(0)}>Вернуться</Button>
            </ Container>
        </>
    )
}

export default Calendar