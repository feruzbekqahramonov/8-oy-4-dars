import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'; 
import Timerrrr from './components/Timer' 
import TimerTwo from './components/TimerTwoo' 
import './App.css'
interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

function App() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };
 
  return (
    <>
    <div className='main'>
      <h1 className='PomodoroTitle'>Why don't you take a challange? 😏</h1>
    <Box className='box'>
      <AppBar position="static" >
        <Tabs className='tabs_wrapper'
          value={value}
          onChange={handleChange}
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs "
        >
          <Tab className='tabs1' label="Pomodoro 0" {...a11yProps(0)} />
          <Tab className='tabs2' label="Reset 0" {...a11yProps(1)} />
         
        </Tabs>
      </AppBar >
      <SwipeableViews 
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Timerrrr></Timerrrr>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <TimerTwo></TimerTwo>
        </TabPanel>
        
      </SwipeableViews>
    </Box>
  
    </div>
    </>
  )
}

export default App
