// Wait for page to load
document.addEventListener('DOMContentLoaded', function() {

    // ===== HAMBURGER MENU (appears on scroll) =====
    const topBar = document.querySelector('.top-bar');
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const slideMenu = document.getElementById('slideMenu');
    const closeMenuBtn = document.getElementById('closeMenuBtn');
    const menuOverlay = document.getElementById('menuOverlay');

    // Only run if these elements exist on the page
    if (topBar && hamburgerBtn && slideMenu && closeMenuBtn && menuOverlay) {
        
        // Show/hide hamburger when scrolling
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                topBar.classList.add('scrolled');
            } else {
                topBar.classList.remove('scrolled');
                // Close menu when scrolling back up
                slideMenu.classList.remove('open');
                menuOverlay.classList.remove('open');
                document.body.style.overflow = '';
            }
        });

        // Open menu
        function openMenu() {
            slideMenu.classList.add('open');
            menuOverlay.classList.add('open');
            document.body.style.overflow = 'hidden';
        }

        // Close menu
        function closeMenu() {
            slideMenu.classList.remove('open');
            menuOverlay.classList.remove('open');
            document.body.style.overflow = '';
        }

        // Event listeners
        hamburgerBtn.addEventListener('click', openMenu);
        closeMenuBtn.addEventListener('click', closeMenu);
        menuOverlay.addEventListener('click', closeMenu);

        // Close menu when any link is clicked
        const slideLinks = document.querySelectorAll('.slide-menu a');
        slideLinks.forEach(function(link) {
            link.addEventListener('click', closeMenu);
        });
    }

    // BLOG PAGE CATEGORY FILTER
    const filterBtns = document.querySelectorAll('.filter-btn');
    const blogCards = document.querySelectorAll('.blog-card');

    if (filterBtns.length > 0 && blogCards.length > 0) {
        filterBtns.forEach(function(btn) {
            btn.addEventListener('click', function() {
                const category = this.getAttribute('data-category');
                
                // Update active button
                filterBtns.forEach(function(b) {
                    b.classList.remove('active');
                });
                this.classList.add('active');
                
                // Filter cards
                blogCards.forEach(function(card) {
                    if (category === 'all' || card.getAttribute('data-category') === category) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // BLOG PAGE PAGINATION 
    const page1Link = document.querySelector('.pagination a[href="#page1"]');
    const page2Link = document.querySelector('.pagination a[href="#page2"]');
    const page1Posts = document.querySelector('.blog-posts:not(.page2)');
    const page2Posts = document.querySelector('.page2');
    const paginationLinks = document.querySelectorAll('.pagination a');

    if (page1Link && page2Link && page1Posts && page2Posts) {
        
        // Show page 1, hide page 2
        function showPage1() {
            page1Posts.style.display = 'block';
            page2Posts.style.display = 'none';
            paginationLinks.forEach(function(link) {
                link.classList.remove('active');
            });
            page1Link.classList.add('active');
        }

        // Show page 2, hide page 1
        function showPage2() {
            page1Posts.style.display = 'none';
            page2Posts.style.display = 'block';
            paginationLinks.forEach(function(link) {
                link.classList.remove('active');
            });
            page2Link.classList.add('active');
        }

        page1Link.addEventListener('click', function(e) {
            e.preventDefault();
            showPage1();
        });

        page2Link.addEventListener('click', function(e) {
            e.preventDefault();
            showPage2();
        });
    }

    // BLOG POST FULL VIEW (5th page) 
    // Get all blog post links on homepage and blog page
    const allPostLinks = document.querySelectorAll('.post-card, .blog-card a, .read-more-btn');
    const fullPostContainer = document.getElementById('full-post-container');
    
      // Store post data for all blog posts
    const postData = {
        'boot-love': {
            title: 'A Boot Love Affair: Styling Boots',
            date: '12 May 2026',
            category: 'autumn',
            image: 'images/blog/boots-full.jpg',
            content: 'I have an obsession with boots and you should too. There\'s just something about a big chunky boot with baggy jeans, or a chunky high heel boot with a midi skirt or even a mini skirt. Boots can transform any outfit from basic to bold in seconds. Whether you\'re going for a grunge look with combat boots or a sleek evening vibe with heeled boots, there\'s a pair for every mood. My current favourites? A pair of white knee-high boots that go with everything and some black platform boots that make me feel unstoppable. Trust me, once you start, you won\'t stop.',
            gallery: ['images/blogpage/jsimages/boots1.jpeg', 'images/blogpage/jsimages/boots2.jpeg', 'images/blogpage/jsimages/boots3.jpeg']
        },
        'girls-night': {
            title: 'What to Wear: Girls Night Out',
            date: '8 May 2026',
            category: 'party',
            image: 'images/blog/girls-night-full.jpg',
            content: 'It\'s time to get wild girls! Bring on the fur, the sparkles, the sandals, the tiniest skirts ever and let\'s go have the best night out with our girls! I know you\'ve been waiting for this. Here are some of my nastiest girls night out outfits. Sequins, leather, cutouts, you name it. The key is confidence. Wear what makes you feel like the main character. And remember, the night is young and so are we.',
            gallery: ['images/blog/girls-night-look1.jpg', 'images/blog/girls-night-look2.jpg']
        },
        'summering': {
            title: 'I\'m Summering: Vacation Looks',
            date: '2 May 2026',
            category: 'summer',
            image: 'images/blog/summering-full.jpg',
            content: 'I\'ve had a love hate relationship with summer fashion for a while and I can\'t believe I\'m about to say this but I think I\'m slowly starting to prefer summer fashion over winter fashion. Idk, could it possibly be the new wave of chic and colourful but minimal fashion trend? I\'ve loved every summer look I\'ve seen and these are some of my favourite summer looks I\'ve put on, some on vacation as well. Light fabrics, bright colours, and easy silhouettes. Summer fashion is finally making sense to me.',
            gallery: ['images/blog/summer-look1.jpg', 'images/blog/summer-look2.jpg', 'images/blog/summer-look3.jpg']
        },
        'bikinis': {
            title: 'Bikini Season: My Top Picks',
            date: '25 May 2026',
            category: 'summer',
            image: 'images/blog/bikinis-full.jpg',
            content: 'Okay so bikini season is here and I am not mad about it. After years of stressing about finding the perfect swimsuit, I\'ve finally figured out what works. The trick? Buy what makes you feel hot, not what you think you should wear. I\'ve rounded up my absolute favourite bikinis that I\'ve been living in. From cute little crochet numbers to bold animal prints, there\'s something here for every vibe. My current obsession is a bright orange two piece that just does something to my skin tone. Trust me, life is too short for boring swimwear. Get the bikini, take the trip, take the picture.',
            gallery: ['images/blog/bikini-look1.jpg', 'images/blog/bikini-look2.jpg']
        },
        'tea-party': {
            title: 'High Tea Party: Chill Edition',
            date: '18 May 2026',
            category: 'party',
            image: 'images/blog/tea-party-full.jpg',
            content: 'Don\'t think you have anything in your closet for a tea party theme? Try again. I used to panic every time someone invited me to something that required "dressing up but not too much." But I\'ve learned that a tea party is just an excuse to wear something pretty and feel fancy for a few hours. Think flowy midi dresses, dainty jewellery, maybe a little cardigan if you want to be extra. My go to? A soft pink dress with puff sleeves and some pearl earrings. It\'s giving elegant but make it chill. You don\'t need to overthink it. Just wear what makes you feel cute and show up with a smile.',
            gallery: ['images/blog/teaparty-look1.jpg', 'images/blog/teaparty-look2.jpg']
        },
        'street-style': {
            title: 'My Favourite Street Style Looks: How to Dress For THAAT Streets',
            date: '10 May 2026',
            category: 'autumn',
            image: 'images/blog/street-style-full.jpg',
            content: 'Listen, street style is my love language. There\'s something about throwing together an outfit that looks effortless but actually took way too long to put together. I love a good baggy jean with a fitted top, or an oversized blazer with some chunky sneakers. The key is confidence. You can wear anything if you act like you own the room. My favourite street style looks always have a little edge. Maybe some silver jewellery, maybe a bold lip, maybe just really good sunglasses. Don\'t be afraid to mix patterns or textures. The streets are your runway, so have fun with it.',
            gallery: ['images/blogpage/jsimages/street1.jpeg', 'images/blogpage/jsimages/street2.jpeg', 'images/blogpage/jsimages/street3.jpeg']
        },
        'midi-skirts': {
            title: 'For the Love of Midi Skirts!',
            date: '5 May 2026',
            category: 'autumn',
            image: 'images/blog/midi-skirts-full.jpg',
            content: 'Can we talk about how midi skirts have taken over my closet? I used to be a mini skirt girl through and through but something shifted. A midi skirt is just so elegant. It moves with you, it doesn\'t ride up, and you can dress it up or down. I have a satin slip skirt that I wear with everything. Tucked in t shirt? Yes. Chunky knit sweater? Also yes. Going out top? Absolutely. The best part is that it looks expensive even when it\'s not. If you haven\'t tried a midi skirt yet, what are you waiting for? Trust me, you need at least one in your life.',
            gallery: ['images/blog/midi-look1.jpg', 'images/blog/midi-look2.jpg']
        },
        'how-many-furs': {
            title: 'How Many Furs You Got?',
            date: '28 May 2026',
            category: 'party',
            image: 'images/blog/furs-full.jpg',
            content: 'I\'ll be honest with you. I have a problem and the problem is that I keep buying fur coats. Faux fur obviously, but still. There\'s just something about throwing on a fluffy coat that makes any outfit ten times better. Going to the grocery store? Fur coat. Coffee run? Fur coat. Night out? Definitely a fur coat. I have a pink one, a leopard one, a cream one, and I want more. They make you feel like a celebrity even when you\'re just walking to your car. So here\'s my question to you. How many furs you got? And if the answer is none, what are we doing? Let\'s fix that.',
            gallery: ['images/blog/fur-look1.jpg', 'images/blog/fur-look2.jpg']
        },
        'outfits-work': {
            title: 'Outfits That Shouldn\'t Work, But They Do!',
            date: '30 April 2026',
            category: 'summer',
            image: 'images/blog/unlikely-outfits-full.jpg',
            content: 'Some outfits just don\'t make sense on paper but then you put them on and something magical happens. I\'m talking about a dress over pants. Or socks with sandals. Or a really bold pattern mixed with another bold pattern. These are the outfits that shouldn\'t work but they do. My favourite right now is wearing a silky slip dress over wide leg jeans with chunky sneakers. It sounds crazy but it works. The trick is to commit. If you act like it makes sense, people will believe you. So go ahead and break the fashion rules. Sometimes the best outfits come from saying "why not" instead of "why."',
            gallery: ['images/blog/unlikely-look1.jpg', 'images/blog/unlikely-look2.jpg', 'images/blog/unlikely-look3.jpg']
        },
        'fur-coat': {
            title: 'Don\'t Sleep on a Fur Coat',
            date: '25 April 2026',
            category: 'featured',
            image: 'images/blog/fur-coat-full.jpg',
            content: 'A leopard print fur coat at that. I\'ve been wearing this fur coat for a couple of years and it\'s my favourite item in my closet. If you love a pretty and wild looking closet, get yourself some fur and animal print. You won\'t regret it, trust. It literally elevates any look. It\'s definitely a statement piece, perfect for autumn and winter. I bought this one from Fashion Nova and the quality is fantastic. They may not have this exact one right now but I trust Fashion Nova to have a good fur coat. Honestly, a good fur coat changes everything. You throw it on over jeans and a t shirt and suddenly you look like you tried. It\'s magic. So please, don\'t sleep on a fur coat. Get one. Wear it. Love it.',
            gallery: ['images/blog/furcoat-look1.jpg', 'images/blog/furcoat-look2.jpg,']
        },

        'leopard-fur-coat': {
            title: 'Don\'t Sleep on a Leopard Fur Coat',
            date: '26 May 2026',
            category: 'featured',
            image: 'images/blog/fur-coat-full.jpg',
            content: 'A leopard print fur coat at that. I\'ve been wearing this fur coat for a couple of years and it\'s my favourite item in my closet. If you love a pretty and wild looking closet, get yourself some fur and animal print. You won\'t regret it, trust. It literally elevates any look. It\'s definitely a statement piece, perfect for autumn and winter. I bought this one from Fashion Nova and the quality is fantastic. They may not have this exact one right now but I trust Fashion Nova to have a good fur coat. Honestly, a good fur coat changes everything. You throw it on over jeans and a t shirt and suddenly you look like you tried. It\'s magic. So please, don\'t sleep on a fur coat. Get one. Wear it. Love it.',
            gallery: ['images/blogpage/jsimages/leopard1.jpg', 'images/blogpage/jsimages/leopard2.jpg', 'images/blogpage/jsimages/leopard3.jpg']
        }
}


    // Create full post page if it doesn't exist
    if (!document.getElementById('full-post-page')) {
        const fullPostHTML = `
            <div id="full-post-page" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgb(255, 253, 247); z-index: 1000; overflow-y: auto; padding: 60px 80px;">
                <button id="close-full-post" style="position: fixed; top: 20px; right: 40px; background: none; border: none; font-size: 30px; cursor: pointer; color: rgb(84, 21, 21);">✕</button>
                <div class="full-post-content" style="max-width: 800px; margin: 0 auto;">
                    <h2 id="full-post-title" style="font-family: 'Playfair Display', serif; font-size: 36px; color: rgb(84, 21, 21); margin-bottom: 10px;"></h2>
                    <p id="full-post-date" style="font-family: 'Open Sans', sans-serif; font-size: 12px; color: rgb(120, 120, 120); margin-bottom: 30px;"></p>
                    <img id="full-post-image" src="" alt="" style="width: 100%; border-radius: 12px; margin-bottom: 30px;">
                    <p id="full-post-text" style="font-family: 'Open Sans', sans-serif; font-size: 16px; line-height: 1.8; color: rgb(80, 80, 80);"></p>
                    <div id="full-post-gallery" style="display: flex; gap: 20px; margin-top: 30px;"></div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', fullPostHTML);
    }

    const fullPostPage = document.getElementById('full-post-page');
    const closeFullPost = document.getElementById('close-full-post');

    // Function to open full post
    function openFullPost(postId) {
        const post = postData[postId];
        if (post && fullPostPage) {
            document.getElementById('full-post-title').textContent = post.title;
            document.getElementById('full-post-date').textContent = post.date;
            document.getElementById('full-post-image').src = post.image;
            document.getElementById('full-post-text').textContent = post.content;
            
            const galleryContainer = document.getElementById('full-post-gallery');
            galleryContainer.innerHTML = '';
            
            if (post.gallery && post.gallery.length > 0) {
                post.gallery.forEach(function(imgSrc) {
                    const img = document.createElement('img');
                    img.src = imgSrc;
                    img.style.width = 'calc(33.33% - 14px)';
                    img.style.borderRadius = '8px';
                    galleryContainer.appendChild(img);
                });
            }
            
            fullPostPage.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    }

    // Close full post
    if (closeFullPost) {
        closeFullPost.addEventListener('click', function() {
            fullPostPage.style.display = 'none';
            document.body.style.overflow = '';
        });
    }

    // Click handlers to all post links
    if (allPostLinks.length > 0) {
        allPostLinks.forEach(function(link) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const href = this.getAttribute('href');
                
                // Map href to postData keys
                if (href && href.includes('boot')) {
                    openFullPost('boot-love');
                } else if (href && href.includes('girls-night')) {
                    openFullPost('girls-night');
                } else if (href && href.includes('summering')) {
                    openFullPost('summering');
                } else if (href && href.includes('bikinis')) {
                    openFullPost('bikinis');
                } else if (href && href.includes('tea-party')) {
                    openFullPost('tea-party');
                } else if (href && href.includes('street-style')) {
                    openFullPost('street-style');
                } else if (href && href.includes('midi-skirts')) {
                    openFullPost('midi-skirts');
                } else if (href && href.includes('how-many-furs') || href && href.includes('furs')) {
                    openFullPost('how-many-furs');
                } else if (href && href.includes('outfits-work')) {
                    openFullPost('outfits-work');
                } else if (href && href.includes('fur-coat') || href && href.includes('leopard')) {
                    openFullPost('leopard-fur-coat'); 
                } else {
                
                    if (postData[href]) {
                        openFullPost(href);
                    } else {
                        window.location.href = href;
                    }
                }
            });
        });
    }

});

// Handle body padding on homepage scroll
const body = document.body;
const headerSpacer = document.querySelector('.header-spacer');

if (body.classList.contains('home-page')) {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 10) {
            body.style.paddingTop = '70px';
            if (headerSpacer) headerSpacer.style.height = '0px';
        } else {
            body.style.paddingTop = '0px';
            if (headerSpacer) headerSpacer.style.height = '0px';
        }
    });
}