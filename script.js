// console.log("hi,Java Script");
// window.addEventListener('scroll', function () {
//     const header = document.querySelector('header');
//     if (this.window.scrollY > 50) {
//         header.style.backgroundColor = '#222';
//         header.style.color = '#ffeb3b';
//     }
//     else {
//         header.style.backgroundColor = '#333';
//         header.style.color = '#fff';

//     }
// });
// document.querySelectorAll('nav ul li a').forEach(function (item)
// {
//     item.addEventListener('mouseenter',function(){
//     this.style.color = '#ffeb3b';
//     });
//     item.addEventListener('mouseleave',function()
// {
//     this.style.color = '#fff';
// });
// });

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
        this.style.color = '#ffeb3b'; // Change font color on hover
    });
    item.addEventListener('mouseleave', function() {
        this.style.color = '#fff'; // Reset font color on mouse leave
    });
});
