import React, { Component } from "react";
import "./App.css";
import BasicInfo from "./BasicInfo/BasicInfo";
import Aux from "./hoc/Aux";

// Component to manage state
class App extends Component {
    constructor(props) {
        // So that this.props is not undefined.
        // Allows child class to inherit
        super(props);
        // Persons array set as state
        this.state = {
            persons: [
                {
                    name: "Josh",
                    number: "(980) 365 1799",
                    dob: "09/04/1999",
                    hobby: "Coding",
                },
                {
                    name: "Tom",
                    number: "(980) 365 1798",
                    dob: "09/04/1999",
                    hobby: "Coding",
                },
                {
                    name: "Ken",
                    number: "(980) 365 1797",
                    dob: "09/04/1999",
                    hobby: "Coding",
                },
            ],
        };
    }
    render() {
        return (
            // Aux is used to wrap content
            <Aux>
                {/* Loop through array then return each individual persons data from obj */}
                {this.state.persons.map((person) => {
                    return (
                        // "Key" is used to provide a primary id for each index
                        <BasicInfo
                            key={person.number}
                            name={person.name}
                            number={person.number}
                            dob={person.dob}
                            hobby={person.hobby}
                        />
                    );
                })}
            </Aux>
        );
    }
}

export default App;
