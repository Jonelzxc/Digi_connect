// Load the cart from localStorage when the page loads
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to display cart items
function displayCart() {
    const cartItemsList = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');

    // Clear current items
    cartItemsList.innerHTML = '';

    // Check if cart is empty
    if (cart.length === 0) {
        cartItemsList.innerHTML = '<li>Your cart is empty!</li>';
    } else {
        // Display each cart item with remove button
        cart.forEach((product, index) => {
            let li = document.createElement('li');
            li.textContent = `${product.name} - Color: ${product.color}`;

            // Create the remove button for each item
            let removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';
            removeBtn.classList.add('remove-btn');
            removeBtn.onclick = function() {
                removeFromCart(index); // Remove item at index
            };

            // Append the remove button to the list item
            li.appendChild(removeBtn);
            cartItemsList.appendChild(li);
        });
    }

    // Update cart count
    cartCount.innerText = cart.length;
}

// Remove item from the cart
function removeFromCart(index) {
    // Remove item from the cart array
    cart.splice(index, 1);

    // Save updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Refresh the cart display
    displayCart();
}

// Add item to cart (now includes color)
function addToCart(productName, event) {
    const colorSelect = event.target.previousElementSibling.value;
    const product = {
        name: productName,
        color: colorSelect
    };

    // Add the product to the cart array
    cart.push(product);

    // Save the cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Refresh the cart display
    displayCart();
}

// Checkout function
function checkout() {
    // Check if the cart is empty
    if (cart.length === 0) {
        alert("Your cart is empty! Please add some products to your cart before proceeding.");
    } else {
        // Confirm if the user is ready to checkout
        let confirmOrder = confirm("Do you want to proceed with the checkout?");

        if (confirmOrder) {
            // Simulate the checkout process (like payment)
            alert("Processing your order...");

            // Simulate a payment process (this could be an API call in real applications)
            setTimeout(function() {
                let paymentSuccessful = true; // Simulate a payment success

                if (paymentSuccessful) {
                    // Payment was successful, clear the cart
                    cart = []; // Empty the cart array

                    // Update the cart in localStorage
                    localStorage.setItem('cart', JSON.stringify(cart));

                    // Refresh the cart display (if any)
                    displayCart();

                    // Show success message
                    alert("Your order has been processed successfully. Thank you for shopping with us!");
                    window.location.href = "index.html"; // Redirect to the homepage
                } else {
                    // Simulate payment failure
                    alert("There was an issue processing your payment. Please try again.");
                }
            }, 2000); // Simulate a 2-second delay for payment processing
        } else {
            alert("Checkout canceled. Feel free to continue shopping.");
        }
    }
}

// Run displayCart to load the cart on page load
displayCart();
