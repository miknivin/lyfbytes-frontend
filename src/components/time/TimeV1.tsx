import { useTimer } from 'react-timer-hook';

interface DataType {
    expiryTimestamp?: any
}

const TimeV1 = ({ expiryTimestamp }: DataType) => {
    const { seconds, minutes, hours, days, } = useTimer({ expiryTimestamp, onExpire: () => console.log('Counter Expired') });
    return (
        <>
            <div className="item-list">
                <div className="counter-item">
                    <div className="item">
                        <h5><span className="counter-days">{days <= 9 ? `0${days}` : days}</span> Days</h5>
                    </div>
                </div>
                <div className="counter-item">
                    <div className="item">
                        <h5><span className="counter-hours">{hours <= 9 ? `0${hours}` : hours}</span> Hours</h5>
                    </div>
                </div>
                <div className="counter-item">
                    <div className="item">
                        <h5><span className="counter-minutes">{minutes <= 9 ? `0${minutes}` : minutes}</span> Minutes</h5>
                    </div>
                </div>
                <div className="counter-item">
                    <div className="item">
                        <h5><span className="counter-seconds">{seconds <= 9 ? `0${seconds}` : seconds}</span> Seconds</h5>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TimeV1;