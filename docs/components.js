module.exports = {
    components:{
        schemas:{
            TaskTitle:{
                type:'object',
                properties:{
                    title:{
                        type:'string',
                        description:"Title task",
                        example:"Learn Swagger"
                    }
                }
            },
            Task:{
              type:'object',
              properties:{
                  _id:{
                    type:'string',
                    description:"Id task",
                    example:"2378468732g23rg34764378g"
                },
                title:{
                      type:'string',
                      description:"Title task",
                      example:"Learn Swagger"
                },
                completed:{
                  type:'boolean',
                  description:"Mark a task completed",
                  example:"false"
                }
              }
          }
        }
    }
  }