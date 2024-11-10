import { Module } from '@nestjs/common'
import { TaskController } from './tasks.controller' 
import { TasksService } from './tasks.service'

@Module({
    providers: [TasksService],
    controllers: [TaskController]
})
export class TasksModule {

}