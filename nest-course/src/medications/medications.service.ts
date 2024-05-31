import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Medication } from './medications.model';
import { CreateMedicationDto } from './dto/create-medication.dto';

@Injectable()
export class MedicationsService {

    constructor(@InjectModel(Medication) private medicationRepository: typeof Medication) {}

    async createMedication(dto: CreateMedicationDto) {
        const medication = await this.medicationRepository.create(dto);
        return medication;
    }

    async getAllMedications() {
        const medications = await this.medicationRepository.findAll({include: {all: true}});
        return medications;
    }

}