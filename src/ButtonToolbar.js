import React from 'react';
import {Row, ToggleButton, ToggleButtonGroup} from 'react-bootstrap'


export default function ButtonToolbar(props) {
    return (
        <Row className="justify-content-md-center vcenter topmargin">
            <ToggleButtonGroup type="radio" name="options" defaultValue={props.timer_speed}>
                <ToggleButton variant="outline-secondary" className="mr-3" onChange={(e) => props.changeSpeed(e)} value={1}> 1X </ToggleButton>
                <ToggleButton variant="outline-secondary" className="mr-3" onChange={(e) => props.changeSpeed(e)} value={1.5}>1.5X</ToggleButton>
                <ToggleButton variant="outline-secondary" className="mr-3" onChange={(e) => props.changeSpeed(e)} value={2}> 2X </ToggleButton>
            </ToggleButtonGroup>
        </Row>
    )
}
