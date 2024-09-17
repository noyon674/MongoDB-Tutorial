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
});



//update schema
db.runCommand({
    //colMod = collection modifier
    collMod: 'nobel', 
    validator: {
        $jsonSchema: {
            required: ['name', 'price', 'authors'],
            properties:{
                name: {
                    bsonType: 'string',
                    description: 'must be a string and required'
                },
                price: {
                    bsonType: 'number',
                    description: 'must be a number and required'
                },
                authors: {
                    bsonType: 'array',
                    description: 'must be a array and required',
                    items:{
                        bsonType: 'object',
                        required: ['name', 'email'],
                        properties: {
                            name:{
                                bsonType: 'string',
                            },
                            email:{
                                bsonType: 'string'
                            }
                        }
                    }
                }
            }
        }
    },
    validationAction: 'error'
})


//practice agein
//create schema
db.createCollection('nobel', {
    validator:{
        $jsonSchema: {
            required: ['name', 'price'],
            properties:{
                name:{
                    bsonType: 'string',
                    description: 'must be string and required'
                },
                price:{
                    bsonType: 'number',
                    description: 'must be number and required'
                }
            }
        }
    },
    validationAction: 'error'
})

//update schema
db.runCommand({
    collMod: 'nobel',
    validator:{
        $jsonSchema:{
            required: ['name', 'price', 'authors'],
            properties: {
                name: {
                    bsonType: 'string',
                    description: 'must be string and required'
                },
                price: {
                    bsonType: 'number',
                    description: 'must be number and required'
                },
                authors:{
                    bsonType: 'array',
                    description: 'must be an array and required',
                    items:{
                        bsonType: 'object',
                        required: ['name', 'email'],
                        properties: {
                            name: {
                                bsonType: 'string',
                            },
                            email: {
                                bsonType: 'string'
                            }
                        }
                    }
                }
            }
        }
    },
    validationAction: 'error'
})