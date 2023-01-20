import express from 'express';

const router = express.Router()

router.get('/invite', (req, res)=>{
    res.send ('Invite Page')
  })


export default router;
