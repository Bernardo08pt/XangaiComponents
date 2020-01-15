import * as React from 'react';
import { useState, useCallback } from 'react';
import { TreeNode } from './types';
import TreeItem from './TreeItem';
import "./tree.scss";
import { moveTreeNode, isAChildren, removeTreeNode } from './utils';

export interface ITreeProps {
    data: Array<TreeNode>; 
}

const Tree: React.FC<ITreeProps> = ({
    data
}) => {
    const [itemList, setItemList] = useState(data);
    const [draggedOver, setDraggedOver] = useState(false);
    const [draggedItem, setDraggedItem] = useState<TreeNode>();

    const handleDragItem = useCallback((draggedItem: TreeNode) => 
        setDraggedItem(draggedItem) 
    , [setDraggedItem]);

    const handleDropItem = useCallback((droppedItem?: TreeNode) => {
        
        if (!draggedItem) {
            return;
        }

        const { id: draggedItemId, parentId } = draggedItem;

        if (droppedItem) {
            const { id: droppedItemId } = droppedItem;

            if (draggedItemId === droppedItemId || parentId === droppedItemId || isAChildren(draggedItem, droppedItemId)) {
                return;
            }
            setItemList(moveTreeNode(itemList, {...draggedItem, parentId: droppedItemId }, droppedItemId));
        } else {
            if (!parentId) {
                return;
            }

            setItemList([...removeTreeNode(itemList, draggedItemId), {...draggedItem, parentId: undefined }]);
        }
    }, [itemList, draggedItem, setItemList]);


    return (
        <div 
            className={`tree ${draggedOver ? "tree--dragged-over" : ""}`}
            onDragOver={e => {
                e.stopPropagation();
                e.preventDefault();

               setDraggedOver(true);
            }}
            onDragLeave={() => setDraggedOver(false)}
            onDrop={e => {
                e.stopPropagation();
                
                setDraggedOver(false);
                handleDropItem();
            }}
        >
            { itemList && itemList.map(treeNode => 
                <TreeItem 
                    key={`TreeNode_${treeNode.id}`}
                    data={treeNode}
                    dragAndDrop={{draggedItem, onDrag: handleDragItem, onDrop: handleDropItem}}
                />) 
            }
        </div>
    );
}

export default Tree;