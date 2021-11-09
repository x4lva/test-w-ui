import React, {useEffect, useState} from 'react';
import './Board.scss'
import ReactFlow from 'react-flow-renderer';
import BoardNode from "./BoardNode/BoardNode";
import {eventTypes} from '../../types/eventTypes';
import {conditionTypes} from '../../types/conditionTypes';
import {actionTypes} from '../../types/actionTypes';
import BoardLabel from './BoardLabel/BoardLabel';

const Board = () => {
    const [boardData, setBoardData] = useState({
        event: eventTypes[0], condition: conditionTypes[0], actionYes: actionTypes[0], actionNo: actionTypes[0]
    });

    useEffect(() => {
        console.log(boardData)
    }, [boardData])

    const boardDataChangeHandler = (e) => {
        setBoardData((state) => { return  {...state, [e.target.name]: e.target.value}});
    }

    const edgeStyles = {
        stroke: "#9EA5AE",
        strokeWidth: 2,
    };

    const edgeLabelStyles = {
        stroke: "#9EA5AE",
        fontSize: 12
    };

    const boardInitConfig = [
        {
            id: '1',
            type: 'custom',
            data: {
                label: <BoardNode title={"START WHEN"}
                  content={<select onChange={boardDataChangeHandler} value={boardData.event} name="event">
                      {eventTypes.map(el => {
                          return <option key={el} value={el}>{el.replaceAll("_", " ")}</option>
                      })}
                  </select>}/>
            },
            position: {x: 250, y: 25},
            targetPosition: "bottom"
        },
        {
            id: '2',
            type: 'custom',
            data: {
                label: <BoardNode title={"IF"}
                  content={<select onChange={boardDataChangeHandler} value={boardData.condition} name="condition">
                      {conditionTypes.map(el => {
                          return <option key={el} value={el}>{el.replaceAll("_", " ")}</option>
                      })}
                  </select>}/>
            },
            position: {x: 250, y: 175},
            sourcePosition: 'right',
            targetPosition: 'bottom'
        },
        {
            id: '3',
            type: 'custom',
            data: {
                label: <BoardNode className={"node-green"} title={"THEN"}
                  content={<select onChange={boardDataChangeHandler} value={boardData.actionYes} name="actionYes">
                      {actionTypes.map(el => {
                          return <option key={el} value={el}>{el.replaceAll("_", " ")}</option>
                      })}
                  </select>}/>
            },
            position: {x: 700, y: 175},
            targetPosition: 'left',
            sourcePosition: 'right'
        },
        {
            id: '4',
            type: 'custom',
            data: {
                label: <BoardNode className={"node-green"} title={"WHAT NEXT"}
                  content={<select onChange={boardDataChangeHandler} value={boardData.actionNo} name="actionNo">
                      {actionTypes.map(el => {
                          return <option key={el} value={el}>{el.replaceAll("_", " ")}</option>
                      })}
                  </select>}/>
            },
            position: {x: 250, y: 400},
            sourcePosition: 'top',
            targetPosition: "bottom"
        },
        {
            id: '5',
            type: 'custom',
            data: {
                label: <BoardLabel title={"END"}/>
            },
            position: {x: 346, y: 550},
            targetPosition: 'top',
            sourcePosition: 'top',
            draggable: false
        },
        {
            id: '6',
            type: 'custom',
            data: {
                label: <BoardLabel title={"END"}/>
            },
            position: {x: 1000, y: 212.5},
            targetPosition: 'left',
            sourcePosition: 'left',
            draggable: false
        },
        {id: 'e1-2', source: '1', target: '2', type: 'custom', style: edgeStyles},
        {
            id: 'e2-3',
            source: '2',
            target: '3',
            type: 'custom',
            style: edgeStyles,
            label: "YES",
            labelStyle: edgeLabelStyles,
            labelBgPadding: [20, 10],
            labelBgBorderRadius: 20
        },
        {
            id: 'e2-4',
            source: '4',
            target: '2',
            type: 'custom',
            style: edgeStyles,
            label: "NO",
            labelStyle: edgeLabelStyles,
            labelBgPadding: [20, 10],
            labelBgBorderRadius: 20
        },
        {
            id: 'e4-5',
            source: '5',
            target: '4',
            type: 'custom',
            style: edgeStyles,
        },
        {
            id: 'e3-6',
            source: '3',
            sourceX: 100,
            target: '6',
            type: 'custom',
            style: edgeStyles,
        },
    ];

    return (
        <div className={"board-flow"}>
            <ReactFlow elements={boardInitConfig}/>
        </div>
    );
};

export default Board;