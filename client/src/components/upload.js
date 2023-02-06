import React from 'react'

class upload extends React.Component {

    constructor(props) {
        super(props)
        this.state = { users: []};    // Asigns inital state
    }

    render(){
        return(
        <>
            <p>Click on "choose File" button to upload a file:</p>
            <form action="/api">
                <input type="file" id="myFile" name="filename">
                <input type="submit">
            </form>
        </>
        )
    }
}