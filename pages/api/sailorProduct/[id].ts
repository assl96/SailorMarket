import { NextApiRequest, NextApiResponse } from "next";
import DB from '@database';


const allProducts = async (request: NextApiRequest, response:NextApiResponse) => {
    const db = new DB()

    const id = request.query.id

    const product = await db.getById(id as string)
console.log(product)
    // response.statusCode = 200
    // response.setHeader('Content-type','application/json')
    // response.end(JSON.stringify({ data: entry}))

    response.status(200).json(product) //this is equal to the green lines
} 

export default allProducts