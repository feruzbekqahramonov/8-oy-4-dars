import * as React from "react";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Timerrrr from "./components/Timer";
import TimerTwo from "./components/TimerTwoo";
import musicFile from "./Дима Билан & Мари Краймбрери - It's My Life (Silver Ace Remix).mp3";
import { FaBars } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { IoPlaySkipBack } from "react-icons/io5";
import { IoPlaySkipForwardSharp } from "react-icons/io5";
import { AiFillSound } from "react-icons/ai";
import { useState, useEffect } from "react";
import Slider from "@mui/material/Slider";
import "./App.css";
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
    "aria-controls": `full-width-tabpanel-${index}`,
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

  const [val, setVal] = React.useState<number>();
  const handleChangee = (_: Event, newValue: number | number[]) => {
    setVal(newValue as number);
  };
  const MAX = 100;
  const MIN = 0;
  const marks = [
    {
      value: MIN,
      label: "",
    },
    {
      value: MAX,
      label: "",
    },
  ];

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [audio] = useState(new Audio(musicFile));
  useEffect(() => {
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
  }, [isPlaying, audio]);

  return (
    <>
      <div className="main">
        <h1 className="PomodoroTitle">Why don't you take a challange? 😏</h1>
        <Box className="box">
          <AppBar position="static">
            <Tabs
              className="tabs_wrapper"
              value={value}
              onChange={handleChange}
              textColor="inherit"
              variant="fullWidth"
              aria-label="full width tabs "
            >
              <Tab className="tabs1" label="Pomodoro 0" {...a11yProps(0)} />
              <Tab className="tabs2" label="Reset 0" {...a11yProps(1)} />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
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
        <div className="flex items-center gap-3 music">
          <FaBars className="text-2xl" />

          <button onClick={() => setIsPlaying(!isPlaying)} className="playingBtn">
            {isPlaying ? (
              <FaPause className="text-3xl playing" />
            ) : (
              <FaPlay className="text-3xl playing" />
            )}
          </button>
          <IoPlaySkipBack className="text-xl"></IoPlaySkipBack>
          <IoPlaySkipForwardSharp className="text-xl"></IoPlaySkipForwardSharp>
          <AiFillSound color="black" className="text-xl" />
          <Box sx={{ width: 250, marginTop: "6px" }}>
            <Slider
              marks={marks}
              step={10}
              value={val}
              valueLabelDisplay="auto"
              onChange={handleChangee}
            />
            <Box
              sx={{ display: "flex", justifyContent: "space-between" }}
            ></Box>
          </Box>
          <p className=" font-bold">Background music - Lofi 3</p>
        </div>
      </div>
    </>
  );
}

export default App;
