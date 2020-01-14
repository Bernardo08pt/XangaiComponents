import * as React from 'react';
import { TreeNode } from './types';
import TreeItem from './TreeItem';
import "./tree.scss";

interface TreeProps {
    data: Array<TreeNode>; 
}

const Tree: React.FC<TreeProps> = ({
    data
}) => {

    return (
        <div className={"tree"}>
            { data.map(treeNode => 
                <TreeItem 
                    key={`TreeNode_${treeNode.id}`}
                    data={treeNode} 
                />) 
            }
        </div>
    );
}

export default Tree;