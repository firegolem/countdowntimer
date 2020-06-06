import React from 'react';

import TimerInput from './Input.js'
import Clock from './Clock.js'
import ShowMessage from './ShowMessage.js'
import ButtonToolbar from './ButtonToolbar.js'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Countdown extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
        this.state = {
            timer_speed: 1,
            is_playing: true,
            time_set: "",
            time_left : 0,
            is_running: false,
            timer_finished: false,
        }
        this.handleStartClick = this.handleStartClick.bind(this);
        this.handlePlayingState = this.handlePlayingState.bind(this);
        this.changeSpeed = this.changeSpeed.bind(this);
        this.setTimer = this.setTimer.bind(this);
        this.myInterval = null;
    }

    setTimer(event) {
        const re = /^[0-9\b]+$/;
        if (event.target.value === '' || re.test(event.target.value)) {
            this.setState({
                ...this.state,
                time_set: event.target.value
            })
        }
    }

    handlePlayingState() {
        this.setState({...this.state, is_playing: !this.state.is_playing})
    }
    
    handleStartClick() {
        console.log("Resetting Timer...")
        let time_left = 60 * this.state.time_set;
        this.setState({
            ...this.state,
            time_left: time_left,
            is_running: true,
            timer_finished: false
        })
        this.changeInterval(this.state.timer_speed)
    }

    changeTimeLeft() {
        let {time_left} = this.state
        time_left = time_left - 1
        let timer_finished = false
        if(time_left === 0) {
            clearInterval(this.myInterval)
            timer_finished = true
        }
        this.setState({
            ...this.state,
            time_left: time_left,
            timer_finished: timer_finished
        })
    }

    changeInterval(speed) {
        if(this.myInterval)
            clearInterval(this.myInterval)
        this.myInterval = setInterval(() => {
            const {time_left, is_playing} = this.state
            if ((time_left > 0) && (is_playing))
                this.changeTimeLeft()
        }, 1000/speed);
    }

    changeSpeed(event) {
        console.log("Changing speed")
        let {value} = event.target
        let speed = 1
        if(value === "1")
            speed = 1
        else if(value === "1.5")
            speed = 1.5
        else
            speed = 2
        this.setState({
            ...this.state,
            timer_speed: speed 
        })
        this.changeInterval(speed)
    }

    render() {
        const {time_left, time_set} = this.state 
        return (
            <div className="App topmargin">
                <TimerInput time_set={time_set} setTimer={this.setTimer} handleStartClick={this.handleStartClick} />
                <ShowMessage time_left={time_left} time_set={time_set} is_running={this.state.is_running} />
                <Clock time_left={time_left} handlePlayingState={this.handlePlayingState} is_playing={this.state.is_playing} timer_finished={this.state.timer_finished} is_running={this.state.is_running} timer_speed={this.state.timer_speed}/>
                <ButtonToolbar timer_speed={this.state.timer_speed} changeSpeed={this.changeSpeed} />
            </div>
        );
    }
}
