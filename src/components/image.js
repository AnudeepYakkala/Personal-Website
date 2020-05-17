import React from 'react';

import './image.css';

export default class Image extends React.Component {
    render() {
        return (
            <div>
                <div className="image-header"></div>
                <div class="image-container">
                    <div class="container">
                    <div class="row">
                        <img class='img-fluid w-100' src="https://lh3.googleusercontent.com/6BpGI73M_xva6If_PPFC6DP7seUa_e8W7_JaUUZ-6-7hmqfb2VtFsYj4D7TVTRSnRpBQUVt9gNgpTupSB_Wty50RvtCQkFMPoN78Wt4b_iBKQFAx7uoVgEsWg0EyyfSwNJJvXwmvhg=w847" alt="" />
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}