import React, { useState, useEffect } from 'react'
import { Box, Button, Typography, Container } from '@mui/material'
import Hour from './Hour'
import currentWeekDate from '../../helpers/currentWeekDate'
import Header from '../Header'
import { useGetTimesQuery } from '../../store/timesApi'
import { useGetWorksQuery } from '../../store/worksApi'
import { ITime } from '../../types/types'

type weekDatesType = {
    fullDate: string,
    number: number,
    weekday: string,
    currentMonth: string

}

const Calendar = () => {

    const { data: times = [] } = useGetTimesQuery(2)

    const [dayAgo, setDayAgo] = useState(0)
    const [weekDates, setWeekDates] = useState<weekDatesType[]>([])
    const [selectedTime, setSelectedTime] = useState<ITime>(
        {
            id: -1,
            color: "fff",
            price: 0,
            title: 'test'
        }
    )

    let today = new Date();
    today = new Date(today.getTime() - dayAgo * 24 * 60 * 60 * 1000);

    const { data: works = [], isLoading } = useGetWorksQuery(
        {
            id: 2,
            startdate: `${weekDates[0]?.fullDate}`,
            enddate: `${weekDates[weekDates.length - 1]?.fullDate} 24:00:00`
        },
        {
            skip: !(weekDates.length > 0),

        })

    useEffect(() => {
        setWeekDates(() => currentWeekDate(today))
    }, [dayAgo])

    if (isLoading) return <h1>Загрузка</h1>

    return (
        <>
            <Header setSelected={setSelectedTime} data={times} />
            <Typography>
                Выбран {selectedTime?.price}
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
                {weekDates?.map((day: weekDatesType, i) => (
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
                        <Hour date={weekDates[i].fullDate} works={works} selectedTime={selectedTime} times={times} />
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