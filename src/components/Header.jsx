import React, { useState, useEffect } from 'react'
import { AppBar, Box, Button, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import { getTimes } from '../http/timesApi';
const Header = ({setSelected}) => {
    const [times, setTimes] = useState([])

    useEffect(() => {
        const req = async () => {
            const res = await getTimes(2)
            setTimes(res)
        }
        req()
    }, [])

    return (
        <AppBar sx={{ minHeight: "5%", backgroundColor: "#a75a99" }}>
            <Accordion>
                <AccordionSummary sx={{ backgroundColor:"#a75a99", color:"white"}}>
                   <Typography >
                    Выберите время
                   </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{backgroundColor:"white"}}>
                    <Box style={{ display: "flex", flexWrap: "wrap", gap:"10px", justifyContent:"center"}}>
                        {times?.map((time) => (
                            <Button sx={{ backgroundColor: `${time.color}`}} onClick={() => setSelected(time)}>
                                {time.price}
                            </Button>
                        ))}
                    </Box>
                </AccordionDetails>
            </Accordion>
        </AppBar>
    )
}

export default Header