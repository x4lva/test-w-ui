import React, {useEffect, useState} from 'react';
import {eventTypes} from '../../../types/eventTypes';
import {conditionTypes} from '../../../types/conditionTypes';
import {actionTypes} from '../../../types/actionTypes';
import BoardNode from '../BoardNode/BoardNode';
import BoardLabel from '../BoardLabel/BoardLabel';
import ReactFlow, {Handle} from 'react-flow-renderer';
import './BoardFlow.scss'
import BoardModal from '../BoardModal/BoardModal';
import ActionSendSms from '../BoardActions/ActionSendSms/ActionSendSms';

const BoardFlow = () => {
    const [showModal, setShowModal] = useState(false);

    const [boardData, setBoardData] = useState({
        event: eventTypes[0], condition: conditionTypes[0], actionYes: actionTypes[1], actionNo: actionTypes[1]
    });

    useEffect(() => {
        console.log(boardData)
    }, [boardData])

    const boardDataChangeHandler = (e) => {
        setBoardData((state) => {
            return {...state, [e.target.name]: e.target.value}
        });

        if (e.target.value === actionTypes[0]) {
            setShowModal(true)
        }
    }

    const edgeStyles = {
        stroke: '#9EA5AE',
        strokeWidth: 2,
    };

    const edgeLabelStyles = {
        stroke: '#9EA5AE',
        fontSize: 12
    };

    const boardInitConfig = [
        {
            id: '1',
            type: 'custom',
            data: {
                label: <BoardNode title={'START WHEN'}
                  content={<select onChange={boardDataChangeHandler} value={boardData.event}
                                   name='event'>
                      {eventTypes.map(el => {
                          return <option key={el} value={el}>{el.replaceAll('_', ' ')}</option>
                      })}
                  </select>}/>
            },
            position: {x: 250, y: 25},
            targetPosition: 'bottom'
        },
        {
            id: '2',
            type: 'custom',
            data: {
                label: <BoardNode handles={<Handle type={'target'} id={'a'} position={'top'} />} title={'IF'}
                  content={<select onChange={boardDataChangeHandler} value={boardData.condition}
                                   name='condition'>
                      {conditionTypes.map(el => {
                          return <option key={el} value={el}>{el.replaceAll('_', ' ')}</option>
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
                label: <BoardNode className={'node-green'} title={'THEN'}
                  content={<select onChange={boardDataChangeHandler} value={boardData.actionYes}
                                   name='actionYes'>
                      {actionTypes.map(el => {
                          return <option key={el} value={el}>{el.replaceAll('_', ' ')}</option>
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
                label: <BoardNode className={'node-green'} title={'WHAT NEXT'}
                  content={<select onChange={boardDataChangeHandler} value={boardData.actionNo}
                                   name='actionNo'>
                      {actionTypes.map(el => {
                          return <option key={el} value={el}>{el.replaceAll('_', ' ')}</option>
                      })}
                  </select>}/>
            },
            position: {x: 250, y: 400},
            sourcePosition: 'top',
            targetPosition: 'bottom'
        },
        {
            id: '5',
            type: 'custom',
            data: {
                label: <BoardLabel title={'END'}/>
            },
            position: {x: 343, y: 550},
            targetPosition: 'top',
            sourcePosition: 'top',
            draggable: false
        },
        {
            id: '6',
            type: 'custom',
            data: {
                label: <BoardLabel title={'END'}/>
            },
            position: {x: 1000, y: 213},
            targetPosition: 'left',
            sourcePosition: 'left',
            draggable: false
        },
        {
            id: 'e1-2',
            source: '1',
            target: '2',
            type: 'custom',
            style: edgeStyles,
            targetHandle: 'a'
        },
        {
            id: 'e2-3',
            source: '2',
            target: '3',
            type: 'custom',
            style: edgeStyles,
            label: 'YES',
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
            label: 'NO',
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
        <div className={'board-flow'}>
            <ReactFlow elements={boardInitConfig}/>
            <BoardModal
                show={showModal}
                onHide={() => setShowModal(false)}
                title={'Send SMS'}
                content={<ActionSendSms />}/>
        </div>
    );
};

export default BoardFlow;