document.addEventListener('DOMContentLoaded', () => {
    const products = document.querySelectorAll('.product');
    const cartProducts = document.querySelector('.cart__products');
  
    products.forEach(product => {
      product.querySelector('.product__quantity-control_inc').addEventListener('click', () => {
        let quantity = product.querySelector('.product__quantity-value');
        quantity.textContent = parseInt(quantity.textContent) + 1;
      });
  
      product.querySelector('.product__quantity-control_dec').addEventListener('click', () => {
        let quantity = product.querySelector('.product__quantity-value');
        if (parseInt(quantity.textContent) > 1) {
          quantity.textContent = parseInt(quantity.textContent) - 1;
        }
      });
  
      product.querySelector('.product__add').addEventListener('click', () => {
        let productId = product.dataset.id;
        let productImage = product.querySelector('.product__image').src;
        let productQuantity = parseInt(product.querySelector('.product__quantity-value').textContent);
  
        let cartProduct = cartProducts.querySelector(`.cart__product[data-id="${productId}"]`);
        
        if (cartProduct) {
          let cartProductCount = cartProduct.querySelector('.cart__product-count');
          cartProductCount.textContent = parseInt(cartProductCount.textContent) + productQuantity;
        } else {
          let cartProductHTML = `
            <div class="cart__product" data-id="${productId}">
                <img class="cart__product-image" src="${productImage}">
                <div class="cart__product-count">${productQuantity}</div>
            </div>
          `;
          cartProducts.innerHTML += cartProductHTML;
        }
      });
    });
  });