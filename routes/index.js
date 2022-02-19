import express from "express";
// import controllers
import { getSwitchById,saveSwitch,updateSwitch,deleteSwitch,getSwitchesWithPagination } from "../controllers/switchController.js";
 
// express router
const router = express.Router();


/*  
    GET Switches
    /switch?page=4&limit=10 - use pagination.
    /switch - get all switches
*/
router.get('/', getSwitchesWithPagination);

// GET single Switch
router.get('/:id', getSwitchById);

// CREATE Switch
router.post('/', saveSwitch);

// UPDATE Switch
router.patch('/:id', updateSwitch);

// DELETE Switch
router.delete('/:id', deleteSwitch);
 
// export router
export default router;