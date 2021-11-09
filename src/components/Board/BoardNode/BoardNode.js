import React from 'react';
import './BoardNode.scss';

const BoardNode = ({title, content}) => {
    return (
        <div className="node">
            <div className="node-header">{title}</div>
            <div className="node-content">{content}</div>
        </div>
    );
};

export default BoardNode;