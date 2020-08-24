//imports 
import React from 'react'

//create class
class Bomb extends React.Component{

    constructor(initialCount) {
        super()

        this.state = {
            secondsLeft: initialCount.initialCount
        }
    }

    render() {
        const message = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`;
        return (
        <div>{message}</div>
        )
    }
}

//export
export default Bomb;