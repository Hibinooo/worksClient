import React, { FC } from 'react'
import { Box, Button } from '@mui/material'
import { createWork } from '../../http/calendarApi'
import { useAddWorksMutation } from '../../store/worksApi'
import { ITime, IWork } from '../../types/types'

type HourProps = {
    date: string,
    works: IWork[],
    selectedTime: ITime,
    times: ITime[]
}

const hours = [
    "00", "01", "02", '03', '04', "05", "06", '07', "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"
]
const Hour: FC<HourProps> = ({ date, works, selectedTime, times }) => {

    const [addWorks, { isError, isSuccess }] = useAddWorksMutation()


    const handleAddWorks = async (hour: string) => {
        await addWorks({
            fullDate: `${date}T${hour}:00:00.000Z`,
            userId: 2,
            timesId: selectedTime.id
        }).unwrap()
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
                                onClick={() => handleAddWorks(hour)}
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