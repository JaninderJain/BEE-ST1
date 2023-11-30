const asyncHandler = require ('express-async-handler')

const Goal = require ('../model/goalModel')

const { error } = require("console")

const getGoals =asyncHandler( async(req ,res)=> {
    const goals = await Goal.find()
    res.status(200).json(goals)
})

const setGoals = asyncHandler(async(req,res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('please add text ')
    }

    const goal = await Goal.create({
        text: req.body.text,
        author : req.body.author,
        genre: req.body.genre,
        pub_year: req.body.pub_year,
        ISBN : req.body.ISBN,
    })

    try {
        await goal.save();
    } catch (error) {
        console.log(error);
    }
    res.status(200).json(goal)
})

const updateGoal = asyncHandler(async(req,res) => {
    const goal =await Goal.findById(req.params.id)
    
    if(!goal){
        res.status(404)
        throw new Error('Goal not Found')
    }

    const updatedGoal= await Goal.findByIdAndUpdate(req.params.id, req.body,{
        new: true,
    })

    res.status(200).json(updatedGoal)
})

const deleteGoal =asyncHandler(async (req,res) => {

    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(404)
        throw new Error('Goal not Found')
    }
    await goal.deleteOne()

    res.status(200).json({id: req.params.id})
})

module.exports = {
    getGoals,
    setGoals,
    updateGoal,
    deleteGoal,
}