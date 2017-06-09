import React, {Component} from 'react';

export class DivDiv extends Component {
    render() {
        return (
            <div id="parentDiv">
                <div className="col-md-12">
                    {/*<img src="https://kbdevstorage1.blob.core.windows.net/asset-blobs/19230_en_1" alt=""/>*/}

                </div>

                <div className="row childDiv ">
                    <div className="col-md-6">one</div>
                    <div className="col-md-6">two</div>
                </div>
            </div>
        );
    }
}

export default DivDiv;