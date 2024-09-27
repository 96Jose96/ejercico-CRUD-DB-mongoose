module.exports = {
    components: {
        schemas: {
            CardSchema: {
                type: 'object',
                properties: {
                    _id: 'objectId',
                    description: 'task identification number',
                    example: '66f67cc2780f44f7ff3fbb6e'
                },
                title: {
                    type: 'string',
                    description: 'tasks name',
                    example: 'Learn Mongo'
                },
                completed: {
                    type: 'boolean',
                    description: 'mark as complete the task',
                    example: 'true'
                }, 
            }
        }
    }
}