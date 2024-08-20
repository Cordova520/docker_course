import React from "react";

import './GoalItem.css';
import { text } from "body-parser";

function GoalItem(props) {
    return <li className="goal-item" onClick={props.onDelete.bind(null, props.id)}>{props.text}</li>;
}

export default GoalItem;