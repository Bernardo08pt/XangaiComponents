export interface TreeNode {
    id: string;
    value: string;
    parentId?: string;
    children?: Array<TreeNode>;
}

export interface TreeActions {
    onAdd?: (item: TreeNode) => void;
    onEdit?: (item: TreeNode) => void;
    onDelete?: (item: TreeNode) => void;
}

export interface DragAndDrop<T> {
    draggedItem?: T;
    onDrag: (draggedItem: T) => void;
    onDrop: (droppedItem: T) => void;
}