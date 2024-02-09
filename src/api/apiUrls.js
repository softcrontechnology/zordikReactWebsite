const API_BASE_URL = "https://localhost:7008/api";
export const CAT_IMAGE_BASE_URL = "/assets/images/grocery/category/";
export const PRODUCT_IMG_BASE_URL = "/assets/images/veg-3/cate1/";


export const API_URLS = {
  // auth
  login: `${API_BASE_URL}/AppLogin`,
  signup: `${API_BASE_URL}/CreateUserAccount`,
  contactForm: `${API_BASE_URL}/SubmitContactForm`,
  // product
  getCategories: `${API_BASE_URL}/GetAllCategory`,
  getSubCategories: `${API_BASE_URL}/GetSubCategories`,
  getAllProducts: `${API_BASE_URL}/GetAllProduct`,
  getProductsByTag : `${API_BASE_URL}/GetProductByTag`,
  getProductById : `${API_BASE_URL}/GetProductById`,
  getAllSizes : `${API_BASE_URL}/GetAllSizes`,
  getAllColors : `${API_BASE_URL}/GetAllColors`,
  getProductReview : `${API_BASE_URL}/GetProductReview`,
  // cart api
  addToCart : `${API_BASE_URL}/AddToCart`,
  getCartItem : `${API_BASE_URL}/GetUserCartItems`,
  deleteCartItem : `${API_BASE_URL}/DeleteCartItem`,
  UpdateProductCartQty : `${API_BASE_URL}/UpdateCartQty`,
  // wishlist
  addToWishlist : `${API_BASE_URL}/AddToWishlist`,
  getWishlistItem : `${API_BASE_URL}/GetWishlistItem`,
  deleteWishlistItem : `${API_BASE_URL}/DeleteWishlistItem`,
  // address
  getAddress : `${API_BASE_URL}/GetAddress`,
  addAddress : `${API_BASE_URL}/AddAddress`,
  deleteAddress : `${API_BASE_URL}/DeleteAddress`,
  // order 
  createOrder : `${API_BASE_URL}/CreateUserOrder`,
  updatePaymentID : `${API_BASE_URL}/UpdatePaymentId`,
  clearCart : `${API_BASE_URL}/ClearCartData`,
  cancelOrder : `${API_BASE_URL}/OrderCancel`,
  UpdateOrderStatus : `${API_BASE_URL}/UpdateOrderStatus`,
  getUserOrders : `${API_BASE_URL}/GetUserOrders`

};
