export class CreateUserDto {
  id: number;
  email: string;
  name: string;
  task: Task;
  isCompleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}
enum Task {
  PENDING = 'PENDING',
  ONGOING = 'ONGOING',
  DONE = 'DONE',
}
