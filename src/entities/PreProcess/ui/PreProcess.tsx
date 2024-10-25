import React, { useEffect, useState } from 'react';
import { Handle, Position } from '@xyflow/react';
import { PreProcessNodeProps } from '../model/types/';
import './PreProcess.css';

const PreProcess: React.FC<PreProcessNodeProps> = ({ data, id, isConnectable }) => {
    const [input1Value, setInput1Value] = useState(data.input1Value || '');
    const [input2Value, setInput2Value] = useState(data.input2Value || '');
    const [input3Value, setInput3Value] = useState(data.input3Value || '');
    const [label1Value, setLabel1Value] = useState(data.label1Value || 'Change');
    const [label2Value, setLabel2Value] = useState(data.label2Value || 'Change');
    const [label3Value, setLabel3Value] = useState(data.label3Value || 'Change');

    const [editingLabel, setEditingLabel] = useState<'label1' | 'label2' | 'label3' | null>(null);

    useEffect(() => {
        data.updateNodeData(id, {
            input1Value,
            input2Value,
            input3Value,
            label1Value,
            label2Value,
            label3Value
        });
    }, [input1Value, input2Value, input3Value, label1Value, label2Value, label3Value, id, data.updateNodeData]);

    useEffect(() => {
        setInput1Value(data.input1Value || '');
        setInput2Value(data.input2Value || '');
        setInput3Value(data.input3Value || '');
        setLabel1Value(data.label1Value || 'Change');
        setLabel2Value(data.label2Value || 'Change');
        setLabel3Value(data.label3Value || 'Change');
    }, [data]);

    const handleLabelBlur = (label: 'label1' | 'label2' | 'label3', value: string) => {
        if (label === 'label1') {
            setLabel1Value(value);
        } else if (label === 'label2') {
            setLabel2Value(value);
        } else if (label === 'label3') {
            setLabel3Value(value);
        }
        setEditingLabel(null);
    };

    return (
        <div className="text-updater-node">
            <Handle type="target" position={Position.Top} isConnectable={isConnectable} className="handle target" />
            <div className='text-updeter-inner'>
                {editingLabel === 'label1' ? (
                    <input
                        value={label1Value}
                        onChange={(e) => setLabel1Value(e.target.value)}
                        onBlur={() => handleLabelBlur('label1', label1Value)}
                        onFocus={() => setLabel1Value(label1Value)}
                        className="nodrag"
                        autoFocus
                    />
                ) : (
                    <label
                        className='label'
                        onClick={() => setEditingLabel('label1')}
                    >
                        {label1Value}
                    </label>
                )}
                <input
                    name="input1"
                    value={input1Value}
                    onChange={(e) => setInput1Value(e.target.value)}
                    className="nodrag"
                />

                {editingLabel === 'label2' ? (
                    <input
                        value={label2Value}
                        onChange={(e) => setLabel2Value(e.target.value)}
                        onBlur={() => handleLabelBlur('label2', label2Value)}
                        onFocus={() => setLabel2Value(label2Value)}
                        className="nodrag"
                        autoFocus
                    />
                ) : (
                    <label
                        className='label'
                        onClick={() => setEditingLabel('label2')}
                    >
                        {label2Value}
                    </label>
                )}
                <input
                    name="input2"
                    value={input2Value}
                    onChange={(e) => setInput2Value(e.target.value)}
                    className="nodrag"
                />

                {editingLabel === 'label3' ? (
                    <input
                        value={label3Value}
                        onChange={(e) => setLabel3Value(e.target.value)}
                        onBlur={() => handleLabelBlur('label3', label3Value)}
                        onFocus={() => setLabel3Value(label3Value)}
                        className="nodrag"
                        autoFocus
                    />
                ) : (
                    <label
                        className='label'
                        onClick={() => setEditingLabel('label3')}
                    >
                        {label3Value}
                    </label>
                )}
                <input
                    name="input3"
                    value={input3Value}
                    onChange={(e) => setInput3Value(e.target.value)}
                    className="nodrag"
                />
            </div>
        </div>
    );
};

export default PreProcess;
