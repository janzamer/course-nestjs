import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller()
export class UsersController {
    
    constructor(private usersService: UsersService){}

    @Get('/users')
    @ApiOperation({summary: 'Esto obtiene todas las tareas'})
    @ApiResponse({status: 200, description: 'Retorna todas las tareas'})
    @ApiResponse({status: 403, description: 'Forbiden'})
    getUsers() {
        return this.usersService.getUsers();
    }

    @Post('/users')
    @ApiOperation({summary: 'Esto crea una tarea'})
    createUsers(@Body() user: CreateUserDto) {
        return this.usersService.createUsers(user);
    }
}
