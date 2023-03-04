import ICellphones from '../types/dataTypes';
import http from './axiosHttp'

class Services {
    getAllCellphones () {
        return http.get<Array<ICellphones>>("/cellphones");
    }

    getAllProducts () {
        return http.get<Array<ICellphones>>("/products");
    }
}

export default Services