import {  relations } from 'drizzle-orm';
import { int, date, mysqlTable, varchar, serial, datetime, boolean } from 'drizzle-orm/mysql-core';

// declaring enum in database
export const users = mysqlTable('users', {
  id: serial("id").primaryKey(),
  name: varchar('name', { length: 256 }),
  last_name: varchar('last_name', { length: 256 }),
  username: varchar('username', { length: 256 }),
  password: varchar('password', { length: 256})
})

export const products = mysqlTable('products', {
  id: serial("id").primaryKey(),
  name: varchar('name', { length: 256 }),
  priceUnit: int('priceUnit'),
  quantity: int('quantity'),
  totalStockValue: int('totalStockValue')
  

});

export const outProductsTwo = mysqlTable('outproducts', {
    id: serial("id").primaryKey(),
    nrofactura: int('nrofactura'),
    date: date('date'),
    quantity: int('quantity'),
    productsId: int('products_Id')
})



export const suppliers = mysqlTable('suppliers', {
  id: serial("id").primaryKey(),
  name: varchar('name', { length: 256 }),
  phone: int('phone'),
  direction: varchar('direction', { length: 256 }),
})

export const clients = mysqlTable('clients',{
  id: serial("id").primaryKey(),
  name: varchar('name', { length: 256}),
  phone: int('phone'),
  debt: int('debt'),
  datedebt: datetime('date'),
  nodebt: boolean('nodebt'), 
  quote: int('quote'),
  totaldebt: int('totaldebt'),
  totalquote: int('totalquote'),
  datequote: varchar('datequote', { length: 256 })
})

export const productsRelations = relations(products, ({ many }) => ({
    outProductsTwo: many(outProductsTwo),
  }));
  


export const outProductsRelations = relations(outProductsTwo, ({ one }) => ({
    products: one(products, {
      fields: [outProductsTwo.productsId],
      references: [products.id],
    }),
  }));

  