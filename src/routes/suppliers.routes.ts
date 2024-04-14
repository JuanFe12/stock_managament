import { Router } from 'express'
import { addSuppliers, getSuppliers } from '../controllers/suppliers.controllers';

const route = Router()

/**
 * @swagger
 * components:
 *  schemas:
 *    Suppliers:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          description: the auto-generated id of the supplier
 *        name:
 *          type: string
 *          description: the name of the supplier
 *        phone:
 *          type: string
 *          description: the phone of the supplier
 *      example:
 *        id: 1
 *        name: Babaria
 *        phone: 6017453333
 *    SuppliersNotFound:
 *      type: object
 *      properties:
 *        msg:
 *          type: string
 *          description: A message for the not found Suppliers
 *      example:
 *        msg: the supplier was not found
 *
 */


/**
 * @swagger
 * /api/suppliers:
 *  get:
 *    summary: Returns all the suppliers
 *    tags: [Suppliers]
 *    responses:
 *      200:
 *        description: getting all suppliers
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Suppliers'
 */

route.get('/', getSuppliers);

/**
 * @swagger
 * /api/suppliers/addSuppliers:
 *  post:
 *    summary: create a new supplier
 *    tags: [Suppliers]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Suppliers'
 *    responses:
 *      200:
 *        description: the supplier was successfully created
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Suppliers'
 *      500:
 *        description: Some server error
 *
 */

route.post('/addSuppliers', addSuppliers);

export default route