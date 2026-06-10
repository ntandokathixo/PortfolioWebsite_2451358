// Shop category functionality
document.addEventListener('DOMContentLoaded', function() {

    const categoryCards = document.querySelectorAll('.category-card');
    const shopCategoryPage = document.getElementById('shopCategoryPage');
    const closeCategoryBtn = document.getElementById('closeCategoryBtn');
    const categoryTitle = document.getElementById('categoryTitle');
    const categoryItemsGrid = document.getElementById('categoryItemsGrid');

    const categoryProducts = {
        'accessories': {
            title: 'Accessories',
            items: [
                { name: 'Gold Necklace', price: 'R269', image: 'images/shoppage/goldnecklace.WEBP', link: 'https://www.fashionnova.com/en-za/products/always-a-stunner-necklace-fncolorname-gold' },
                { name: 'Silver Hinge Bangle', price: 'R269', image: 'images/shoppage/silverbangle.JPG', link: 'https://superbalist.com/women/accessories/jewellery/single-bracelet-up-silver-bubble-hinge-bangle/1639774?sku=6352784' },
                { name: 'Black Sunglasses', price: 'R25', image: 'images/shoppage/sunglasses.jpg', link: 'https://www.fashionnova.com/en-za/products/fashion-guru-sunglasses-fncolorname-black' }
            ]
        },
        'pants-jeans': {
            title: 'Pants & Jeans',
            items: [
                { name: 'Baggy regular jeans', price: 'R279', image: 'images/homepage/IMG_7443.jpeg', link: 'https://superbalist.com/women/bottoms/jeans/baggy-regular-jeans-light-denim-blue-1210963014/1493976?clickRef=topical' },
                { name: 'Brown Leather Trousers', price: 'R699', image: 'images/shoppage/leatherpants.jpeg', link: 'https://superbalist.com/women/bottoms/trousers/coated-trousers-dark-brown-1297349001/1687812?clickRef=search_listing&searchTerm=Leather+trouser+h%26m' },
                { name: 'Grey Joggers', price: 'R299', image: 'images/shoppage/greyjoggers.jpeg', link: 'https://superbalist.com/women/bottoms/trousers/high-waisted-joggers-light-turquoise-0975845082/1489455?clickRef=catalogue&searchTerm=H%2526M%2520sweatpants' }
            ]
        },
        'dresses-skirts': {
            title: 'Dresses & Skirts',
            items: [
                { name: 'Fringed Mini Skirt', price: 'R529', image: 'images/shoppage/image00035.jpeg', link: 'https://superbalist.com/women/bottoms/skirts/fringed-mini-skirt-cream-1314243001/1656266?sku=6420792' },
                { name: 'Stella McCartney H&M: Embellished Mini Dress', price: 'R2999', image: 'images/blogpage/jsimages/party1.jpeg', link: 'https://example.com/shop/skirt1' },
                { name: 'H&M Studio: Bow-Detail Mesh Skirt', price: 'R899', image: 'images/shoppage/greenmeshskirt.jpg', link: 'https://superbalist.com/women/bottoms/skirts/h-m-studio-bow-detail-mesh-skirt-light-khaki-green-1339669001/1699537?sku=6605721' },
                { name: 'Pleated Mini Skirt', price: 'R538', image: 'images/shoppage/pleatedskirt.jpeg', link: 'https://www.fashionnova.com/en-za/products/bad-in-plaid-denim-mini-skirt-fncolorname-black-wash' }
            ]
        },
        'tops': {
            title: 'Tops',
            items: [
                { name: 'Striped Long Sleeve', price: 'R138.60', image: 'images/shoppage/stripedtop.jpg', link: 'https://m.missguided.com/product/SUMWON-WOMEN-Striped-Long-Sleeve-Top-With-Blue-Yellow-Horizontal-Pattern-Crew-Neck-Pullover-12398346174185792?ref=www&shem=rimspwouoe,' },
                { name: 'Off Shoulder Backless Top', price: 'R203', image: 'images/shoppage/offtheshoulder.jpeg', link: 'https://www.fashionnova.com/en-za/products/cant-stress-me-off-shoulder-backless-top-fncolorname-blue' },
                { name: 'Fitted Long Sleeve', price: 'R122', image: 'images/shoppage/longsleevetop.jpg', link: 'https://m.shein.com/za/COUREZ%20Fitted%20Long%20Sleeve%20Graphic%20Tee%20Summer%20For%20Women%20Y2K%20Clothes%20Women%20Outfits%20Festival%20Concert%20Spring-p-63001197.html?cdn_rsite=cf&ref=m&rep=dir&ret=mza' }
            ]
        },
        'shoes-bags': {
            title: 'Shoes & Bags',
            items: [
                { name: 'Stella McCartney H&M: Pointed Slingbacks', price: 'R2,999', image: 'images/shoppage/stellaheel.JPG', link: 'https://superbalist.com/women/shoes/heels/stell' },
                { name: 'Knee-High Boots', price: 'R899', image: 'images/shoppage/kneehigh.JPG', link: 'https://superbalist.com/women/shoes/boots/knee-high-boots-beige-snakeskin-pattern-1291799005/1709752' },
                { name: 'Leopard Print Handbag', price: 'R168 (sale)', image: 'images/shoppage/leopardbag.WEBP', link: 'https://www.fashionnova.com/en-za/products/little-door-handbag-fncolorname-brown-combo' },
                { name: 'Triangular Crossbody Bag', price: 'R699', image: 'images/shoppage/trianglebag.JPG', link: 'https://superbalist.com/women/accessories/bags-purses/triangular-crossbody-bag-beige-1302765001/1704278?clickRef=brand' }
            ]
        }
    };

    function openCategoryPage(categoryId) {
        const category = categoryProducts[categoryId];
        if (category && shopCategoryPage) {
            categoryTitle.textContent = category.title;
            categoryItemsGrid.innerHTML = '';
            
            category.items.forEach(function(item) {
                const itemCard = document.createElement('div');
                itemCard.className = 'shop-item-card';
                itemCard.innerHTML = `
                    <img src="${item.image}" alt="${item.name}">
                    <h3>${item.name}</h3>
                    <p class="price">${item.price}</p>
                    <a href="${item.link}" class="shop-link" target="_blank">SHOP NOW →</a>
                `;
                categoryItemsGrid.appendChild(itemCard);
            });
            
            shopCategoryPage.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    }

    if (closeCategoryBtn) {
        closeCategoryBtn.addEventListener('click', function() {
            shopCategoryPage.style.display = 'none';
            document.body.style.overflow = '';
        });
    }

    if (categoryCards.length > 0) {
        categoryCards.forEach(function(card) {
            card.addEventListener('click', function(e) {
                e.preventDefault();
                const href = this.getAttribute('href');
                
                if (href && href.includes('accessories')) {
                    openCategoryPage('accessories');
                } else if (href && href.includes('pants-jeans')) {
                    openCategoryPage('pants-jeans');
                } else if (href && href.includes('dresses-skirts')) {
                    openCategoryPage('dresses-skirts');
                } else if (href && href.includes('tops')) {
                    openCategoryPage('tops');
                } else if (href && href.includes('shoes-bags')) {
                    openCategoryPage('shoes-bags');
                } else {
                    window.location.href = href;
                }
            });
        });
    }

});