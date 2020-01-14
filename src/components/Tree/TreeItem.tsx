import * as React from 'react';
import { useState, memo } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';

import { TreeNode } from './types';

interface ITreeItemProps {
    data: TreeNode; 
    draggedItem?: TreeNode;
    onDrag?: (draggedItem: TreeNode) => void;
}

const TreeItem: React.FC<ITreeItemProps> = memo(({
    data,
    draggedItem,
    onDrag
}) => {
    const [expanded, setExpanded] = useState(false);
    const [draggedOver, setDraggedOver] = useState(false);

    const { id, value, children } = data;

    return (
        <div className={"tree-item"}>
            <div 
                className={`tree-item-header ${draggedOver ? "tree-item-header--dragged-over" : ""}`}
                draggable
                onDragStart={() => onDrag && onDrag(data)}
                onDragOver={() => setDraggedOver(!!(draggedItem && draggedItem.id !== id))}
                onDragLeave={() => setDraggedOver(false)}
                onClick={() => setExpanded(!expanded)}
            >
                { children && 
                    <FontAwesomeIcon 
                        className={"tree-item-header__icon"}
                        icon={ expanded ? faChevronDown : faChevronRight } 
                    /> 
                }
                { value }
            </div>
            { expanded && children && 
                <div 
                    className={"tree-item-children"}
                >
                    { children.map(treeNode => 
                        <TreeItem 
                            key={`TreeNode_${treeNode.id}`}
                            data={treeNode} 
                            draggedItem={draggedItem}
                            onDrag={onDrag}
                        />) 
                    }
                </div>
            }
        </div>
    );
});

export default TreeItem;