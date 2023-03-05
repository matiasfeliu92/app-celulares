import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: "categories"})
export class Category extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    name!: string
}