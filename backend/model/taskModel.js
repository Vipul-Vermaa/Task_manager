import mongoose from 'mongoose'
const taskSchema=mongoose.Schema({
    task:String,
    status:
        {type:String,
        enum:['notcompleted','completed'],
        default:'notcompleted',  
},
createdBy:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
},
},{
    timestamp:true
})

const Task =mongoose.model('Task',taskSchema)
export default Task