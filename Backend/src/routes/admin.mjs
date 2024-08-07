import { Router } from "express";
import { validationResult, matchedData, checkSchema } from "express-validator";
import { batchValidation } from "../utils/adminDetailsValidation.mjs";   // import admin validations
import Models from "../db/models.mjs";
//import { isAuth } from "../utils/middleware.mjs";    // Authentication middleware

const router = Router();

// New batch registering api
router.post("/admin/batch-registration", checkSchema(batchValidation), async (req, res) => {
    const result = validationResult(req);

    if(!result.isEmpty())
        return res.status(400).send({errors: result.array()});   // Validation errors - Redirect to add_batch page

    const data = matchedData(req);          // grabing data posted from client side.
    
    const parseBatch = parseInt(data.batch_id);

    if(isNaN(parseBatch)) {
        return res.status(400).send("Bad request. Invalid batch");      // If batch is not numeric it gives parseBatch == NaN
        // return res.redirect("/admin/add_batch");                  // redirect to add new batch page
    }

    //const batch = await Batch.create({ batch_id: data.batch_id });
        //.then((batch) => res.status(201).send(batch))         // redirect(admin/add_new)
        //.catch((err) => res.status(400).send(err.message));   // redirect(admin/add_batch)

    try {
        const batch = await Models.Batch.create({ batch_id: data.batch_id }); // Add new batch to batches table
        res.status(201).send(batch); // redirect(admin/add_new)
    } catch (err) {
        res.status(400).send(err.message); // redirect(admin/add_batch)
    }


})

export default router;