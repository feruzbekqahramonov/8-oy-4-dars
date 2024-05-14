import { FC, useEffect, useState } from "react";
import { Flat } from "@alptugidin/react-circular-progress-bar";

const TimerPomodoro: FC = () => {
  const [minutes, setMinutes] = useState(20);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId = 0;

    if (isRunning) {
      intervalId = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(intervalId);
            setIsRunning(false);
            // Pomodoro tamamlandı!
            alert("Pomodoro tamamlandı!");
          } else {
            setMinutes(minutes - 1);
            setSeconds(20);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isRunning, minutes, seconds]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setMinutes(60);
    setSeconds(0);
  };

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <div>
      <Flat
        progress={formatTime(minutes)}
        range={{ from: 0, to: 20 }}
        sign={{ value: ':', position: "end" }}
        text={"Lavel Popular"}
        showMiniCircle={true}
        showValue={true}
        sx={{
          strokeColor: "blue",
          barWidth: 1,
          bgStrokeColor: "#ffffff",
          bgColor: { value: "#000000", transparency: "50" },
          shape: "full",
          strokeLinecap: "round",
          valueSize: 13,
          valueWeight: "bold",
          valueColor: "blue",
          valueFamily: "Trebuchet MS",
          textSize: 5,
          textWeight: "bold",
          textColor: "blue",
          textFamily: "Trebuchet MS",
          loadingTime: 1000,
          miniCircleColor: "#ff0000",
          miniCircleSize: 50,
          valueAnimation: true,
          intersectionEnabled: true,
        }}
      />
      <div className="buttons">
        {!isRunning ? (
          <button
            onClick={startTimer}
            className="Button"
          >
            Boshla
          </button>
        ) : (
          <button
            onClick={pauseTimer}
            className="Buttonv"
          >
            Stop
          </button>
        )}
        <button
          onClick={resetTimer}
          className="Buttonnn"
        >
          Qayta
        </button>
      </div>
    </div>
  );
};

export default TimerPomodoro;
