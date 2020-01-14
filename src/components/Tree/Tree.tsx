import * as React from 'react';
import { useState, useCallback } from 'react';
import { TreeNode } from './types';
import TreeItem from './TreeItem';
import "./tree.scss";

export interface ITreeProps {
    data: Array<TreeNode>; 
}

const Tree: React.FC<ITreeProps> = ({
    data
}) => {
    const [itemList] = useState(data);
    const [draggedItem, setDraggedItem] = useState();

    const handleDragItem = useCallback((draggedItem: TreeNode) => 
        setDraggedItem(draggedItem) 
    ,[setDraggedItem]);

    // const handleDropItem = useCallback((draggedItem: TreeNode, droppedItem: TreeNode) => {

    // }
    // ,[setDraggedItem]);

    return (
        <div className={"tree"}>
            { itemList && itemList.map(treeNode => 
                <TreeItem 
                    key={`TreeNode_${treeNode.id}`}
                    data={treeNode}
                    draggedItem={draggedItem}
                    onDrag={handleDragItem}
                />) 
            }
        </div>
    );
}

export default Tree;