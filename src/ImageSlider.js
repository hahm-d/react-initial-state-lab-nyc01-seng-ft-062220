//start with imports
import React from 'react';

//create the class
class ImageSlider extends React.Component {

    constructor(){
        super()

        this.state = {
            currentSlideIndex: 0
        }
    }

    render() {
        return (
        <h1>I am on slide {this.state.currentSlideIndex}</h1>
        )
    }

}

//end with class export
export default ImageSlider;