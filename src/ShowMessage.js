import React from 'react';
import {Row} from 'react-bootstrap'

export default function ShowMessage(props) {
    let time_left = props.time_left
    let time_set = props.time_set
    let show_mesg = false
    let message = ""
    if(time_left <= time_set * 30) {
        message = "More than halfway there!"
        show_mesg = true
    }
    if(time_left === 0) {
        message = "Time’s up!"
        show_mesg = true
    }
    if(show_mesg && props.is_running) {
        return (
            <Row className="justify-content-md-center vcenter topmargin">
                <span>{message}</span>
            </Row>
        )
    }
    else
        return (null)
}
