import { IsNotEmpty, IsString, MinLength, IsOptional, IsISO8601 } from 'class-validator';

export class TaskDto {
  id!: number;
  title!: string;
  isDone!: boolean;
  date!: string; // ISO8601 string
}

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  title!: string;

  @IsOptional()
  @IsISO8601()
  date?: string;
} 