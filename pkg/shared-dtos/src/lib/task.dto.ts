import { IsNotEmpty, IsString, MinLength, IsOptional, IsISO8601, IsIn } from 'class-validator';

export type Priority = 'low' | 'med' | 'high';

export class TaskDto {
  id!: number;
  title!: string;
  isDone!: boolean;
  date!: string; // ISO8601 string
  description?: string;
  @IsOptional()
  @IsIn(['low', 'med', 'high'])
  priority?: Priority;
}

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  title!: string;

  @IsOptional()
  @IsISO8601()
  date?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsIn(['low', 'med', 'high'])
  priority?: Priority;
} 