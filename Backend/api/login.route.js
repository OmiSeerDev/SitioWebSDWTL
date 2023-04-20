import  express from "express";

const router = express.Router();
router.route('/').get((res,req)=> {
    res = console.info("Hello World!");
});

export default router;