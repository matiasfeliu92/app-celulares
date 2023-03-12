import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, OneToOne, JoinColumn, OneToMany, ManyToOne, ManyToMany } from "typeorm";
import { Category } from "./categorias.models";

@Entity({ name: "products" })
export class Product extends BaseEntity {
    // constructor(
    //     id: number, 
    //     name: string, 
    //     price: number,
    //     description: string,
    //     url_web: string,
    //     createdAt: Date,
    //     updatedAt: Date
    //     ) {
    //     this.id = id
    //     this.name = name
    //     this.price = price
    //     this.description = description
    //     this.url_web = url_web
    //     this.createdAt = createdAt
    //     this.updatedAt = updatedAt
    // }
    @PrimaryGeneratedColumn()
    id!: number

    @Column({length: 50, unique: true})
    name!: string

    @Column()
    price!: number

    @Column({length: 200})
    description!: string

    @OneToOne((type) => Category, {
        eager: true,
        cascade: true,
        nullable: true
    })
    @JoinColumn({name: 'category_id'})
    category_id?: Category

    @Column({length: 300, nullable: true})
    url_web? : string

    @Column({length: 300, nullable: true})
    url_img? : string

    @CreateDateColumn()
    createdAt!: Date

    @UpdateDateColumn()
    updatedAt!: Date
}

// export default new Product()