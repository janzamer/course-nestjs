import {Body, Controller, Delete, Get, Param, Patch, Post, Put, Query} from '@nestjs/common'
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('/tasks')
export class TaskController{

    constructor(private tasksService: TasksService){}

    @Get()
    getAllTasks(@Query() query:any){
        console.log(query);
       return this.tasksService.getTasks();
    }

    @Get('/:id')
    getTask(@Param('id') id:string){
        console.log(id);
       return this.tasksService.getTask(parseInt(id));
    }
    
    @Post()
    createTask(@Body() task: CreateTaskDto){
        console.log(task);
       return this.tasksService.createTask(task);
    }
    
    @Put()
    updateTask(@Body() task: UpdateTaskDto){
        return this.tasksService.updateTask(task);
    }

    @Delete()
    deleteTasks(){
        return this.tasksService.deleteTasks();
    }

    @Patch()
    updateTaskStatus(){
        return this.tasksService.updateTaskStatus();
    }
}