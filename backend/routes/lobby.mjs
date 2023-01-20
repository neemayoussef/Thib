import express from "express";

const router = express.Router();

router.get('/lobby', (req, res)=>{
    res.send ('Lobby Page')
  })


export default router;

