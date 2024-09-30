module.exports = {
    paths: {
      "/create": {
        post: {
          tsummary: "",
          tags: ["Create a task"],
          description: "Create task",
          operationId: "createTask",
          parameters: [],
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/TaskTitle",
                },
              },
            },
          },
          responses: {
            201: {
              description: "Task created successfully",
            },
            500: {
              description: "Server error",
            },
          },
        }
      },
      "/": {
        get: {
          summary: "",
          tags: ["Get all tasks"],
          description: "Get all tasks",
          operationId: "getTask",
          parameters: [],
          responses: {
            200: {
              description: "Get all tasks successfully",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/Task",
                  },
                },
              },
            },
            500: {
              description: "Server error",
            },
          },
        }
      },
      "/id/{_id}": {
        put: {
          summary: "",
          tags: ["Update a task"],
          description: "Update task",
          operationId: "updateTask",
          parameters: [
            {
              name: "_id",
              in: "path",           
              description: "Id of task to update"
            }
          ],
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/TaskTitle",
                },
              },
            },
          },
          responses: {
            200: {
              description: "Task change successfully",
            },
            500: {
              description: "Server error",
            },
          },
        },
        delete: {
          summary: "",
          tags: ["Delete a task"],
          description: "Delete task",
          operationId: "deleteTask",
          parameters: [
            {
              name: "_id",
              in: "path",           
              description: "Id of task to delete"
            }
          ],
          responses: {
            200: {
              description: "Task deteled successfully",
            },
            500: {
              description: "Server error",
            },
          },
        }
  
      },
      
    },
  };