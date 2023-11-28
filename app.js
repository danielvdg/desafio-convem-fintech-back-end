import express from 'express';
import transactionRoutes from './src/routes/transactionRoutes'

class App {
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(express.urlencoded({extended:true}));
        this.app.use(express.json())
    }

    routes() {
        this.app.use('/',transactionRoutes);
    }

    
}

export default new App().app;