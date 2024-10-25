import React, { useEffect, useRef, useState } from 'react';
import { Handle, Position } from '@xyflow/react';
import { ProcessNodeProps } from '../model/types/';
import '../../PreProcess/ui/PreProcess.css';

const Process: React.FC<ProcessNodeProps> = ({ data, id, isConnectable }) => {
  const inputRef1 = useRef<HTMLInputElement>(null);
  const inputRef2 = useRef<HTMLInputElement>(null);
  const [input1Value, setInput1Value] = useState(data.input1Value || '');
  const [input2Value, setInput2Value] = useState(data.input2Value || '');
  const [label1Value, setLabel1Value] = useState(data.label1Value || 'Change');
  const [label2Value, setLabel2Value] = useState(data.label2Value || 'Change');

  const [editingLabel, setEditingLabel] = useState<'label1' | 'label2' | null>(null);

  useEffect(() => {
    data.updateNodeData(id, {
      input1Value,
      input2Value,
      label1Value,
      label2Value,
    });
  }, [input1Value, input2Value, label1Value, label2Value, id, data.updateNodeData]);

  useEffect(() => {
    setInput1Value(data.input1Value || '');
    setInput2Value(data.input2Value || '');
    setLabel1Value(data.label1Value || 'Change');
    setLabel2Value(data.label2Value || 'Change');
  }, [data]);


  const handleLabelBlur = (label: 'label1' | 'label2', value: string) => {
    if (label === 'label1') {
      setLabel1Value(value);
    } else if (label === 'label2') {
      setLabel2Value(value);
    }
    setEditingLabel(null);
  };

  return (
    <div className="text-updater-node">
      <div className="text-updeter-inner">
        {editingLabel === 'label1' ? (
          <input
            ref={inputRef1}
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
          ref={inputRef1}
          name="input1"
          value={input1Value}
          onChange={(e) => setInput1Value(e.target.value)}
          className="nodrag"
        />

        {editingLabel === 'label2' ? (
          <input
            ref={inputRef2}
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
          ref={inputRef2}
          name="input2"
          value={input2Value}
          onChange={(e) => setInput2Value(e.target.value)}
          className="nodrag"
        />
      </div>
      <Handle className='handle' type="source" position={Position.Bottom} isConnectable={isConnectable} />
    </div>
  );
};

export default Process;
