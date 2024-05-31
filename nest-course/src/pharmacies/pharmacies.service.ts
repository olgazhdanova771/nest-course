import {Injectable} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import {CreatePharmacyDto} from "./dto/ create-pharmacy.dto";
import {Pharmacy} from "./pharmacies.model";

@Injectable()
export class PharmaciesService {

    constructor(@InjectModel(Pharmacy) private pharmacyRepository: typeof Pharmacy) {}

    async createPharmacy(dto: CreatePharmacyDto) {
        const pharmacy = await this.pharmacyRepository.create(dto);
        return pharmacy;
    }

    async getPharmacyByPharmacyName(pharmacyName: string) {
        const pharmacy = await this.pharmacyRepository.findOne({where: {pharmacyName}});
        return pharmacy;
    }

}