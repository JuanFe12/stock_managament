import { Router } from 'express'
import { addSuppliers, getSuppliers } from '../controllers/suppliers.controllers';

const route = Router()

route.get('/', getSuppliers);
route.post('/addSuppliers', addSuppliers);

export default route