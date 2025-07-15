import { Controller, Get, Post, Body } from '@nestjs/common';
import { type TaskDto, type CreateTaskDto } from '@my-fullstack-app/shared-dtos';

@Controller('tasks')
export class AppController {
  private readonly tasks: TaskDto[] = [
    { id: 1, title: 'Setup the monorepo', isDone: true },
    { id: 2, title: 'Create the frontend', isDone: true },
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
    };
    this.tasks.push(newTask);
    return newTask;
  }
}
