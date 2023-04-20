import { Body, Controller, Get, Post } from '@nestjs/common';
import { TemperatureService } from './temperature.service';
import CreateTemperatureDto from './Dto/createTemperature.dto';

@Controller('temperature')
export class TemperatureController {

    constructor(
        private readonly temperatureService: TemperatureService,
    ) { }


    @Get()
    async findAll() {
        return this.temperatureService.findAll();
    }

    @Post()
    async create(@Body() createTemperatureDto: CreateTemperatureDto) {
        return this.temperatureService.create(createTemperatureDto);
    }
}
