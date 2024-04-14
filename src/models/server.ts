import  express, { Application}  from "express";
import connection from "../db/connection";
import routesProducts from '../routes/products.routes';
import routesUsers from '../routes/users.routes';
import routesSales from '../routes/sales.routes';
import routesSuppliers from '../routes/suppliers.routes';
import routesClients from '../routes/clients.routes';
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import { options } from "../swaggerOptions";

class Server {

    private app: Application;
    private port: string;

    constructor (){
        this.app = express();
        this.port = process.env.PORT || '3000';
        this.listen();
        this.connectDB();
        this.middlewares();
        this.routes();
    }

    listen(){
        this.app.listen(this.port, ()=>{
           console.log('Server is running on port: ', this.port)
        })
    }

    connectDB(){
        connection.connect((err) =>{
            if(err){
                console.log(err);
                
            }else{
                console.log('Database is connected succesfully');
                
            }
        })
    }

    routes(){
        this.app.use('/api/products', routesProducts)
        this.app.use('/api/sales', routesSales)
        this.app.use('/api/suppliers', routesSuppliers)
        this.app.use('/api/Clients', routesClients)
        const spec = swaggerJsDoc(options)

        this.app.use('/api/users', routesUsers)
        this.app.use('/docs', swaggerUi.serve, swaggerUi.setup(spec))

    }

    middlewares(){
        this.app.use(express.json())
        this.app.use(cors())
    }
}

export default Server;