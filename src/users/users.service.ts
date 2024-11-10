import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {

    constructor(private prisma: PrismaService) {}

    /*private users: any[] = [
        {
            id: 1,
            name: 'Jan Nieto',
            phone: '985349722'
        },
        {
            id: 2,
            name: 'Wilfredo Melgar',
            phone: '985349722'
        }
    ]*/

    getUsers(){
        return this.prisma.user.findMany();
    }

    createUsers(user: CreateUserDto){
        return this.prisma.user.create({data: user});
    }
}
