// Import react to create react element (after transpile)
import React from "react";
// Component to render front end
const BasicInfo = (props) => {
    return (
        <div className="App">
            <p>Name: {props.name}</p>
            <p>Number: {props.number}</p>
            <p>Date of Birth: {props.dob}</p>
            <p>Hobby: {props.hobby}</p>
        </div>
    );
};

export default BasicInfo;
