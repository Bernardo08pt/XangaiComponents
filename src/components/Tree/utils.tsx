import { TreeNode } from "./types";

export const moveTreeNode = (nodeList: Array<TreeNode>, itemToMove: TreeNode, parentId: string): Array<TreeNode> => 
    nodeList
        .filter(item => item.id !== itemToMove.id)
        .map(item => {
            const { id, children } = item;

            if (id === parentId) {
                return children ? 
                    {...item, children: [...moveTreeNode(children, itemToMove, parentId), itemToMove]} : 
                    {...item, children: [itemToMove]};
            } else {
                return children ? {...item, children: moveTreeNode(children, itemToMove, parentId) } : item;
            }
        });

export const removeTreeNode = (nodeList: Array<TreeNode>, nodeId: string): Array<TreeNode> => 
    nodeList
        .filter(item => item.id !== nodeId)
        .map(item =>  item.children ? {...item, children: removeTreeNode(item.children, nodeId) } : item );

export const isAChildren = (parentNode: TreeNode, childrenId: string) : boolean => 
    !!parentNode.children &&
    parentNode.children.some(item => 
        item.id === childrenId || isAChildren(item, childrenId) 
    );