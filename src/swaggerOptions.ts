

export const options = {
    definition:{
        openapi: "3.0.0",
        info: {
            title: "Inventory API",
            version: "1.0.0",
            description: "Control inventoty for your bussines app"
        },
        servers:[ 
            {
                url: "http://localhost:3001"
            }
        ]
    },
    apis: ["src/routes/*.ts"]
}