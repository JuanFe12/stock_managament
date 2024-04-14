import { Router } from 'express'
import { addClients, getClients, updateClientsQuote } from '../controllers/clients.controllers';

const route = Router()

/**
 * @swagger
 * components:
 *  schemas:
 *    Clients:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          description: the auto-generated id of clients
 *        name:
 *          type: string
 *          description: the name of the client
 *        phone:
 *          type: int
 *          description: ohone of the client
 *        debt:
 *          type: int
 *          description: this happens when the clients needs a credit
 *        datedebt:
 *          type: string
 *          description: date when the client gets the credit
 *        nodebt:
 *          type: boolean
 *          description: if have credit is yes, if dont have is false.
 *        quote:
 *          type: int
 *          description: is an amount of money yo pay the debt
 *        totaldebt:
 *          type: int
 *          description: is a operation between (debt - quote)
 *        totalquote:
 *          type: int
 *          description: is the sum of the multiple quote the client can be
 *        datequote:
 *          type: string
 *          description: date when the client pay the debts
 *      example:
 *        id: 1
 *        name: Jhon
 *        phone: 0434381074
 *        debt: 100000
 *        datedebt: "04-04-2024"
 *        nodebt: true
 *        quote: 0
 *        totaldebt: 100000
 *        totalquote: 0
 *        datequote: "" 
 *    ClientNotFound:
 *      type: object
 *      properties:
 *        msg:
 *          type: string
 *          description: A message for the not found client
 *      example:
 *        msg: The client was not found
 *  parameters:
 *    clientsId:
 *      in: path
 *      name: id
 *      required: true
 *      schema:
 *        type: string
 *      description: the clients id
 *
 *
 */


/**
 * @swagger
 * /api/Clients:
 *  get:
 *    summary: create a new Clients
 *    tags: [Clients]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Clients'
 *    responses:
 *      200:
 *        description: the clients was successfully created
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Clients'
 *      500:
 *        description: Some server error
 *
 */
route.get('/', getClients);

/**
 * @swagger
 * /api/Clients/addClients:
 *  post:
 *    summary: create a new clients
 *    tags: [Clients]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Clients'
 *    responses:
 *      200:
 *        description: the clients was successfully created
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Clients'
 *      500:
 *        description: Some server error
 *
 */

route.post('/addClients', addClients);

/**
 * @swagger
 * components:
 *  schemas:
 *    ResponseClients:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          description: the auto-generated id of clients
 *        name:
 *          type: string
 *          description: the name of the client
 *      example:
 *        id: 1
 *        name: Jhon
 *    ClientsNotFound:
 *      type: object
 *      properties:
 *        msg:
 *          type: string
 *          description: A message for the not found client
 *      example:
 *        msg: The client was not found
 */


/**
 * @swagger
 * /api/Clients/updateClientsQuote:
 *  put:
 *    summary: Update a client by quote
 *    tags: [Clients]
 *    parameters:
 *      - $ref: '#/components/parameters/clientsId'
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Clients'
 *    responses:
 *      200:
 *        description: The client was updated 
 *        content:
 *          application/json:
 *            schema:
 *            $ref: '#/components/schemas/ResponseClients'
 *      404:
 *        description: the product was not found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ClientsNotFound'
 *
 */

route.put('/updateClientsQuote', updateClientsQuote);


export default route