import React from 'react';
import {Row, Col, Button} from 'react-bootstrap'
import {faPause, faPlay} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


export default function Clock(props) {
    let time_left = props.time_left
    let minutes = Math.floor(time_left/60)
    let seconds = time_left%60
    seconds = seconds < 10 ? `0${ seconds }` : seconds;
    let speed = 1/props.timer_speed + "s"
    let styleName = "verylargefont"
    if(time_left <= 20 && props.is_running)
        styleName += " redfont"
    if(time_left <= 10 && !props.timer_finished && props.is_running) {
        styleName += " blinking"
    }
    return (
        <Row className="justify-content-md-center vcenter topmargin">
            <Col md="auto">
                <span className={styleName} style={{"--t": speed }}>{minutes}:{seconds}</span>
            </Col>
            <Col md="auto">
                <Button variant="secondary" onClick={props.handlePlayingState} size="xs"><FontAwesomeIcon icon={props.is_playing ? faPause : faPlay} /></Button>
            </Col>
        </Row>
    ) 
}
