import express from 'express';

const router = express.Router()

router.get('/lobby/game', (req, res)=>{
    res.send ('Game Page')
  })


export default router;
