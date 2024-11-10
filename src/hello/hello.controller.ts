import { Controller, Get, HttpCode, Param, ParseBoolPipe, ParseIntPipe, Query, Req, Res, UseGuards } from '@nestjs/common';
import {Request,Response} from 'express';
import { ValidateuserPipe } from './pipes/validateuser/validateuser.pipe';
import { AuthGuard } from './guards/auth/auth.guard';

@Controller()
export class HelloController {
    @Get('/hello')
    index(@Req() request:Request, @Res() response:Response){
        console.log(request.url);
        console.log(request.body);
        response.status(200).json({message:"Hello W"});
    }

    @Get('/new')
    @HttpCode(201)
    somethingNew(){
        return 'Something new'
    }

    @Get('/notfound')
    @HttpCode(404)
    notFoundPage(){
        return '404 not found'
    }

    @Get('/errorpage')
    @HttpCode(500)
    errorPage(){
        return 'Error page'
    }

    @Get('/ticket/:num')
    getNumber(@Param('num', ParseIntPipe) num: number){
        return num + 14
    }

    @Get('/active/:status')
    isUserActive(@Param('status', ParseBoolPipe) status: boolean){
        console.log(typeof(status));
        return status;
    }

    @Get('/greet')
    @UseGuards(AuthGuard)
    greet(@Query(ValidateuserPipe) query: {name: string, age: number}){
        console.log(typeof(query.name));
        console.log(typeof(query.age));
        return `Hello ${query.name}, you are ${query.age} years old`;
    }
}
