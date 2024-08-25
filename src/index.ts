import { config } from "dotenv"
import Product from "./types/product"

config()

import axios from "axios"

async function extractProducts() {
    // @ts-ignore
    const { data } = await axios.get(process.env.API_URL_SCRAPE)
    const totalPerPage = data.count
    const results: Array<Product> = data.products
    let products: Array<Product> = []
    for (let index = 0; index < totalPerPage; index += 1) {
        products.push(results[index])
    }

    console.log(products)
}

extractProducts()