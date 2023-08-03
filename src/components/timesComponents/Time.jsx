import React from 'react'
import { Paper, Box, Typography, Button, TextField, IconButton } from '@mui/material'
import { MuiColorInput } from "mui-color-input";
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import { updateTime } from '../../http/timesApi';
const Time = ({ time }) => {

    const [color, setColor] = React.useState(time.color)
    const [title, setTitle] = React.useState(time.title)
    const [price, setPrice] = React.useState(time.price)
    const [disabled, setDisabled] = React.useState(true)

    const handleChange = (color) => {
        setColor(color)
    }

    const update = async () => {
        await updateTime({
            id: time.id,
            title: title,
            color: color,
            price: price,
        })
    }

    return (
        <Paper sx={{ display: "flex", gap: "10px", flexDirection: "column", marginBottom: "20px", boxShadow:`1px 1px 20px -7px ${color}`}}>
            <Box textAlign={'right'}>
                {/* <IconButton>
                    <CancelPresentationIcon />
                </IconButton> */}
            </Box>
            <Box sx={{ display: "flex", justifyContent: 'space-between', margin: '0 40px 0 40px' }}>
                <Typography>
                    Название
                </Typography>
                <TextField placeholder='Название' disabled={disabled} defaultValue={time.title} sx={{ maxWidth: "50%" }} onChange={(e) => setTitle(e.target.value)} />
            </Box>
            <Box sx={{ display: "flex", justifyContent: 'space-between', margin: '0 40px 0 40px' }}>
                <Typography>
                    Цена
                </Typography>
                <TextField placeholder='Цена' disabled={disabled} defaultValue={time.price} type="number" sx={{ maxWidth: "50%" }} onChange={(e) => setPrice(e.target.value)} />
            </Box>
            <Box sx={{ display: "flex", justifyContent: 'space-between', margin: '0 40px 0 40px' }}>
                <Typography>
                    Цвет
                </Typography>
                <MuiColorInput isAlphaHidden disabled={disabled} format="hex" value={color} onChange={handleChange} sx={{ maxWidth: "50%" }} />
            </Box>
            <Button onClick={() => {
                if (!disabled) {
                    update()
                        .finally(() => setDisabled(p => !p))
                }
                else {
                    setDisabled(p => !p)
                }
            }}
            >
                {disabled ? 'Изменить' : 'Сохранить'}
            </Button>
        </Paper>
    )
}

export default Time