import React from 'react';
import "./ListItem.css";
import moment from 'moment';
import { Container, Row, Col} from "../../components/Grid";

const ListItem = (props) => (
    <li className="list-group-item" id={props.id}>
    <Container>
    <Row>
    <Col size="md-12">
        <a href={props.url} target="_blank">
        <h3><strong>{props.title}</strong></h3>
        </a>
        <p>{props.summary}</p>
        <small>{moment(props.date).format("dddd, MMMM Do YYYY, h:mm A")}</small>
        <hr />
        <button type={props.type} className="btn btn-primary articleBtn" onClick={props.onClick}>{props.type}</button>
    </Col>
    </Row>
    </Container>
    </li>
);

export default ListItem;
