import React from 'react'
import { Box, Stack, Button } from '@mui/material'

const DisplayTimes = () => {
    const times = [
        {
            color: "black",
            price: "100"
        },
        {
            color: "red",
            price: "444"
        },
        {
            color: "blue",
            price: "432"
        },
        {
            color: "black",
            price: "444"
        },
        {
            color: "black",
            price: "534"
        },
        {
            color: "black",
            price: "4234"
        },

    ]
    return (


            <Stack  spacing={1} direction={"row"}>
                {times.map((time,i) => (
                    <Button key={i} sx={{ backgroundColor: `${time.color}`}}>{time.price}</Button>
                ))}
            </Stack>
       
    )
}

export default DisplayTimes