import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';

@Controller('news')
export class NewsController {
    @Get()
    getUser() {
        return 'YA';
    }

    @Get(':id')
    getOneUser(@Param('id') id) {
        return 'YA';
    }

    @Post()
    postUser(@Body() body) {
        return 'YA';
    }

    @Put(':id')
    putUser(@Body() body, @Param('id') id) {
        return 'YA';
    }

    @Delete(':id')
    deleteUser(@Param('id') id) {
        return 'YA';
    }

}
