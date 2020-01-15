import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';

interface ITreeItemLabelProps {
    hasChildren: boolean;
    expanded: boolean;
    value: string;
}

const TreeItemLabel: React.FC<ITreeItemLabelProps> = ({
    hasChildren,
    expanded,
    value
}) => {
    return (
        <div className="tree-item-header-label">
            { hasChildren && 
                <FontAwesomeIcon 
                    className={"tree-item-header-label__icon"}
                    icon={ expanded ? faChevronDown : faChevronRight } 
                /> 
            }
            { value }
        </div>)
};

export default TreeItemLabel;