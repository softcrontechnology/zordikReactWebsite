// 1. Add To Cart Function
// 2. Add to wishlist function
// 3. Delete Wishlist Item
// 4. Delete Cart Item
// 5. Update Cart Qty (increase or decrease)
// 6. Delete Address API Code
// 7. Get User Cart Data API
// 8. Clear User Cart API
// 9. Create Order API
// 10. Update Payment id when payment is successfull
// 11. Cancel Placed Order API
// 12. Update Order Status API
// 13. Move To Cart Api


import { fetchData } from "./apiService";
import { API_URLS } from "./apiUrls";
import { toast } from "react-toastify";

const UserID = localStorage.getItem('user_id');



// 1. Add To Cart Function
export const AddToCart = async (productId, variationId, qty) => {

  const requestBody = {
    productId: productId,
    variationId: variationId,
    qty: qty || 1,
    userId: UserID,
  };

  try {
    const response = await fetchData(API_URLS.addToCart, requestBody);
    if (response.responseCode === 1) {
      toast.success(response.responseMessage, {
        toastId: "unique-success-toast",
      });
    } else {
      // Show error toast
      toast.error(response.responseMessage, {
        toastId: "unique-error-toast",
      });
    }
  } catch (error) {
    // Handle error as needed
    toast.error(error.message, {
      toastId: "unique-error-toast",
    });
  }
};


// 2. Add to wishlist function
export const AddToWishlist = async (productId, variationId, qty) => {

  const requestBody = {
    productId: productId,
    variationId: variationId,
    qty: qty || 1,
    userId: UserID,
  };

  try {
    const response = await fetchData(API_URLS.addToWishlist, requestBody);
    if (response.responseCode === 1) {
      toast.success(response.responseMessage, {
        toastId: "unique-success-toast",
      });
    } else {
      // Show error toast
      toast.error(response.responseMessage, {
        toastId: "unique-error-toast",
      });
    }
  } catch (error) {
    // Handle error as needed
    toast.error(error.message, {
      toastId: "unique-error-toast",
    });
  }
};


// 3. Delete Wishlist Item
export const RemoveWishlistItem = async (wishlist_id) => {

  const requestBody = {
    wishlistId: wishlist_id,
  };

  try {
    const response = await fetchData(API_URLS.deleteWishlistItem, requestBody);

    if (response.responseCode === 1) {
      toast.success(response.responseMessage, {
        toastId: "unique-success-toast",
      });
    }
    else {
      toast.error(response.responseMessage, {
        toastId: "unique-error-toast",
      });
    }

  } catch (error) {
    toast.error(error.message, {
      toastId: "unique-error-toast",
    });
  }
};


// 4. Delete Cart Item
export const RemoveCartItem = async (cart_id) => {

  const requestBody = {
    cartId: cart_id,
  };

  try {
    const response = await fetchData(API_URLS.deleteCartItem, requestBody);

    if (response.responseCode === 1) {
      toast.success(response.responseMessage, {
        toastId: "unique-success-toast",
      });
    }
    else {
      toast.error(response.responseMessage, {
        toastId: "unique-error-toast",
      });
    }

  } catch (error) {
    toast.error(error.message, {
      toastId: "unique-error-toast",
    });
  }
};


// 5. Update Cart Qty (increase or decrease)
export const UpdateProductCartQty = async (qty, cart_id, action) => {

  let set_qty;

  if (action === 'increase' && qty < 10) {
    set_qty = qty + 1;
  }
  else if (action === 'decrease' && qty > 1) {
    set_qty = qty - 1;
  }

  if (set_qty !== null && set_qty !== undefined) {
    const requestBody = {
      qty: set_qty,
      cartId: cart_id,
    };

    try {
      const response = await fetchData(API_URLS.UpdateProductCartQty, requestBody);

      if (response.responseCode === 1) {
        toast.success(response.responseMessage, {
          toastId: "unique-success-toast",
        });
      }
      else {
        toast.error(response.responseMessage, {
          toastId: "unique-error-toast",
        });
      }

    } catch (error) {
      toast.error(error.message, {
        toastId: "unique-error-toast",
      });
    }
  }
};


// 6. ************ Delete Address API Code ***************
export const DeleteAddress = async (id) => {

  const requestBody = {
    addressId: id,
  };

  try {
    const response = await fetchData(API_URLS.deleteAddress, requestBody);

    if (response.responseCode === 1) {
      toast.success(response.responseMessage, {
        toastId: "unique-success-toast",
      });
    }
    else {
      toast.error(response.responseMessage, {
        toastId: "unique-error-toast",
      });
    }

  } catch (error) {
    toast.error(error.message, {
      toastId: "unique-error-toast",
    });
  }
};



// 7. ******************** Get User Cart Data API ************************************
export const GetCartData = async (user_id) => {

  const requestGetBody = {
    userId: user_id,
  };

  try {
    const response = await fetchData(API_URLS.getCartItem, requestGetBody);
    if (response.responseCode === 1) {
      const cartData = JSON.parse(response.responseData);
      return cartData;
    }
    else {
      // Show error toast
      toast.error(`Error: ${response.responseMessage}`, {
        toastId: "unique-error-toast",
      });
    }
  }
  catch (error) {
    // Handle error as needed
    toast.error(`Error: ${error.message}`, {
      toastId: "unique-error-toast",
    });
  }
};



// 8. ******************** Clear User Cart API ************************************
export const ClearCart = async (user_id) => {
  const requestBody = {
    UserId: user_id,
  };

  try {
    const response = await fetchData(API_URLS.clearCart, requestBody);

    if (response.responseCode === 1) {
      return true;
    }
    else {
      toast.error(response.responseMessage, {
        toastId: "unique-error-toast",
      });
      return false;
    }

  } catch (error) {
    toast.error(error.message, {
      toastId: "unique-error-toast",
    });
    return false;
  }
};


// 9. ******************** Create Order API ************************************
export const CreateOrder = async (payment_id, address_id, totalAmt, gst, shipping) => {
  const requestBody = {
    UserId: UserID,
    PaymentId: payment_id || 0,
    AddressId: address_id,
    TotalAmount: totalAmt,
    GstAmount: gst,
    ShippingAmount: shipping
  };

  try {
    const response = await fetchData(API_URLS.createOrder, requestBody);

    if (response.responseCode === 1) {
      const data = JSON.parse(response.responseData);
      const OrderId = data[0].order_id;
      return OrderId;
    }
    else {
      toast.error(response.responseMessage, {
        toastId: "unique-error-toast",
      });
      return null;
    }
  } catch (error) {
    toast.error(error.message, {
      toastId: "unique-error-toast",
    });
    return null;
  }
};



// 10. ******************** Update Payment id when payment is successfull ************************************
export const UpdatePaymentID = async (order_id, payment_id) => {
  const requestBody = {
    OrderId: order_id,
    PaymentId: payment_id,
  };

  try {
    const response = await fetchData(API_URLS.updatePaymentID, requestBody);

    if (response.responseCode === 1) {
      return true;
    }
    else {
      toast.error(response.responseMessage, {
        toastId: "unique-error-toast",
      });
      return false;
    }
  } catch (error) {
    toast.error(error.message, {
      toastId: "unique-error-toast",
    });
    return false;
  }
};


// 11. ******************** Cancel Placed Order API  ************************************
export const CancelPlacedOrder = async (order_id, reason) => {
  const requestBody = {
    OrderId: order_id,
    Reason: reason
  };

  try {
    const response = await fetchData(API_URLS.cancelOrder, requestBody);

    if (response.responseCode === 1) {
      toast.success(response.responseMessage, {
        toastId: "unique-success-toast",
      });
    }
    else {
      toast.error(response.responseMessage, {
        toastId: "unique-error-toast",
      });
      return false;
    }
  } catch (error) {
    toast.error(error.message, {
      toastId: "unique-error-toast",
    });
    return false;
  }
};


// 12. ******************** Update Order Status API  ************************************
export const UpdateOrderStatus = async (order_id, status_id) => {
  const requestBody = {
    OrderId: order_id,
    StatusId: status_id
  };

  try {
    const response = await fetchData(API_URLS.UpdateOrderStatus, requestBody);

    if (response.responseCode === 1) {
      // toast.success(response.responseMessage, {
      //   toastId: "unique-success-toast",
      // });
      return true;
    }
    else {
      toast.error(response.responseMessage, {
        toastId: "unique-error-toast",
      });
      return false;
    }
  } catch (error) {
    toast.error(error.message, {
      toastId: "unique-error-toast",
    });
    return false;
  }
};


// 13. ****************** Product Move To Cart Api **************************************
export const MoveToCart = async (productId, variationId, qty) => {

  const requestBody = {
    productId: productId,
    variationId: variationId,
    qty: qty || 1,
    userId: UserID,
  };

  try {
    const response = await fetchData(API_URLS.addToCart, requestBody);
    if (response.responseCode === 1) {
      toast.success(response.responseMessage, {
        toastId: "unique-success-toast",
      });
    } else {
      // Show error toast
      toast.error(response.responseMessage, {
        toastId: "unique-error-toast",
      });
    }
  } catch (error) {
    // Handle error as needed
    toast.error(error.message, {
      toastId: "unique-error-toast",
    });
  }
};




















