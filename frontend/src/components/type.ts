export type TargetItem = {
    id: number;
    目标内容: string;
    计划完成时间: string;
    用户名: string;
    完成时间?: string;
}

export type TargetFormData = Omit<TargetItem, 'id' | '完成时间'>;

export type User = {
    id: number,
    用户名: string;
    邮箱: string;
}

declare global {
    interface Window { $message: any; }
}
