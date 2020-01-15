import * as React from 'react';
import { useState, useCallback } from 'react';
import { TreeNode } from './types';
import TreeItem from './TreeItem';
import "./tree.scss";
import { moveTreeNode, isChildren } from './utils';

export interface ITreeProps {
    data: Array<TreeNode>; 
}

const Tree: React.FC<ITreeProps> = ({
    data
}) => {
    const [itemList, setItemList] = useState(data);
    const [draggedItem, setDraggedItem] = useState();

    const handleDragItem = useCallback((draggedItem: TreeNode) => 
        setDraggedItem(draggedItem) 
    , [setDraggedItem]);

    const handleDropItem = useCallback((droppedItem: TreeNode) => {
        const { id: draggedItemId } = draggedItem;
        const { id: droppedItemId } = droppedItem;

        if (draggedItemId === droppedItemId || isChildren(draggedItem, droppedItemId)) {
            return;
        }

        setItemList(moveTreeNode(itemList, draggedItem, droppedItem.id));
    }, [itemList, draggedItem, setItemList]);

    return (
        <div className={"tree"}>
            { itemList && itemList.map(treeNode => 
                <TreeItem 
                    key={`TreeNode_${treeNode.id}`}
                    data={treeNode}
                    draggedItem={draggedItem}
                    onDrag={handleDragItem}
                    onDrop={handleDropItem}
                />) 
            }
        </div>
    );
}

export default Tree;