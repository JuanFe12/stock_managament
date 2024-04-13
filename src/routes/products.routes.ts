import { Router } from 'express'
import { addProducts, getAllOutProducts, getProducts, outProducts, updateProduct } from '../controllers/products.controllers'
import validateToken from './validateToken.routes';
import { getFacture } from '../controllers/facture.controllers';

const route = Router()

route.get('/',validateToken, getProducts);
route.get('/Sellproducts', getAllOutProducts);
route.get('/Factureproducts', getFacture);
route.post('/addProdutcs', addProducts);
route.post('/outProducts', outProducts);
route.put('/updateInfo', updateProduct);



export default route