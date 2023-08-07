import React  from 'react'
import { AppBar, Box, Button, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';

const Header = ({ setSelected, data }) => {



    return (
        <AppBar sx={{ minHeight: "5%", backgroundColor: "#a75a99" }}>
            <Accordion>
                <AccordionSummary sx={{ backgroundColor: "#a75a99", color: "white" }}>
                    <Typography >
                        Выберите время
                    </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: "white" }}>
                    <Box style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center" }}>
                        {data?.map((time) => (
                            <Button key={time.id} sx={{ backgroundColor: `${time.color}` }} onClick={() => setSelected(time)}>
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