import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Temperature } from './Entity/temperature.entity';
import { Repository } from 'typeorm';
import CreateTemperatureDto from './Dto/createTemperature.dto';

@Injectable()
export class TemperatureService {
    constructor(
        @InjectRepository(Temperature)
        private readonly temperatureRepository: Repository<Temperature>,
    ) { }

    async findAll(): Promise<Temperature[]> {
        return await this.temperatureRepository.find({
            order: {
                date: "DESC"
            }
        });
    }

    async create(temperature: CreateTemperatureDto): Promise<Temperature> {
        return this.temperatureRepository.save(temperature);
    }
}
