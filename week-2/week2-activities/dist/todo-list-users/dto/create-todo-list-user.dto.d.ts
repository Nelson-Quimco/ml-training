export declare class CreateTodoListUserDto {
    id: number;
    email: string;
    name: string;
    task: Task;
    isCompleted: boolean;
    createdAt: Date;
    updatedAt: Date;
}
declare enum Task {
    PENDING = "PENDING",
    ONGOING = "ONGOING",
    DONE = "DONE"
}
export {};
