import express from 'express';
import {requireSignIn, isAdmin} from '../middlewares/authMiddleware.js'
import { braintreePaymentController, braintreeTokenController, createProductController, 
    deleteProductController, 
    getProductController, 
    getSingleProductController,
    productCategoryController,
    productCountController,
    productFiltersController,
    productListController,
    productPhotoController,
    relatedProductController,
    searchProductController,
    updateProductController} from '../controllers/productController.js';
import formidable from 'express-formidable'

const router = express.Router();

//create product
router.post('/create-product', requireSignIn, isAdmin, formidable(), createProductController);
//update product
router.put('/update-product/:pid', requireSignIn, isAdmin, formidable(), updateProductController);
//get all products
router.get('/get-product', getProductController);
//get single product
router.get('/get-product/:slug',getSingleProductController);
//get photo
router.get('/product-photo/:pid', productPhotoController);
//delete product
router.delete('/delete-product/:pid',  deleteProductController);
//filter product
router.post('/product-filters', productFiltersController);
//product count
router.get('/product-count', productCountController);
//product per page
router.get('/product-list/:page', productListController);
//search product
router.get('/search/:keyword', searchProductController);
//similiar products
router.get('/related-product/:pid/:cid', relatedProductController);
//category wise products
router.get('/product-category/:slug', productCategoryController);

//payments route
//token
router.get('/braintree/token', braintreeTokenController);
//payments
router.post('/braintree/payment', requireSignIn, braintreePaymentController);

export default router;