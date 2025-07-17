import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { type TaskDto, type CreateTaskDto } from '@my-fullstack-app/shared-dtos';

@Controller('api/v1/tasks')
export class TasksController {
  private readonly tasks: TaskDto[] = [
    { id: 1, title: 'Setup the monorepo', isDone: true, date: new Date().toISOString(), description: 'Initialize the monorepo structure.' },
    { id: 2, title: 'Create the frontend', isDone: true, date: new Date().toISOString(), description: 'Set up the React frontend.' },
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
      description: createTaskDto.description,
    };
    this.tasks.push(newTask);
    return newTask;
  }

  @Get(':id')
  getTaskById(@Param('id') id: string): TaskDto {
    const task = this.tasks.find(t => t.id === Number(id));
    if (!task) {
      throw new NotFoundException('Task not found');
    }
    return task;
  }
} 