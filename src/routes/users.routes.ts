import { Router } from 'express';
import { addUser, loginUser } from '../controllers/users.controllers';

const router = Router();
/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          description: the auto-generated id of user
 *        name:
 *          type: string
 *          description: the name id of user
 *        last_name:
 *          type: string
 *          description: the last_name id of user
 *        username:
 *          type: string
 *          description: the username of the user
 *        password:
 *          type: string
 *          description: the password of the user
 *      required:
 *        - username
 *        - password
 *      example:
 *        name: juan
 *        last_name: arias
 *        username: pa12
 *        password: 13
 *    UserNotFound:
 *      type: object
 *      properties:
 *        msg:
 *          type: string
 *          description: A message for the not found User
 *      example:
 *        msg: User was not found
 *
 */

/**
 * @swagger
 * /api/users:
 *  post:
 *    summary: create a new user
 *    tags: [Users]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/User'
 *    responses:
 *      200:
 *        description: the users was successfully created
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      500:
 *        description: Some server error
 *
 */
router.post('/', addUser);

/**
 * @swagger
 * components:
 *  schemas:
 *    Login:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          description: the auto-generated id of user
 *        name:
 *          type: string
 *          description: the name id of user
 *        last_name:
 *          type: string
 *          description: the last_name id of user
 *        username:
 *          type: string
 *          description: the username of the user
 *        password:
 *          type: string
 *          description: the password of the user
 *      example:
 *        Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InBhMTIiLCJpYXQiOjE3MTMwNzc3OTZ9.YFpYs6hP6CXlX864GB71X5fdcRqfQe9FUs5sL-pGOV8
 *    LoginNotFound:
 *      type: object
 *      properties:
 *        msg:
 *          type: string
 *          description: A message for the not found User
 *      example:
 *        msg: User was not found
 *
 */


/**
 * @swagger
 * /api/users/login:
 *  post:
 *    summary: login user
 *    tags: [Users]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/User'
 *    responses:
 *      200:
 *        description: the users was login successfully
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Login'
 *      500:
 *        description: Some server error
 *
 */

router.post('/login', loginUser)

export default router;  