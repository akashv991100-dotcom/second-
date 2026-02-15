const products = [
    {
        id: 1,
        name: "Premium Black Shirt",
        price: 1499,
        oldPrice: 1999,
        category: "men",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1374",
        badge: "Popular"
    },
    {
        id: 2,
        name: "White Oversized T-Shirt",
        price: 999,
        oldPrice: 1299,
        category: "women",
        rating: 4,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1480",
        badge: "New"
    },
    {
        id: 3,
        name: "Denim Jacket",
        price: 2499,
        oldPrice: 3499,
        category: "men",
        rating: 5,
        image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?q=80&w=1470",
        badge: "Sale"
    },
    {
        id: 4,
        name: "Urban Hoodie",
        price: 1999,
        oldPrice: 2799,
        category: "women",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1470",
        badge: "Sale"
    },
    {
        id: 5,
        name: "Casual Cotton Pants",
        price: 1299,
        oldPrice: 1799,
        category: "men",
        rating: 4,
        image: "https://images.unsplash.com/photo-1542272604-787c62e2a28f?q=80&w=1470",
        badge: ""
    },
    {
        id: 6,
        name: "Premium Designer Dress",
        price: 3499,
        oldPrice: 5499,
        category: "women",
        rating: 5,
        image: "https://images.unsplash.com/photo-1595777707802-cbd68604ebc8?q=80&w=1470",
        badge: "Sale"
    },
    {
        id: 7,
        name: "Women's Elegant Blazer",
        price: 2299,
        oldPrice: 3299,
        category: "women",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=1470",
        badge: "Popular"
    },
    {
        id: 8,
        name: "Floral Summer Dress",
        price: 1599,
        oldPrice: 2199,
        category: "women",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1592886457235-0ac4ac351151?q=80&w=1470",
        badge: "New"
    },
    {
        id: 9,
        name: "Women's Denim Jeans",
        price: 1799,
        oldPrice: 2499,
        category: "women",
        rating: 4,
        image: "https://images.unsplash.com/photo-1505753580013-d2a1a3dfbfffb?q=80&w=1470",
        badge: ""
    },
    {
        id: 10,
        name: "Casual Crop Top",
        price: 799,
        oldPrice: 1099,
        category: "women",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1514886065236-95def89b2492?q=80&w=1472",
        badge: "Sale"
    },
    {
        id: 11,
        name: "Women's Leather Jacket",
        price: 2999,
        oldPrice: 4299,
        category: "women",
        rating: 5,
        image: "https://images.unsplash.com/photo-1551028719-00167b16ebc5?q=80&w=1470",
        badge: "Sale"
    },
    {
        id: 12,
        name: "Premium Silk Blouse",
        price: 1899,
        oldPrice: 2699,
        category: "women",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1589987572206-ccccbe9ed0d3?q=80&w=1470",
        badge: "New"
    },
    {
        id: 13,
        name: "Women's Cargo Pants",
        price: 1599,
        oldPrice: 2199,
        category: "women",
        rating: 4,
        image: "https://images.unsplash.com/photo-1505680325655-bc64b27a8dc8?q=80&w=1470",
        badge: ""
    },
    {
        id: 14,
        name: "Striped Summer Top",
        price: 899,
        oldPrice: 1299,
        category: "women",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1522706323590-d24dbb6b0267?q=80&w=1470",
        badge: "Sale"
    },
    {
        id: 15,
        name: "Women's Formal Dress",
        price: 3199,
        oldPrice: 4799,
        category: "women",
        rating: 5,
        image: "https://images.unsplash.com/photo-1612336782712-45a6fcf8b8b0?q=80&w=1470",
        badge: "Popular"
    },
    {
        id: 16,
        name: "Comfortable Tee",
        price: 599,
        oldPrice: 899,
        category: "women",
        rating: 4,
        image: "https://images.unsplash.com/photo-1514295812140-d8d8d584b3c7?q=80&w=1470",
        badge: "Sale"
    },
    {
        id: 17,
        name: "Men's Formal Blazer",
        price: 2899,
        oldPrice: 3999,
        category: "men",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1470",
        badge: "Popular"
    },
    {
        id: 18,
        name: "Striped Casual Shirt",
        price: 1199,
        oldPrice: 1599,
        category: "men",
        rating: 4,
        image: "https://images.unsplash.com/photo-1606681543208-e0db3814b9c3?q=80&w=1470",
        badge: "New"
    },
    {
        id: 19,
        name: "Men's Chinos Trousers",
        price: 1399,
        oldPrice: 1899,
        category: "men",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1473830394358-40007b7c62a0?q=80&w=1470",
        badge: ""
    },
    {
        id: 20,
        name: "Navy Blue T-Shirt",
        price: 699,
        oldPrice: 999,
        category: "men",
        rating: 4,
        image: "https://images.unsplash.com/photo-1521286351697-48a9fb1ebd3f?q=80&w=1470",
        badge: "Sale"
    },
    {
        id: 21,
        name: "Men's Leather Belt",
        price: 599,
        oldPrice: 899,
        category: "men",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1470",
        badge: ""
    },
    {
        id: 22,
        name: "Slim Fit Jeans",
        price: 1599,
        oldPrice: 2199,
        category: "men",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1542272604-787c62e2a28f?q=80&w=1470",
        badge: "Sale"
    },
    {
        id: 23,
        name: "Men's Polo Shirt",
        price: 1099,
        oldPrice: 1499,
        category: "men",
        rating: 4,
        image: "https://images.unsplash.com/photo-1503341455253-b2e723bb12dd?q=80&w=1470",
        badge: "New"
    },
    {
        id: 24,
        name: "Maroon Sweatshirt",
        price: 1399,
        oldPrice: 1899,
        category: "men",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1556821552-5f41018b4715?q=80&w=1470",
        badge: "Popular"
    },
    {
        id: 25,
        name: "White Linen Shirt",
        price: 1299,
        oldPrice: 1799,
        category: "men",
        rating: 4,
        image: "https://images.unsplash.com/photo-1598033129519-a0299b6f7848?q=80&w=1470",
        badge: ""
    },
    {
        id: 26,
        name: "Trendy Crop Jacket",
        price: 1899,
        oldPrice: 2699,
        category: "women",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1592819957260-0ffc6c2f866b?q=80&w=1470",
        badge: "New"
    },
    {
        id: 27,
        name: "Premium Wool Sweater",
        price: 1599,
        oldPrice: 2299,
        category: "men",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1480",
        badge: "New"
    },
    {
        id: 28,
        name: "Silk Evening Gown",
        price: 4499,
        oldPrice: 6999,
        category: "women",
        rating: 5,
        image: "https://images.unsplash.com/photo-1595777707802-cbd68604ebc8?q=80&w=1470",
        badge: "New"
    },
    {
        id: 29,
        name: "Athletic Performance Tee",
        price: 899,
        oldPrice: 1299,
        category: "men",
        rating: 4,
        image: "https://images.unsplash.com/photo-1521286351697-48a9fb1ebd3f?q=80&w=1470",
        badge: "Sale"
    },
    {
        id: 30,
        name: "Casual Weekend Dress",
        price: 1199,
        oldPrice: 1799,
        category: "women",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1592886457235-0ac4ac351151?q=80&w=1470",
        badge: "Sale"
    },
    {
        id: 31,
        name: "Classic Chino Shorts",
        price: 899,
        oldPrice: 1299,
        category: "men",
        rating: 4,
        image: "https://images.unsplash.com/photo-1473830394358-40007b7c62a0?q=80&w=1470",
        badge: "Sale"
    },
    {
        id: 32,
        name: "Designer Handbag",
        price: 2999,
        oldPrice: 4499,
        category: "women",
        rating: 5,
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1470",
        badge: "New"
    },
    {
        id: 33,
        name: "Summer Beach Shirt",
        price: 999,
        oldPrice: 1499,
        category: "men",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?q=80&w=1470",
        badge: "Sale"
    },
    {
        id: 34,
        name: "Premium Activewear Set",
        price: 1799,
        oldPrice: 2699,
        category: "women",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?q=80&w=1470",
        badge: "New"
    }
];

let cart = [];
let wishlist = [];

const menGrid = document.getElementById("men-grid");
const womenGrid = document.getElementById("women-grid");
const newGrid = document.getElementById("new-grid");
const saleGrid = document.getElementById("sale-grid");

// Initialize products on page load
document.addEventListener('DOMContentLoaded', function() {
    renderMensProducts();
    renderWomensProducts();
    renderNewArrivals();
    renderSaleProducts();
    setupSearchListener();
    updateWishlistCount();
    
    // Hide card section by default
    document.getElementById("card-section").style.display = 'block';
});

// Render men's products
function renderMensProducts() {
    const mensProducts = products.filter(p => p.category === 'men');
    menGrid.innerHTML = '';
    
    mensProducts.forEach((product) => {
        menGrid.innerHTML += createProductCard(product);
    });
}

// Render women's products
function renderWomensProducts() {
    const womensProducts = products.filter(p => p.category === 'women');
    womenGrid.innerHTML = '';
    
    womensProducts.forEach((product) => {
        womenGrid.innerHTML += createProductCard(product);
    });
}

// Render new arrivals products
function renderNewArrivals() {
    const newProducts = products.filter(p => p.badge === 'New');
    newGrid.innerHTML = '';
    
    newProducts.forEach((product) => {
        newGrid.innerHTML += createProductCard(product);
    });
}

// Render sale products
function renderSaleProducts() {
    const saleProducts = products.filter(p => p.badge === 'Sale');
    saleGrid.innerHTML = '';
    
    saleProducts.forEach((product) => {
        saleGrid.innerHTML += createProductCard(product);
    });
}

// Create product card HTML
function createProductCard(product) {
    const discountPercent = ((product.oldPrice - product.price) / product.oldPrice * 100).toFixed(0);
    const stars = '⭐'.repeat(Math.floor(product.rating));
    const isInWishlist = wishlist.some(item => item.id === product.id);
    const wishlistBtnClass = isInWishlist ? 'in-wishlist' : '';
    
    return `
        <div class="product" onclick="openProductDetail(${product.id})">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <div class="product-rating">${stars} (${product.rating})</div>
                <div class="product-price">
                    <span class="price">₹${product.price}</span>
                    <span class="old-price">₹${product.oldPrice}</span>
                    <span style="color: #FF6B6B; font-weight: 600; font-size: 12px;">-${discountPercent}%</span>
                </div>
                <button class="wishlist-heart-btn ${wishlistBtnClass}" onclick="event.stopPropagation(); toggleWishlist(${product.id})" title="Add to Wishlist">
                    <i class="fas fa-heart"></i>
                </button>
                <button onclick="event.stopPropagation(); addToCart(${product.id})">Add to Cart</button>
            </div>
        </div>
    `;
}

// Add to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push({...product, cartId: Date.now()});
        updateCart();
        showNotification('Added to cart!');
    }
}

// Update cart display
function updateCart() {
    document.getElementById("cart-count").innerText = cart.length;
    
    let cartHTML = "";
    let total = 0;
    
    if (cart.length === 0) {
        cartHTML = '<p style="text-align: center; padding: 30px; color: #999;">Your cart is empty</p>';
    } else {
        cart.forEach((item, index) => {
            total += item.price;
            cartHTML += `
                <div class="cart-item">
                    <div class="cart-item-info">
                        <h4>${item.name}</h4>
                        <span class="cart-item-price">₹${item.price}</span>
                    </div>
                    <button class="cart-item-remove" onclick="removeFromCart(${index})">Remove</button>
                </div>
            `;
        });
    }
    
    document.getElementById("cart-items").innerHTML = cartHTML;
    document.getElementById("total-price").innerText = '₹' + total;
}

// Remove from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// Wishlist functions
function toggleWishlist(productId) {
    const product = products.find(p => p.id === productId);
    const index = wishlist.findIndex(item => item.id === productId);
    
    if (index > -1) {
        // Remove from wishlist
        wishlist.splice(index, 1);
        showNotification('❤️ Removed from wishlist');
    } else {
        // Add to wishlist
        wishlist.push(product);
        showNotification('❤️ Added to wishlist!');
    }
    
    updateWishlistCount();
    reRenderProducts();
}

// Update wishlist count
function updateWishlistCount() {
    document.getElementById("wishlist-count").innerText = wishlist.length;
}

// Re-render products to update wishlist button colors
function reRenderProducts() {
    renderMensProducts();
    renderWomensProducts();
    renderNewArrivals();
    renderSaleProducts();
}

// Open and close wishlist
function openWishlist() {
    updateWishlistDisplay();
    document.getElementById("wishlist").classList.add("active");
}

function closeWishlist() {
    document.getElementById("wishlist").classList.remove("active");
}

// Update wishlist display
function updateWishlistDisplay() {
    let wishlistHTML = "";
    
    if (wishlist.length === 0) {
        wishlistHTML = '<p style="text-align: center; padding: 30px; color: #999;">Your wishlist is empty</p>';
    } else {
        wishlist.forEach((item, index) => {
            wishlistHTML += `
                <div class="wishlist-item">
                    <img src="${item.image}" alt="${item.name}">
                    <div class="wishlist-item-info">
                        <h4>${item.name}</h4>
                        <span class="wishlist-item-price">₹${item.price}</span>
                        <button class="wishlist-item-remove" onclick="removeFromWishlist(${index})">Remove</button>
                    </div>
                </div>
            `;
        });
    }
    
    document.getElementById("wishlist-items").innerHTML = wishlistHTML;
}

// Remove from wishlist
function removeFromWishlist(index) {
    wishlist.splice(index, 1);
    updateWishlistCount();
    updateWishlistDisplay();
    reRenderProducts();
    showNotification('Removed from wishlist');
}

// Add all wishlist items to cart
function addAllToCart() {
    if (wishlist.length === 0) {
        showNotification('Wishlist is empty!');
        return;
    }
    
    wishlist.forEach(item => {
        cart.push({...item, cartId: Date.now()});
    });
    
    updateCart();
    closeWishlist();
    showNotification('✓ All items added to cart!');
}

// ============ PRODUCT DETAIL FUNCTIONS ============

// Store current product detail ID
let currentProductDetailId = null;

// Open product detail modal
function openProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    currentProductDetailId = productId;
    const discountPercent = ((product.oldPrice - product.price) / product.oldPrice * 100).toFixed(0);
    const stars = '⭐'.repeat(Math.floor(product.rating));
    
    // Populate modal with product details
    document.getElementById('detail-product-image').src = product.image;
    document.getElementById('detail-product-name').innerText = product.name;
    document.getElementById('detail-rating').innerHTML = `${stars} <span style="color: #666; margin-left: 8px;">${product.rating} (${Math.floor(Math.random() * 200) + 50} reviews)</span>`;
    document.getElementById('detail-price').innerText = '₹' + product.price;
    document.getElementById('detail-old-price').innerText = '₹' + product.oldPrice;
    document.getElementById('detail-discount').innerText = `-${discountPercent}%`;
    document.getElementById('detail-badge').innerText = product.badge || 'Premium';
    document.getElementById('detail-badge').style.display = product.badge ? 'inline-block' : 'none';
    
    // Product description based on category
    const category = product.category === 'men' ? "Men's" : "Women's";
    document.getElementById('detail-description').innerText = `Premium quality ${category} fashion wear. Crafted with attention to detail, this ${product.name.toLowerCase()} combines style and comfort. Perfect for everyday wear or special occasions. Made with premium fabrics for durability and softness.`;
    
    // Reset quantity and selections
    document.getElementById('detail-quantity').value = 1;
    
    // Reset size selection
    document.querySelectorAll('.size-btn').forEach(btn => btn.classList.remove('selected'));
    document.querySelector('.size-btn').classList.add('selected');
    
    // Reset color selection
    document.querySelectorAll('.color-btn').forEach(btn => btn.classList.remove('selected'));
    document.querySelector('.color-btn').classList.add('selected');
    
    // Show detail modal
    document.getElementById('product-detail-modal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close product detail modal
function closeProductDetail() {
    document.getElementById('product-detail-modal').classList.remove('active');
    document.body.style.overflow = 'auto';
    currentProductDetailId = null;
}

// Increase quantity
function increaseQuantity() {
    const qty = document.getElementById('detail-quantity');
    qty.value = parseInt(qty.value) + 1;
}

// Decrease quantity
function decreaseQuantity() {
    const qty = document.getElementById('detail-quantity');
    if (parseInt(qty.value) > 1) {
        qty.value = parseInt(qty.value) - 1;
    }
}

// Select size
function selectSize(btn) {
    document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
}

// Select color
function selectColor(btn) {
    document.querySelectorAll('.color-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
}

// Add product from detail view to cart
function addDetailToCart() {
    if (!currentProductDetailId) return;
    
    const product = products.find(p => p.id === currentProductDetailId);
    const quantity = parseInt(document.getElementById('detail-quantity').value);
    const selectedSize = document.querySelector('.size-btn.selected').innerText;
    const selectedColor = document.querySelector('.color-btn.selected').style.backgroundColor;
    
    if (!product) return;
    
    // Add to cart with selected options
    for (let i = 0; i < quantity; i++) {
        cart.push({
            ...product, 
            cartId: Date.now() + i,
            selectedSize: selectedSize,
            selectedColor: selectedColor
        });
    }
    
    updateCart();
    closeProductDetail();
    showNotification(`✓ ${quantity} item(s) added to cart!`);
}

// Add product from detail view to wishlist
function addDetailToWishlist() {
    if (!currentProductDetailId) return;
    
    const product = products.find(p => p.id === currentProductDetailId);
    const index = wishlist.findIndex(item => item.id === currentProductDetailId);
    
    if (index > -1) {
        wishlist.splice(index, 1);
        document.querySelector('.add-detail-wishlist').style.background = 'white';
        document.querySelector('.add-detail-wishlist').style.color = 'var(--hp-accent)';
        showNotification('❤️ Removed from wishlist');
    } else {
        wishlist.push(product);
        document.querySelector('.add-detail-wishlist').style.background = 'var(--hp-accent)';
        document.querySelector('.add-detail-wishlist').style.color = 'white';
        showNotification('❤️ Added to wishlist!');
    }
    
    updateWishlistCount();
    reRenderProducts();
}

// Close modal when clicking outside
document.addEventListener('click', function(event) {
    const modal = document.getElementById('product-detail-modal');
    if (event.target === modal) {
        closeProductDetail();
    }
});

// Open and close cart
function openCart() {
    document.getElementById("cart").classList.add("active");
}

function closeCart() {
    document.getElementById("cart").classList.remove("active");
}

// Newsletter subscription
function subscribeNewsletter() {
    const email = document.getElementById('newsletter-email').value;
    if (email && email.includes('@')) {
        showNotification('✓ Subscribed successfully!');
        document.getElementById('newsletter-email').value = '';
    } else {
        showNotification('Please enter a valid email');
    }
}

// Checkout - Open Payment Modal
function checkout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!');
        return;
    }
    closeCart();
    openPayment();
}

// Payment Modal Functions
function openPayment() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!');
        return;
    }
    
    document.getElementById("payment-modal").classList.add("active");
    updatePaymentSummary();
    setupPaymentListeners();
    document.body.style.overflow = "hidden";
}

function closePayment() {
    document.getElementById("payment-modal").classList.remove("active");
    document.body.style.overflow = "auto";
}

function updatePaymentSummary() {
    let subtotal = 0;
    let itemsHTML = '';
    
    cart.forEach(item => {
        subtotal += item.price;
        itemsHTML += `
            <div class="order-item">
                <span class="order-item-name">${item.name}</span>
                <span class="order-item-price">₹${item.price}</span>
            </div>
        `;
    });
    
    document.getElementById("order-items-summary").innerHTML = itemsHTML;
    
    const shippingCost = parseFloat(document.querySelector('input[name="shipping"]:checked').value) || 0;
    const discount = subtotal > 999 ? Math.floor(subtotal * 0.05) : 0;
    const totalAmount = subtotal + shippingCost - discount;
    
    document.getElementById("subtotal").innerText = '₹' + subtotal;
    document.getElementById("shipping").innerText = '₹' + shippingCost;
    document.getElementById("discount").innerText = '₹' + discount;
    document.getElementById("final-total").innerText = '₹' + totalAmount;
    document.getElementById("pay-amount").innerText = '₹' + totalAmount;
}

function setupPaymentListeners() {
    // Shipping option change
    const shippingInputs = document.querySelectorAll('input[name="shipping"]');
    shippingInputs.forEach(input => {
        input.addEventListener('change', updatePaymentSummary);
    });
    
    // Payment method change
    const paymentInputs = document.querySelectorAll('input[name="payment-method"]');
    paymentInputs.forEach(input => {
        input.addEventListener('change', function() {
            const cardSection = document.getElementById("card-section");
            if (this.value === 'card') {
                cardSection.style.display = 'block';
                document.getElementById('card-name').required = true;
                document.getElementById('card-number').required = true;
                document.getElementById('expiry').required = true;
                document.getElementById('cvv').required = true;
            } else {
                cardSection.style.display = 'none';
                document.getElementById('card-name').required = false;
                document.getElementById('card-number').required = false;
                document.getElementById('expiry').required = false;
                document.getElementById('cvv').required = false;
            }
        });
    });
}

function processPayment() {
    // Validate form inputs
    const fullName = document.getElementById('full-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const address = document.getElementById('address').value.trim();
    const city = document.getElementById('city').value.trim();
    const state = document.getElementById('state').value.trim();
    const pincode = document.getElementById('pincode').value.trim();
    const termsChecked = document.getElementById('terms-checkbox').checked;
    
    // Basic validation
    if (!fullName || !email || !phone || !address || !city || !state || !pincode) {
        showNotification('Please fill all required fields');
        return;
    }
    
    if (!email.includes('@')) {
        showNotification('Please enter a valid email');
        return;
    }
    
    if (phone.length < 10) {
        showNotification('Please enter a valid phone number');
        return;
    }
    
    if (!termsChecked) {
        showNotification('Please accept Terms & Conditions');
        return;
    }
    
    const paymentMethod = document.querySelector('input[name="payment-method"]:checked').value;
    
    // Validate card details if card payment
    if (paymentMethod === 'card') {
        const cardNumber = document.getElementById('card-number').value.trim();
        const expiry = document.getElementById('expiry').value.trim();
        const cvv = document.getElementById('cvv').value.trim();
        
        if (cardNumber.length !== 16 || isNaN(cardNumber)) {
            showNotification('Please enter a valid 16-digit card number');
            return;
        }
        
        if (!expiry.match(/^\d{2}\/\d{2}$/)) {
            showNotification('Please enter expiry in MM/YY format');
            return;
        }
        
        if (cvv.length !== 3 || isNaN(cvv)) {
            showNotification('Please enter a valid 3-digit CVV');
            return;
        }
    }
    
    // Process payment
    const paymentMethodText = {
        'card': 'Credit/Debit Card',
        'upi': 'UPI',
        'netbanking': 'Net Banking',
        'wallet': 'Digital Wallet',
        'cod': 'Cash on Delivery'
    };
    
    const totalAmount = document.getElementById('final-total').innerText;
    
    // Show success message
    showNotification('Processing payment...');
    
    setTimeout(() => {
        // Clear cart
        cart = [];
        updateCart();
        
        // Close payment modal
        closePayment();
        
        // Show order confirmation
        showOrderConfirmation(fullName, totalAmount, paymentMethodText[paymentMethod]);
        
        // Clear form
        document.querySelector('.payment-container').querySelectorAll('input').forEach(input => {
            if (input.type !== 'radio' && input.type !== 'checkbox') {
                input.value = '';
            }
        });
        document.getElementById('terms-checkbox').checked = false;
    }, 1500);
}

function showOrderConfirmation(name, amount, method) {
    const confirmation = document.createElement('div');
    confirmation.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        padding: 40px;
        border-radius: 10px;
        text-align: center;
        z-index: 400;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        max-width: 400px;
    `;
    confirmation.innerHTML = `
        <div style="font-size: 50px; margin-bottom: 20px;">✓</div>
        <h2 style="color: #27ae60; margin-bottom: 15px;">Order Confirmed!</h2>
        <p style="font-size: 16px; margin-bottom: 10px;">Thank you for your order, <strong>${name}</strong></p>
        <p style="font-size: 14px; color: #666; margin-bottom: 20px;">
            Amount Paid: <strong>${amount}</strong><br>
            Payment Method: ${method}
        </p>
        <p style="font-size: 13px; color: #999;">Order confirmation has been sent to your email</p>
        <button onclick="this.parentElement.remove()" style="
            margin-top: 20px;
            padding: 10px 30px;
            background: #27ae60;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-weight: 600;
        ">Got it!</button>
    `;
    document.body.appendChild(confirmation);
    
    setTimeout(() => {
        if (confirmation.parentElement) {
            confirmation.remove();
        }
    }, 5000);
}

// Notification system
function showNotification(message) {
    const notif = document.createElement('div');
    notif.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #FF6B6B;
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        z-index: 300;
        animation: slideIn 0.3s ease;
    `;
    notif.textContent = message;
    document.body.appendChild(notif);
    
    setTimeout(() => notif.remove(), 3000);
}

// Add animation for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// Search functionality
function setupSearchListener() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase();
            const filteredMens = products.filter(p => p.category === 'men' && p.name.toLowerCase().includes(query));
            const filteredWomens = products.filter(p => p.category === 'women' && p.name.toLowerCase().includes(query));
            const filteredNew = products.filter(p => p.badge === 'New' && p.name.toLowerCase().includes(query));
            const filteredSale = products.filter(p => p.badge === 'Sale' && p.name.toLowerCase().includes(query));
            
            menGrid.innerHTML = '';
            womenGrid.innerHTML = '';
            newGrid.innerHTML = '';
            saleGrid.innerHTML = '';
            
            filteredMens.forEach(product => {
                menGrid.innerHTML += createProductCard(product);
            });
            
            filteredWomens.forEach(product => {
                womenGrid.innerHTML += createProductCard(product);
            });
            
            filteredNew.forEach(product => {
                newGrid.innerHTML += createProductCard(product);
            });
            
            filteredSale.forEach(product => {
                saleGrid.innerHTML += createProductCard(product);
            });
        });
    }
}
