import { Router } from "express";
import { validationResult, matchedData, checkSchema } from "express-validator";
import { studentValidation, studentLoginValidation, studentUpdateValidation } from '../utils/studentDetailsValidation.mjs';
import { isAuth } from "../utils/studentMiddleware.mjs";    // Authentication middleware
import { registrationNo } from "../utils/utils.mjs";    
import Models from "../db/models.mjs";


const router = Router();

// New student registration api
router.post("/student/student-registration", checkSchema(studentValidation), async (req, res) => {    // Student registration api
    const result = validationResult(req);

    if(!result.isEmpty())
        return res.status(400).send({errors: result.array()});   // Validation errors
    
    const data = matchedData(req);          // grabing data posted from client side.

    try {
        const isExist = await Models.Batch.count({   // Find given batch is exists in Batches table
            where: {
              batch_id: data.batch_id
            }
          });
        if(!isExist){                                                   // checks the batch is exists
            return res.status(403).send("Invalid Batch");               // if not exists 
            // redirect to student registration page
        }

        const modelCount = await Models.Student.count({
            where: {
                batch_id: data.batch_id,
                stream_id: data.stream_id
            }
        });

        data.reg_no = registrationNo(data.stream_id, data.batch_id, modelCount);  // Assigning registration number 
          
        const savedStudent = await Models.Student.create({       // Insert into Students table
            reg_no: data.reg_no,
            full_name: data.full_name,
            email: data.email,
            batch_id: data.batch_id,
            stream_id: data.stream_id,
            district: data.district,
            school: data.school,
            gender: data.gender,
            phone: data.phone,
            pwd: data.pwd,
            profile_pic: data.profile_pic
        });
        return res.status(201).send(savedStudent);
        // redirect to login page
    } catch(err) {
        console.log(`Error is: ${err.message}`);     // Mostly catch duplicate key error(Validation error of table)
        return res.sendStatus(400);      
        //return res.redirect("/student/student_registration");   // Forward to registration page again with the msg of already registered email
    }
})

// Student login api
router.post("/student/student-login",checkSchema(studentLoginValidation), async (req, res) => {  // Student login api
    const result = validationResult(req);

    if(!result.isEmpty())                                       // Checks for the validation errors
        return res.status(400).send({errors: result.array()});

    const data = matchedData(req);

    try {
        const findStudent = await Models.Student.findOne({ where: { email: data.email }});   // Search student with the requested api
        
        if(!findStudent)                             // Checks requested is found or not
            throw new Error("Unregistered Student");
            
        if(findStudent.pwd !== data.pwd)             // Checks password for the login request
            throw new Error("Invalid pwd");

        req.session.isAuth = true;                   // Session variable for authorization check
        req.session.reg_no = findStudent.reg_no;     // Store registration number in session

        return res.status(200).send([findStudent, "Login Successfully"]);
        //return res.redirect("/student/student_dashboard");                     // Forward to student dashboard
    } catch(err) {
        console.log(err.message);
        return res.sendStatus(400);
        //return res.redirect("/student/student_login");                     // Forward to same student login page with msg of error
    }
})

// Student profile view api
router.post("/student/student-profile", isAuth, async (req, res) => {    // Student profile request
    try {
        const findStudent = await Models.Student.findOne({ where: { reg_no: req.session.reg_no }});  // Load relevent table
        return res.status(200).send(findStudent);
    } catch (err) {
        console.log(err.message);
        return res.status(400);
    }
})

// Update student details api
router.patch("/student/student-profile-update", isAuth, checkSchema(studentUpdateValidation), async (req, res) => {    // Student registration api
    const result = validationResult(req);

    if(!result.isEmpty())
        return res.status(400).send({errors: result.array()});   // Validation errors
    
    const data = matchedData(req);          // grabing data posted from client side.

    try {
        const isExist = await Models.Batch.count({ where: { batch_id: data.batch_id }});
        if(!isExist){                                                   // checks the batch is exists
            return res.status(403).send("Invalid Batch");               // if not exists 
            // redirect to student profile update page
        }
        
        const savedStudent = await Models.Student.update({       // Update student details
            full_name: data.full_name,
            email: data.email,
            district: data.district,
            school: data.school,
            gender: data.gender,
            phone: data.phone,
            pwd: data.pwd,
            profile_pic: data.profile_pic
        },{
            where: {
                reg_no: req.session.reg_no
            }
        });
        return res.status(201).send(savedStudent);
        // redirect student profile page
    } catch(err) {
        console.log(`Error is: ${err.message}`);     // Mostly catch duplicate key error(Validation error of table)
        return res.sendStatus(400);      
        //return res.redirect("/student/student_profile_update");   // Forward to student profile update again with the msg of already registered email
    }
})


export default router;