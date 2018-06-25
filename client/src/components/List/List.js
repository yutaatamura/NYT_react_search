import React from "react";

import "./List.css";

const List = (props) => (
    <div className="list-overflow-container">
        <ul className="list-group">
            {props.children}
        </ul>
    </div>
);


export default List;