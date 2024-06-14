
// Change header background and text color on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#222';
        header.style.color = '#ffeb3b'; // Optional: Change text color on scroll
    } else {
        header.style.backgroundColor = '#333';
        header.style.color = '#fff'; // Reset text color
    }
});

// Change menu item text color on hover
document.querySelectorAll('nav ul li a').forEach(function(item) {
    item.addEventListener('mouseenter', function() {
        this.style.color = 'green',// Change font color on hover
        this.backgroundColor='violet';
    });
    item.addEventListener('mouseleave', function() {
        this.style.color = 'yellow'; // Reset font color on mouse leave

    });
    item.addEventListener('click', function() {
        this.style.backgroundColor = '#ff6347'; // Change background color on click
        // Optional: Change the color of the previously clicked item back to the original
        this.style.borderRadius = '10px';
        document.querySelectorAll('nav ul li a').forEach(function(otherItem) {
            if (otherItem !== item) {
                otherItem.style.backgroundColor = ''; // Reset background color of other items
                otherItem.style.borderRadius = '';
            }
        });
    });

});


