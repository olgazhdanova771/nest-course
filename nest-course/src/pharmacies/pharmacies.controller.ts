import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {ApiTags } from '@nestjs/swagger';
import { PharmaciesService } from './pharmacies.service';
import {CreatePharmacyDto} from "./dto/ create-pharmacy.dto";

@ApiTags('Аптеки')
@Controller('pharmacies')
export class PharmaciesController {
    constructor(private pharmaciesService: PharmaciesService) {}

    @Post()
    create(@Body() dto: CreatePharmacyDto) {
        return this.pharmaciesService.createPharmacy(dto);
    }

    @Get('/:pharmacyName')
    getByPharmacyName(@Param('pharmacyName') pharmacyName: string) {
        return this.pharmaciesService.getPharmacyByPharmacyName(pharmacyName);
    }

}