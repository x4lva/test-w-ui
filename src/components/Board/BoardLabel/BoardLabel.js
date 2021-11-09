import React from 'react';
import './BoardLabel.scss';

const BoardLabel = ({title}) => {
    return (
        <div className={"node-label"}>
            <div className="node-label-content">
                {title}
            </div>
        </div>
    );
};

export default BoardLabel;