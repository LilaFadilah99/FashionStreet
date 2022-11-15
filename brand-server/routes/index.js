const router = require("express").Router();
const { authentication, authorization, authorizationOnlyAdmin } = require("../middlewares/auth");
const Controller = require("../controllers/index.js");

// router.post("/register", Controller.userRegister);
// router.post("/admin/register", Controller.adminRegister);
router.post("/register", Controller.adminRegister);
router.post("/login", Controller.userLogin);
router.post("/admin/login", Controller.userLogin);
// get produk
router.get("/product", Controller.handleGetProduct);

router.use(authentication);
router.get("/admin/product", authorizationOnlyAdmin, Controller.adminGetProduct);
router.post("/product", authorizationOnlyAdmin, Controller.handleAddProduct);
router.get("/product/:id", Controller.getProductById);
router.get("/admin/product/:id", Controller.adminGetProductById);
router.post("/favorite/:id", Controller.handleAddFavorite);
router.get("/favorite", Controller.handleGetFavorite);
router.get("/shoppingBag", Controller.handleGetShoppingBag);
router.post("/shoppingBag/:id", Controller.handleAddShoppingBag);
router.put("/product/:id", Controller.handleEditProduct);
router.delete("/product/:id", authorization, Controller.handleDeleteProduct);
router.delete("/favorite/:id", Controller.handleDeleteFavorite);
router.delete("/shoppingBag/:id", Controller.handleDeleteShoppingBag);

module.exports = router;
