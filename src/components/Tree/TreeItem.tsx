import * as React from 'react';
import { useState, memo } from 'react';

import { TreeNode, DragAndDrop } from './types';
import TreeItemLabel from './TreeItemLabel';
import TreeItemToolbar from './TreeItemToolbar';

interface ITreeItemProps {
    data: TreeNode; 
    dragAndDrop: DragAndDrop<TreeNode>;
}

const TreeItem: React.FC<ITreeItemProps> = memo(({
    data,
    dragAndDrop
}) => {
    const [expanded, setExpanded] = useState(false);
    const [draggedOver, setDraggedOver] = useState(false);

    const { id, value, children } = data;
    const hasChildren = !!children && children.length > 0;
    const {onDrag, onDrop, draggedItem} = dragAndDrop;

    return (
        <div className={"tree-item"} >
            <div 
                className={`tree-item-header ${draggedOver ? "tree-item-header--dragged-over" : ""}`}
                draggable
                onDragStart={() => onDrag && onDrag(data)}
                onDragOver={e => {
                    e.stopPropagation();
                    e.preventDefault();

                    const isDifferentItem = !!draggedItem && draggedItem.id !== id;
                    if (isDifferentItem) {
                        setDraggedOver(true);
                        setExpanded(true);
                    }
                }}
                onDragLeave={() => setDraggedOver(false)}
                onDrop={e => {
                    e.stopPropagation();
                    
                    setDraggedOver(false);
                    onDrop && onDrop(data);
                }}
                onClick={() => setExpanded(!expanded)}
            >   
                <TreeItemLabel
                    hasChildren={hasChildren}
                    expanded={expanded}
                    value={value}
                />
                <TreeItemToolbar />
            </div>
            { expanded && children && hasChildren &&
                <div 
                    className={"tree-item-children"}
                >
                    { children.map(treeNode => 
                        <TreeItem 
                            key={`TreeNode_${treeNode.id}`}
                            data={treeNode} 
                            dragAndDrop={dragAndDrop}
                        />) 
                    }
                </div>
            }
        </div>
    );
});

export default TreeItem;