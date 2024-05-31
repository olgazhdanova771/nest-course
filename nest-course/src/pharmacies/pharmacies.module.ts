import { Module} from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { PharmaciesController } from './pharmacies.controller';
import { PharmaciesService } from './pharmacies.service';
import { Pharmacy } from './pharmacies.model';


@Module({
  controllers: [PharmaciesController],
  providers: [PharmaciesService],
  imports: [
    SequelizeModule.forFeature([Pharmacy]),
  ],
})
export class PharmaciesModule {}