import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

interface ITreeItemToolbarProps {
}

const TreeItemToolbar: React.FC<ITreeItemToolbarProps> = ({
}) => {
    return (
        <div className="tree-item-header-toolbar">
            <FontAwesomeIcon 
                className={"tree-item-header-toolbar__icon"}
                icon={ faPlus } 
            /> 
            <FontAwesomeIcon 
                className={"tree-item-header-toolbar__icon"}
                icon={ faEdit } 
            /> 
            <FontAwesomeIcon 
                icon={ faTrash } 
            /> 
        </div>
    )
};

export default TreeItemToolbar;