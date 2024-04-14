import { Router } from 'express'
import { addProducts, getAllOutProducts, getProducts, outProducts, updateProduct } from '../controllers/products.controllers'
import validateToken from './validateToken.routes';
import { getFacture } from '../controllers/facture.controllers';

const route = Router()


/**
 * @swagger
 * components:
 *  schemas:
 *    Product:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          description: the auto-generated id of user
 *        name:
 *          type: string
 *          description: the name of the product
 *        priceUnit:
 *          type: int
 *          description: the price per unit of the product
 *        quantity:
 *          type: int
 *          description: the quantity of the product purchased
 *        totalStockValue:
 *          type: int
 *          description: this column is automatic is a operation between (priceUnit * quantity)
 *      example:
 *        id: 1
 *        name: Cerveza Pilsen
 *        priceUnit: 3000
 *        quantity: 30
 *        totalStockValue: 90000
 *      required:
 *        - token
 *    ProductNotFound:
 *      type: object
 *      properties:
 *        msg:
 *          type: string
 *          description: A message for the not found Product
 *      example:
 *        msg: The product was not found
 * parameters:
 *    productsId:
 *      in: path
 *      name: id
 *      required: true
 *      schema:
 *        type: string
 *      description: the products id
 *
 */

/**
 * @swagger
 * components:
 *  schemas:
 *    LoginToken:
 *      type: object
 *      example:
 *        token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InBhMTIiLCJpYXQiOjE3MTMwMTI1MDd9.bdDBBj_XuEDg7j-A4crV8kwGKlsFJRMPso53zqIbTGk
 *    LoginTokenNotFound:
 *      type: object
 *      properties:
 *        msg:
 *          type: string
 *          description: A message for the not found Product
 *      example:
 *        msg: The Token was not found
 *
 */

/**
 * @swagger
 * components:
 *  schemas:
 *    Responseproduct:
 *      type: object
 *      example:
 *        name: Cerveza pilsenn
 *    LoginTokenNotFound:
 *      type: object
 *      properties:
 *        msg:
 *          type: string
 *          description: A message for the not found Product
 *      example:
 *        msg: The Token was not found
 *
 */


/**
 * @swagger
 * /api/products:
 *  get:
 *    summary: Returns a token for unique user
 *    tags: [Product]
 *    responses:
 *      200:
 *        description: getting the token
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/LoginToken'
 */
route.get('/',validateToken, getProducts);

/**
 * @swagger
 * /Sellproducts:
 *  get:
 *    summary: Returns a token for unique user
 *    tags: [Product]
 *    responses:
 *      200:
 *        description: getting the token
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Product'
 */

route.get('/Sellproducts', getAllOutProducts);
route.get('/Factureproducts', getFacture);

/**
 * @swagger
 * /api/products/addProdutcs:
 *  post:
 *    summary: create a new product
 *    tags: [Product]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Product'
 *    responses:
 *      200:
 *        description: the product was successfully created
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Product'
 *      500:
 *        description: Some server error
 *
 */

route.post('/addProdutcs', addProducts);

/**
 * @swagger
 * components:
 *  schemas:
 *    Outproduct:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          description: the auto-generated id of outproduct
 *        nrofactura:
 *          type: int
 *          description: this is the id of the facture
 *        date:
 *          type: string
 *          description: date of the facture
 *        quantity:
 *          type: int
 *          description: the quantity of the product sell
 *        productId:
 *          type: int
 *          description: this a relation one to many of the table products
 *      example:
 *        id: 1
 *        nrofactura: 1
 *        date: 13-04-2024
 *        quantity: 5
 *        productId: 1
 *    OutproductNotFound:
 *      type: object
 *      properties:
 *        msg:
 *          type: string
 *          description: A message for the not found OutProduct
 *      example:
 *        msg: The Outproduct was not found
 * 
 *  parameters:
 *    productsId:
 *      in: path
 *      name: id
 *      required: true
 *      schema:
 *        type: string
 *      description: the products id
 *
 */

/**
 * @swagger
 * /api/products/outProducts:
 *  post:
 *    summary: create a new outproduct
 *    tags: [Outproduct]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Outproduct'
 *    responses:
 *      200:
 *        description: the outproduct was successfully created
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Outproduct'
 *      500:
 *        description: Some server error
 *
 */


route.post('/outProducts', outProducts);


/**
 * @swagger
 * /api/products/updateInfo:
 *  put:
 *    summary: Update a product by name
 *    tags: [Product]
 *    parameters:
 *      - $ref: '#/components/parameters/productsId'
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Product'
 *    responses:
 *      200:
 *        description: The updated product 
 *        content:
 *          application/json:
 *            schema:
 *            $ref: '#/components/schemas/Responseproduct'
 *      404:
 *        description: the product was not found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ProductNotFound'
 *
 */
route.put('/updateInfo', updateProduct);



export default route