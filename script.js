let cartItemCount = 0;

// Show toast notification
function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toast-message');
    toastMsg.textContent = message;
    toast.classList.remove('opacity-0');
    toast.classList.add('opacity-100');

    setTimeout(() => {
        toast.classList.remove('opacity-100');
        toast.classList.add('opacity-0');
    }, 3000);
}

// Update dynamic price when select changes
document.querySelectorAll('#but').forEach(button => {
    const select = button.querySelector('select');
    const priceEl = button.querySelector('#price');

    select.addEventListener('change', () => {
        const price = select.value;
        priceEl.textContent = `₹${price}`;
    });
});

// Handle "ADD" button clicks
document.querySelectorAll('#add').forEach(addBtn => {
    addBtn.addEventListener('click', () => {
        const product = addBtn.closest('#img1');
        const title = product.querySelector('h2').textContent;

        // Show toast
        showToast(`✅ ${title} added to your basket!`);

        // Increment cart count
        cartItemCount++;
        document.getElementById('cart-count').textContent = cartItemCount;
    });
});
