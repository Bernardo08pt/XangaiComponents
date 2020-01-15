export interface TreeNode {
    id: string;
    value: string;
    parentId?: string;
    children?: Array<TreeNode>;
}