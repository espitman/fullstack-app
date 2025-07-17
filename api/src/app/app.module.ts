import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { AppController } from './app.controller';
import { TasksController } from '../api/v1/tasks.controller';
import { AppService } from './app.service';
import { SpaController } from './spa.controller';

@Module({
  imports: [CacheModule.register()],
  controllers: [AppController, TasksController, SpaController],
  providers: [AppService],
})
export class AppModule {}
