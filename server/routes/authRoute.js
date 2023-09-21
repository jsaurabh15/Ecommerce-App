import express from 'express';
import {
    registerController, 
    loginController, 
    testController, 
    forgotPasswordController,
    updateProfileController,
    getOrdersController,
    getAllOrdersController,
    updateOrderStatusController} from "../controllers/authController.js"
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';

const router = express.Router();

//user regitser
router.post('/register', registerController);
//user login
router.post('/login', loginController);
//forgot password
router.post('/forgot-password', forgotPasswordController);
router.get('/test', requireSignIn, isAdmin, testController);
//check if user
router.get('/user-auth', requireSignIn,  (req, res) => {
    res.status(200).send({ok:true});
})
//check if user is admin
router.get('/admin-auth', requireSignIn,  isAdmin,  (req, res) => {
    res.status(200).send({ok:true});
})

//update profile
router.put('/profile', requireSignIn, updateProfileController);

//orders
router.get('/orders', requireSignIn, getOrdersController);

//all orders
router.get('/all-orders', requireSignIn, isAdmin, getAllOrdersController);

//status update order
router.put('/order-status/:orderId', requireSignIn, isAdmin, updateOrderStatusController);

export default router;