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
        },

        '/id/:_id': {
            get: {
                tags: {
                    task: "get all tasks",
                },
                description: "get all tasks",
                operationId: "getTasks",
                parameters: [],
                requestBody: {},
                responses: {
                    200: { description: "Get tasks sucessfully" },
                    500: { description: "Server error" }
                }
            }
        },

        '/id/:_id': {
            delete: {
                tags: {
                    task: "delete task"
                },
                description: "Delete task by id",
                operationId: "deleteTask",
                parameters: [
                    {
                        name: "_id",
                        in: "path",
                        schema: {
                            $ref: "#/components/schemas/_id",
                        },
                        decription: "Id of Card to be deleted"
                    },
                ],
                requestBody: {
                    content: {
                        "application/json": {
                            schema: { $ref:  "components/schemas/CardSchema" },
                        }
                    }
                },
                responses: {
                    200: { description: "Task deleted" },
                    500: { description: "Server error" }
                }
            }
        }
    } 
}