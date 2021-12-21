const { connectToDatabse } = require('../lib/db')
const ObjectId = require('mongodb').ObjectId

export default async function handler(req, res) {
    switch (req.method) {
        case 'GET': {
            return getProjects(req, res)
        }
    }
}