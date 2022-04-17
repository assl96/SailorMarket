import { IncomingMessage, ServerResponse } from "http";
import DB from '@database';


const allProducts = async (request: IncomingMessage, response:ServerResponse) => {
    const db = new DB()
    const allEnties = await db.getAll()
    const length = allEnties.length

    response.statusCode = 200
    response.setHeader('Content-type','application/json')
    response.end(JSON.stringify({length, data: allEnties}))
} 

export default allProducts