import React from 'react';
import './BoardNode.scss';

const BoardNode = ({title, content, className}) => {
    return (
        <div className={`node ${className}`}>
            <div className="node-header">{title}</div>
            <div className="node-content">{content}</div>
        </div>
    );
};

export default BoardNode;