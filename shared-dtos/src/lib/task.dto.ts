import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class TaskDto {
  id!: number;
  title!: string;
  isDone!: boolean;
}

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  public title!: string;
} 