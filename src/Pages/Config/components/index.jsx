import React from 'react';
import {
    Row,
    Col,
    Button,
    FormGroup,
    ControlLabel,
    FormControl
} from 'react-bootstrap';

export const FormConfig = props => {
    return (
        <Row>
            <Col>
                <FormGroup className="text-left">
                    <ControlLabel>Store Type</ControlLabel>
                    <FormControl
                        componentClass="select"
                        defaultValue={props.apiType}
                        onChange={e=>props.handleChange("apiType",e.currentTarget.value)}>
                        <option value="FIREBASE">Firebase</option>
                        <option value="LOCAL_STORAGE">Local Storage</option>
                    </FormControl>
                </FormGroup>
            </Col>
            <div className="p10">
                <Button bsStyle="success" onClick={()=>props.handleSubmit()}>Save</Button>
            </div>
            <div className="p10">
            <Button bsStyle="danger" style={{marginLeft:10}} onClick={()=>props.handleClearData("FIREBASE")}>Clear Data Firebase</Button>
                <Button bsStyle="danger" style={{marginLeft:10}} onClick={()=>props.handleClearData("LOCAL_STORAGE")}>Clear Data Local Storage</Button>
            </div>
        </Row>
    );
};