// Blog page filters, pagination, and full post view
document.addEventListener('DOMContentLoaded', function() {

    // BLOG PAGE CATEGORY FILTER
    const filterBtns = document.querySelectorAll('.filter-btn');
    const blogCards = document.querySelectorAll('.blog-card');

    if (filterBtns.length > 0 && blogCards.length > 0) {
        filterBtns.forEach(function(btn) {
            btn.addEventListener('click', function() {
                const category = this.getAttribute('data-category');
                
                filterBtns.forEach(function(b) {
                    b.classList.remove('active');
                });
                this.classList.add('active');
                
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
        
        function showPage1() {
            page1Posts.style.display = 'block';
            page2Posts.style.display = 'none';
            paginationLinks.forEach(function(link) {
                link.classList.remove('active');
            });
            page1Link.classList.add('active');
        }

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

    // BLOG POST FULL VIEW
    const allPostLinks = document.querySelectorAll('.post-card, .blog-card a, .read-more-btn');
    
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
            gallery: ['images/blogpage/jsimages/party1.jpeg', 'images/blogpage/jsimages/party2.jpeg', 'images/blogpage/jsimages/party3.jpeg']
        },
        'summering': {
            title: 'I\'m Summering: Vacation Looks',
            date: '2 May 2026',
            category: 'summer',
            image: 'images/blog/summering-full.jpg',
            content: 'I\'ve had a love hate relationship with summer fashion for a while and I can\'t believe I\'m about to say this but I think I\'m slowly starting to prefer summer fashion over winter fashion. Idk, could it possibly be the new wave of chic and colourful but minimal fashion trend? I\'ve loved every summer look I\'ve seen and these are some of my favourite summer looks I\'ve put on, some on vacation as well. Light fabrics, bright colours, and easy silhouettes. Summer fashion is finally making sense to me.',
            gallery: ['images/blogpage/jsimages/summer1.jpeg', 'images/blogpage/jsimages/summer2.jpeg', 'images/blogpage/jsimages/summer3.jpeg']
        },
        'bikinis': {
            title: 'Bikini Season: My Top Picks',
            date: '25 December 2025',
            category: 'summer',
            image: 'images/blog/bikinis-full.jpg',
            content: 'Okay so bikini season is here and I am not mad about it. I\'ve loved my pink crochet bikini for the longest time, but my new yellow polka dot one is definitely my new favourite. Polka dots just save any outfit, don\'t they? They\'re cute, playful, and instantly make anything look more fun. To be honest though, I\'ve gotten tired of buying new bikinis all the time. Lately, I\'ve been getting creative. I\'ll throw on a cute little baby tee with a bikini bottom, or pair a bikini top with some cute shorts. It makes the whole thing feel like a brand new cool swimsuit without spending extra money. The trick is to mix and match. A bikini doesn\'t have to just be a bikini. Turn it into a top, layer it, have fun with it. Life is too short for boring swimwear.',
            gallery: ['images/blogpage/jsimages/bikini.jpeg', 'images/blogpage/jsimages/bikini2.jpeg', 'images/blogpage/jsimages/bikini3.jpeg']
        },
        'tea-party': {
            title: 'High Tea Party: Chill Edition',
            date: '18 May 2026',
            category: 'party',
            image: 'images/blog/tea-party-full.jpg',
            content: 'Don\'t think you have anything in your closet for a tea party theme? Try again. I used to panic every time someone invited me to something that required "dressing up." But I\'ve learned that a tea party is just an excuse to wear something pretty and feel fancy for a few hours. Think flowy midi dresses, dainty jewellery, maybe a little kitten heel. My go to? A solid colour maxi skirt, kitten heels and some gold or pearl earrings. It\'s giving elegant but make it chill. You don\'t need to overthink it. Just wear what makes you feel cute and show up with a smile.',
            gallery: ['images/blogpage/jsimages/teaparty1.jpeg', 'images/blogpage/jsimages/teaparty2.jpeg', 'images/blogpage/jsimages/teaparty3.jpeg']
        },
        'street-style': {
            title: 'My Favourite Street Style Looks: How to Dress For THAAT Streets',
            date: '10 May 2026',
            category: 'autumn',
            image: 'images/blog/street-style-full.jpg',
            content: 'Listen, street style is my love language. There\'s something about throwing together an outfit that looks effortless but actually took way too long to put together. I love a good baggy jean with a fitted top, lets not even get into the off the shoulder tops! The key is confidence. You can wear anything if you act like you own the room. My favourite street style looks always have a little edge. Always one good statement piece, like a sickening shoe or really good sunglasses. Don\'t be afraid to mix patterns or textures. The streets are your runway, so have fun with it.',
            gallery: ['images/blogpage/jsimages/street1.jpeg', 'images/blogpage/jsimages/street2.jpeg', 'images/blogpage/jsimages/street3.jpeg']
        },
        'midi-skirts': {
            title: 'For the Love of Midi Skirts!',
            date: '5 May 2026',
            category: 'autumn',
            image: 'images/blog/midi-skirts-full.jpg',
            content: 'Can we talk about how midi skirts have taken over my closet? I used to be a pants girl through and through but something shifted. A midi skirt is just so elegant. It moves with you, it doesn\'t ride up, and you can dress it up or down. I have a satin slip skirt that I wear with everything. Long sleeve tops? yes. Short sleeve tops? Also yes. Boots and sandals? Absolutely. The best part is that it looks expensive even when it\'s not. If you haven\'t tried a midi skirt yet, what are you waiting for? Trust me, you need at least one in your life.',
            gallery: ['images/blogpage/jsimages/midiskirt1.jpeg', 'images/blogpage/jsimages/boots1.jpeg', 'images/blogpage/jsimages/teaparty3.jpeg']
        },
        'how-many-furs': {
            title: 'How Many Furs You Got?',
            date: '28 May 2026',
            category: 'party',
            image: 'images/blog/furs-full.jpg',
            content: 'I\'ll be honest with you. I have a problem and the problem is that I keep buying fur coats. Faux fur obviously, but still. There\'s just something about throwing on a fluffy coat that makes any outfit ten times better. Going to the grocery store? Fur coat. Coffee run? Fur coat. Night out? Definitely a fur coat. I have a green one, a leopard one, a beige one, and I want more. They make you feel like a celebrity even when you\'re just walking to your car. So here\'s my question to you. How many furs you got? And if the answer is none, what are we doing? Let\'s fix that.',
            gallery: ['images/blogpage/jsimages/fur1.jpeg', 'images/blogpage/jsimages/fur2.jpeg', 'images/blogpage/jsimages/fur3.jpg']
        },
        'outfits-work': {
            title: 'Outfits That Shouldn\'t Work, But They Do!',
            date: '30 April 2026',
            category: 'summer',
            image: 'images/blog/unlikely-outfits-full.jpg',
            content: 'Some outfits just don\'t make sense on paper but then you put them on and something magical happens. I\'m talking about wearing a skirt as a top. Mixing formal wear with sweats. Or a really bold pattern mixed with another bold pattern. These are the outfits that shouldn\'t work but they do. My favourite right now has to be mixing patterns, within the same colour scheme though. Or not! It sounds crazy but it works. The trick is to commit. If you act like it makes sense, people will believe you. So go ahead and break the fashion rules. Sometimes the best outfits come from saying "why not" instead of "why."',
            gallery: ['images/blogpage/jsimages/work1.jpeg', 'images/blogpage/jsimages/work2.jpeg']
        },
        'leopard-fur-coat': {
            title: 'Don\'t Sleep on a Leopard Fur Coat',
            date: '26 May 2026',
            category: 'featured',
            image: 'images/blog/fur-coat-full.jpg',
            content: 'A leopard print fur coat at that. I\'ve been wearing this fur coat for a couple of years and it\'s my favourite item in my closet. If you love a pretty and wild looking closet, get yourself some fur and animal print. You won\'t regret it, trust. It literally elevates any look. It\'s definitely a statement piece, perfect for autumn and winter. I bought this one from Fashion Nova and the quality is fantastic. They may not have this exact one right now but I trust Fashion Nova to have a good fur coat. Honestly, a good fur coat changes everything. You throw it on over jeans and a t shirt and suddenly you look like you tried. It\'s magic. So please, don\'t sleep on a fur coat. Get one. Wear it. Love it.',
            gallery: ['images/blogpage/jsimages/leopard1.jpg', 'images/blogpage/jsimages/leopard2.jpg', 'images/blogpage/jsimages/leopard3.jpg']
        }
    };

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

    if (closeFullPost) {
        closeFullPost.addEventListener('click', function() {
            fullPostPage.style.display = 'none';
            document.body.style.overflow = '';
        });
    }

    if (allPostLinks.length > 0) {
        allPostLinks.forEach(function(link) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const href = this.getAttribute('href');
                
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
                } else if (href && href.includes('leopard-fur-coat')) {
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