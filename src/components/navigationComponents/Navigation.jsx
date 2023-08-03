import React, { useState } from 'react'
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import TodayIcon from '@mui/icons-material/Today';
import AddBoxIcon from '@mui/icons-material/AddBox';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Link } from 'react-router-dom';
const Navigation = () => {
    const [value, setValue] = useState(0);
    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction
                    component={Link}
                    to="/times"
                    label="Времена"
                    value="times"
                    icon={< AddBoxIcon />}
                    sx={{ color: "#a75a99" }}
                />
                <BottomNavigationAction
                    component={Link}
                    to="/"
                    label="Календарь"
                    icon={<TodayIcon />}
                    sx={{ color: "#a75a99" }}
                />
                <BottomNavigationAction
                    component={Link}
                    to="/profile"
                    label="Профиль"
                    icon={<AccountBoxIcon />}
                    sx={{ color: "#a75a99" }}
                />
            </BottomNavigation>
        </Paper>
    )
}

export default Navigation