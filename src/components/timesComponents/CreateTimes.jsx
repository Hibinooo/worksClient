import React from 'react'
import { Box, Button, Container, Paper, TextField, Typography, IconButton } from '@mui/material'
import { MuiColorInput } from "mui-color-input";
import { getTimes } from '../../http/timesApi';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import Time from './Time';
import NewTime from './NewTime';
import { useEffect } from 'react';
const CreateTimes = () => {
  const [times, setTimes] = React.useState([])
  const [newTimes, setNewTimes] = React.useState([])
  const [count, setCount] = React.useState(0)

  useEffect(() => {
    const times = async () => {
      const res = await getTimes(2)
      setTimes(res)
    }
    times()
  }, [])

  useEffect(() => { console.log(newTimes) }, [newTimes])
  useEffect(() => {
    if (count > 0) {
      setNewTimes(p => [...p, {
        index: count,
        color: "",
        price: null,
        title: "",
        user_id: 2
      }])
    }
  }, [count])


  const deleteTime = (index) => {
    setNewTimes(newTimes.filter((time) => time.index !== index))
    console.log(newTimes)
  }

  return (
    <Container sx={{ textAlign: "center", marginBottom: "60px" }}>
      {
        times?.map(time => (
          <Time key={time.id} time={time} />
        ))
      }
      {
        newTimes?.map((time, i) => (
          <NewTime key={time.index} time={time} setTimes={setNewTimes} deleteTime={deleteTime} />
        ))
      }
      <Button onClick={() => setCount(p => p+1)}>
        Добавить время
      </Button>
    </Container>
  )
}

export default CreateTimes