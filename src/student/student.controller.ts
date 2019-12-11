import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';

@Controller('student')
export class StudentController {
    @Get()
    getUser() {
        return 'Good';
    }

    @Get(':id')
    getOneUser(@Param('id') id) {
        return 'Good';
    }

    @Post()
    postUser(@Body() body) {
        return 'Good';
    }

    @Put(':id')
    putUser(@Body() body, @Param('id') id) {
        return 'Good';
    }

    @Delete(':id')
    deleteUser(@Param('id') id) {
        return 'Good';
    }

}
