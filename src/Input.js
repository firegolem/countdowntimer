import React from 'react';
import {Row, Col, Button} from 'react-bootstrap'

export default function TimerInput(props) {
    return (
        <Row className="justify-content-md-center vcenter">
            <Col md="auto">
                <span>Countdown:</span>
            </Col>
            <Col md="auto">
                <input type="text" placeholder="(Min)" value={props.time_set} onChange={(e) => props.setTimer(e)} name="countdowntimer" className="form-control"/>
            </Col>
            <Col md="auto">
                <Button variant="success" size="xs" onClick={props.handleStartClick} >Start</Button>
            </Col>
        </Row>
    )
}
