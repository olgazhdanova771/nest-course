import {Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {Pharmacy} from "./pharmacies.model";
import {Medication} from "../medications/medications.model";


@Table({tableName: 'medication_pharmacy', createdAt: false, updatedAt: false})
export class MedicationPharmacies extends Model<MedicationPharmacies> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ForeignKey(() => Pharmacy)
    @Column({type: DataType.INTEGER})
    pharmacyId: number;

    @ForeignKey(() => Medication)
    @Column({type: DataType.INTEGER})
    medicationId: number;

}