import * as React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { TreeNode } from './types';

interface TreeItemProps {
    data: TreeNode; 
}

const TreeItem: React.FC<TreeItemProps> = ({
    data
}) => {
    const [expanded, setExpanded] = useState(false);
    const { value, children } = data;

    return (
        <div className={"tree-item"}>
            <div 
                className={"tree-item-header"}
                onClick={ () => setExpanded(!expanded) }
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
                        />) 
                    }
                </div>
            }
        </div>
    );
}

export default TreeItem;