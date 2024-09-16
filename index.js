//schema validation for mongodb 

db.createCollection("nobel", { //nobel is a collection name
    validator: {
        $jsonSchema: {
            required: ['name', 'price'], //these are the required fields
            properties:{
                name: {
                    bsonType: 'string', //name is string type
                    description: 'must be a string and required'
                },
                price: {
                    bsonType: 'number', //price is number type
                    description: 'must be a number and required'
                }
            }
        }
    },
    validationAction: 'error'
})