import { Router } from "express";
import studentsRouter from "./students.mjs";      // routes for student api's
import commonRouter from "./common.mjs";          // routes for common api's
import adminRouter from './admin.mjs';            // routes for admin api's

const router = Router();

router.use(studentsRouter);
router.use(commonRouter);
router.use(adminRouter);

export default router;