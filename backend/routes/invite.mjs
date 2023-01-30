import express from 'express';

const router = express.Router()

router.get('/invite', (req, res)=>{
    res.send ('Invite Page')
  })

router.post('/invite', (req, res)=>{
    res.send ('invite Page post')
})

export default router;
