import { Controller, Get, Post, Body } from '@nestjs/common';
import { TaskDto, CreateTaskDto } from '../../../dist/shared-dtos/src/lib/task.dto';

@Controller('tasks')
export class AppController {
  private readonly tasks: TaskDto[] = [
    { id: 1, title: 'Setup the monorepo', isDone: true, date: new Date().toISOString() },
    { id: 2, title: 'Create the frontend', isDone: true, date: new Date().toISOString() },
  ];

  @Get()
  getTasks(): TaskDto[] {
    return this.tasks;
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): TaskDto {
    console.log('Received valid data:', createTaskDto);
    const newTask: TaskDto = {
      id: this.tasks.length + 1,
      title: createTaskDto.title,
      isDone: false,
      date: createTaskDto.date || new Date().toISOString(),
    };
    this.tasks.push(newTask);
    return newTask;
  }
}
