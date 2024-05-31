import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import {Pharmacy} from "../pharmacies/pharmacies.model";
import {MedicationPharmacies} from "../pharmacies/medication-pharmacy.model";

interface MedicationCreationAttrs {
    pharmacyName: string;
    drugName: string;
    category: string;
    prescription: string;
    quantity: string;
    price: number;
    manufacturer: string;
}

@Table({tableName: 'medications'})
export class Medication extends Model<Medication, MedicationCreationAttrs> {

    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'Аптека Здоровье', description: 'Название аптеки'})
    @Column({type: DataType.STRING, allowNull: false})
    pharmacyName: string;

    @ApiProperty({example: 'Парацетамол', description: 'Название препарата'})
    @Column({type: DataType.STRING, allowNull: false})
    drugName: string;

    @ApiProperty({example: 'Обезболивающее', description: 'Категория препарата'})
    @Column({type: DataType.STRING, allowNull: false})
    category: string;

    @ApiProperty({example: 'Без рецепта', description: 'Требуется ли рецепт'})
    @Column({type: DataType.STRING, allowNull: false})
    prescription: string;

    @ApiProperty({example: '20 таблеток', description: 'Количество препарата'})
    @Column({type: DataType.STRING, allowNull: false})
    quantity: string;

    @ApiProperty({example: 150, description: 'Цена препарата'})
    @Column({type: DataType.FLOAT, allowNull: false})
    price: number;

    @ApiProperty({example: 'ООО Фармстандарт', description: 'Название производителя'})
    @Column({type: DataType.STRING, allowNull: false})
    manufacturer: string;

    @BelongsToMany(() => Pharmacy, () => MedicationPharmacies)
    pharmacies: Pharmacy[];
}