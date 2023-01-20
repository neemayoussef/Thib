import express from "express";

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Home Page');
  });
router.post('/', (req, res)=>{
  const pseudo = req.body
  console.log(pseudo.json())
})

export default router;

