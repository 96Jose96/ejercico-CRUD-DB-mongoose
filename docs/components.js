module.exports = {
    components:{
        schemas:{
            TaskTitle:{
                type:'object',
                properties:{
                    title:{
                        type:'string',
                        description:"Title task",
                        example:"Aprender a quitar las cosas que no nos hacen falta"
                    }
                }
            },
            Task:{
              type:'object',
              properties:{
                  _id:{
                    type:'objectId',
                    description:"Id task",
                    example:"2378468732g23rg34764378g"
                },
                title:{
                      type:'string',
                      description:"Title task",
                      example:"Aprender a quitar las cosas que no nos hacen falta"
                },
                completed:{
                  type:'boolean',
                  description:"finish task",
                  example:"false"
                }
              }
          }
        }
    }
  }