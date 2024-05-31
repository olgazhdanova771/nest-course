import {ApiProperty} from "@nestjs/swagger";

export class CreateMedicationDto{
    @ApiProperty({example: 'Аптека Здоровье', description: 'Название аптеки'})
    readonly pharmacyName: string;

    @ApiProperty({example: 'Парацетамол', description: 'Название препарата'})
    readonly drugName: string;

    @ApiProperty({example: 'Обезболивающее', description: 'Категория препарата'})
    readonly category: string;

    @ApiProperty({example: 'Без рецепта', description: 'Требуется ли рецепт'})
    readonly prescription: string;

    @ApiProperty({example: '20 таблеток', description: 'Количество препарата'})
    readonly quantity: string;

    @ApiProperty({example: 150, description: 'Цена препарата'})
    readonly price: number;

    @ApiProperty({example: 'ООО Фармстандарт', description: 'Название производителя'})
    readonly manufacturer: string;
}