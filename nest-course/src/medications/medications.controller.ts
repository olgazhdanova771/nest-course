import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { MedicationsService } from './medications.service';
import { CreateMedicationDto } from './dto/create-medication.dto';
import { Medication } from './medications.model';


@ApiTags('Препараты')
@Controller('medications')
export class MedicationsController {
    constructor(private medicationsService: MedicationsService) {}

    @ApiOperation({summary: 'Создать препарат'})
    @ApiResponse({status: 200, type: Medication})
    @Post()
    create(@Body() medicationDto: CreateMedicationDto) {
        return this.medicationsService.createMedication(medicationDto);
    }

    @ApiOperation({summary: 'Получить все препараты'})
    @ApiResponse({status: 200, type: [Medication]})
    @Get()
    getAll() {
        return this.medicationsService.getAllMedications();
    }
}