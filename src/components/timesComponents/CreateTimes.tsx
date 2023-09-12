import React from 'react'
import { Box, Button, Container, Paper, TextField, Typography, IconButton } from '@mui/material'
import Time from './Time';
import NewTime from './NewTime';
import { useEffect } from 'react';
import { useGetTimesQuery } from '../../store/timesApi';
import { ITime } from '../../types/types';
const CreateTimes = () => {

  const { data: times = [], isLoading } = useGetTimesQuery(2)


  const [newTimes, setNewTimes] = React.useState<ITime[]>([])
  const [count, setCount] = React.useState(0)


  useEffect(() => {
    if (count > 0) {
      setNewTimes(p => [...p, {
        index: count,
        color: "",
        price: 0,
        title: "",
        user_id: 2
      }])
    }
  }, [count])


  const deleteTime = (index: number) => {
    setNewTimes(newTimes.filter((time) => time.index !== index))
  }

  if (isLoading) return <h1>Загрузка</h1>
  return (
    <Container sx={{ textAlign: "center", marginBottom: "60px" }}>
      {
        times?.map((time: ITime) => (
          <Time key={time.id} time={time} />
        ))
      }
      {
        newTimes?.map((time, i) => (
          <NewTime key={time.index} time={time} setTimes={setNewTimes} deleteTime={deleteTime} />
        ))
      }
      <Button onClick={() => setCount(p => p + 1)}>
        Добавить время
      </Button>
    </Container>
  )
}

export default CreateTimes