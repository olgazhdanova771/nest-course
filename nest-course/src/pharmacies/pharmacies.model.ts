import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import {Medication} from "../medications/medications.model";
import {MedicationPharmacies} from "./medication-pharmacy.model";

interface PharmacyCreationAttrs {
    pharmacyName: string;
    country: string;
    city: string;
    street: string;
    house: string;
}

@Table({tableName: 'pharmacies'})
export class Pharmacy extends Model<Pharmacy, PharmacyCreationAttrs> {

    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'Аптека Здоровье', description: 'Название аптеки'})
    @Column({type: DataType.STRING, allowNull: false})
    pharmacyName: string;

    @ApiProperty({example: 'Россия', description: 'Страна'})
    @Column({type: DataType.STRING, allowNull: false})
    country: string;

    @ApiProperty({example: 'Москва', description: 'Город'})
    @Column({type: DataType.STRING, allowNull: false})
    city: string;

    @ApiProperty({example: 'Ленина', description: 'Улица'})
    @Column({type: DataType.STRING, allowNull: false})
    street: string;

    @ApiProperty({example: '10', description: 'Номер дома'})
    @Column({type: DataType.STRING, allowNull: false})
    house: string;

    @BelongsToMany(() => Medication, () => MedicationPharmacies)
    medications: Medication[];
}