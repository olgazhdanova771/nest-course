import { Module} from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { MedicationsController } from './medications.controller';
import { MedicationsService } from './medications.service';
import { Medication } from './medications.model';

@Module({
  controllers: [MedicationsController],
  providers: [MedicationsService],
  imports: [
    SequelizeModule.forFeature([Medication]),
  ],
})
export class MedicationsModule {}