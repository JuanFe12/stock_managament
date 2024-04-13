import { Router } from 'express'
import { addClients, getClients, updateClientsQuote } from '../controllers/clients.controllers';

const route = Router()

route.get('/', getClients);
route.get('/addClients', addClients);
route.put('/updateClientsQuote', updateClientsQuote);



export default route