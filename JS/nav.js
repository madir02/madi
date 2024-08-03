const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
            <a href="index.html">
            <img src="img/Hajime_logo.png" class="brand-logo" alt="">
            </a>
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search brand, product">
                    <button class="search-btn">search</button>
                </div>
                <a href="signin.html"><img src="img/user.png" alt=""></a>
                <a href="madiyar.html"><img src="img/cart.png" alt=""></a>
            </div>
        </div>

        <ul class="links-container">
            <li class="link-item"><a href="index.html" class="link"> Home </a></li>
            <li class="link-item"><a href="women.html" class="link"> Women's </a></li>
            <li class="link-item"><a href="man.html" class="link"> Men's </a></li>
            <li class="link-item"><a href="kids.html" class="link"> Kids </a></li>
            <li class="link-item"><a href="667.html" class="link"> Accessories </a></li>
            <li class="link-item"><a href="contacts.html" class="link"> Contacts </a></li>
        </ul>
    `;
}

createNav();