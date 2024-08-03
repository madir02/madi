const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
            <img src="img/Hajime_logo.png" class="logo" alt="">
            <div class="footer-ul-container">
                <ul class="category">
                    <li class="category-title"> MEN </li>
                    <li><a href="man.html" class="footer-link">t-shirts</a></li>
                    <li><a href="man.html" class="footer-link">sweatshirts</a></li>
                    <li><a href="man.html" class="footer-link">shirts</a></li>
                    <li><a href="man.html" class="footer-link">jeans</a></li>
                    <li><a href="#" class="footer-link">trousers</a></li>
                    <li><a href="#" class="footer-link">shoes</a></li>
                    <li><a href="#" class="footer-link">casuals</a></li>
                    <li><a href="#" class="footer-link">formals</a></li>
                    <li><a href="#" class="footer-link">sports</a></li>
                    <li><a href="#" class="footer-link">watch</a></li>
                </ul>
                <ul class="category">
                    <li class="category-title"> WOMEN </li>
                    <li><a href="women.html" class="footer-link">t-shirts</a></li>
                    <li><a href="women.html" class="footer-link">sweatshirts</a></li>
                    <li><a href="women.html" class="footer-link">shirts</a></li>
                    <li><a href="women.html" class="footer-link">jeans</a></li>
                    <li><a href="#" class="footer-link">trousers</a></li>
                    <li><a href="#" class="footer-link">shoes</a></li>
                    <li><a href="#" class="footer-link">casuals</a></li>
                    <li><a href="#" class="footer-link">formals</a></li>
                    <li><a href="#" class="footer-link">sports</a></li>
                    <li><a href="#" class="footer-link">watch</a></li>
                </ul>
            </div>
        </div>
        <p class="footer-title"> About Company </p>
        <p class="info"> Quality Clothing, Branded Clothing, Women's, Men's and Children's, We have everything </p>
        <p class="info">support emails - mypo4ta@gmail.com, zapasna9po4ta@gmail.com</p>
        <p class="info">telephone - +7 777 777 7777, +7 727 777 7777</p>
        <hr>
        <div class="footer-social-container">
            <div>
                <a href="#" class="social-link">terms & services</a>
                <a href="#" class="social-link">privacy page</a>
            </div>
            <div>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

                <a href="https://www.instagram.com/accounts/login/" class="fa fa-instagram"></a>
                <a href="https://www.facebook.com/" class="fa fa-facebook"></a>
                <a href="https://twitter.com/?lang=en" class="fa fa-twitter"></a>
                <a href="https://kz.linkedin.com/" class="fa fa-linkedin"></a>
            </div>
        </div>
        </hr>
        <p class="footer-credit"> HAJIME, Best Apparels Online Store</p>
    `;
}

createFooter();