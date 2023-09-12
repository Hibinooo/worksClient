import React, { Dispatch, FC, SetStateAction } from 'react'
import { Box, Button, Container, Paper, TextField, Typography, IconButton } from '@mui/material'
import { MuiColorInput } from "mui-color-input";
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import { useEffect } from 'react';
import { createTime } from '../../http/timesApi';
import { useAddTimesMutation } from '../../store/timesApi';
import { ITime } from '../../types/types';

type NewTimeProps = {
    deleteTime: (index) => void,
    time: ITime,
    setTimes: Dispatch<SetStateAction<ITime[]>>,
}

const NewTime: FC<NewTimeProps> = ({ deleteTime, time, setTimes }) => {

    const [addTimes, { isError, isSuccess }] = useAddTimesMutation()

    const [color, setColor] = React.useState("#fffff")
    const [title, setTitle] = React.useState('')
    const [price, setPrice] = React.useState(0)
    const [disabled, setDisabled] = React.useState(false)

    const handleChange = (color: string) => {
        setColor(color)
    }

    const handleAddTimes = async () => {
        await addTimes({
            title: title,
            color: color,
            price: price,
            userId: 2
        }).unwrap().then(() => setDisabled(true))
    }

    return (
        <Paper sx={{ display: "flex", gap: "10px", flexDirection: "column", marginBottom: "20px", boxShadow: `1px 1px 20px -7px ${color}` }}>
            <Box textAlign={'right'}>
                <IconButton onClick={() => deleteTime(time.index)} >
                    <CancelPresentationIcon />
                </IconButton>
            </Box>
            <Box sx={{ display: "flex", justifyContent: 'space-between', margin: '0 40px 0 40px' }}>
                <Typography>
                    Название
                </Typography>
                <TextField placeholder='Название' disabled={disabled} sx={{ maxWidth: "50%" }} onChange={(e) => setTitle(e.target.value)} />
            </Box>
            <Box sx={{ display: "flex", justifyContent: 'space-between', margin: '0 40px 0 40px' }}>
                <Typography>
                    Цена
                </Typography>
                <TextField placeholder='Цена' disabled={disabled} type="number" sx={{ maxWidth: "50%" }} onChange={(e) => setPrice(parseInt(e.target.value))} />
            </Box>
            <Box sx={{ display: "flex", justifyContent: 'space-between', margin: '0 40px 0 40px' }}>
                <Typography>
                    Цвет
                </Typography>
                <MuiColorInput isAlphaHidden disabled={disabled} format="hex" value={color} onChange={handleChange} sx={{ maxWidth: "50%" }} />
            </Box>
            <Button onClick={handleAddTimes}>
                {disabled ? "Изменить" : "Сохранить"}
            </Button>
        </Paper>
    )
}

export default NewTime