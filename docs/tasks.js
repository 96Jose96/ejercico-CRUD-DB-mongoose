module.exports = {
    paths: {
        '/create': {
            post: {
                tags: {
                    Card: "create a card",
                },
                description: "Create card",
                operationId: "newTask",
                parameters: [],
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/CardSchema",
                            }
                        }
                    }
                }
            },
            responses: {
                201: {
                    description: "Card created successfully",
                },
                500: "Server error",
            }
        },

        '/id/:_id': {
            put: {
                tags: {
                    task: "Update title",
                },
                description: "Update Cards title",
                operationId: "updateCard",
                parameters: [
                    {
                        name: "_id",
                        in: "path",
                        schema: {
                            $ref: "#/components/schemas/_id",
                        },
                        decription: "Id of Card to be updated"
                    },
                ],
                requestBody: {
                    content: {
                        "application/json": {
                            schema: { $ref:  "components/schemas/CardSchema" },
                        }
                    }
                },
                reponses: {
                    200: { description: "Card updated sucessfully" },
                    500: { description: "Server error" }
                }
            }
        }
    } 
}