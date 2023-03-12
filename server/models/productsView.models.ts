import { ViewEntity, Connection, ViewColumn } from 'typeorm';

@ViewEntity({
    name: 'all_products',
    expression: `
    SELECT products.name AS product_name, categories.name AS product_categ FROM products JOIN categories ON categories.id = products.category_id;
    `,
})

export class AllProducts {
    @ViewColumn()
    product_name!: string;
  
    @ViewColumn()
    product_price!: number;

    @ViewColumn()
    product_description!: string;

    @ViewColumn()
    product_categ!: string
}