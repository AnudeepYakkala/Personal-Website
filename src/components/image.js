import React from 'react';

import './image.css';
import LaptopImage from './images/website-image.png';

export default class Image extends React.Component {
    render() {
        return (
            <div>
                <div className="image-header"></div>
                <div class="image-container">
                        <img className="image-size" src={LaptopImage} />
                </div>
            </div>
        )
    }
}
