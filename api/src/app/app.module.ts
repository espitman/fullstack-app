import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { TasksController } from '../api/v1/tasks.controller';
import { AppService } from './app.service';
import { SpaController } from './spa.controller';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../client/dist'),
    }),
  ],
  controllers: [AppController, TasksController, SpaController],
  providers: [AppService],
})
export class AppModule {}
