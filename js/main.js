// Main file - Review form and homepage scroll padding
document.addEventListener('DOMContentLoaded', function() {

    // REVIEW SECTION FUNCTIONALITY
    const showReviewLink = document.getElementById('showReviewLink');
    const reviewFormContainer = document.getElementById('reviewFormContainer');
    const submitReviewBtn = document.getElementById('submitReviewBtn');
    const cancelReviewBtn = document.getElementById('cancelReviewBtn');
    const reviewsGrid = document.getElementById('reviewsGrid');

    const starRatingSpan = document.getElementById('starRating');
    const ratingValueInput = document.getElementById('ratingValue');

    if (starRatingSpan) {
        function updateStars(rating) {
            const fullStars = '★'.repeat(rating);
            const emptyStars = '☆'.repeat(5 - rating);
            starRatingSpan.textContent = fullStars + emptyStars;
            starRatingSpan.classList.add('active-star');
            ratingValueInput.value = rating;
        }
        
        starRatingSpan.addEventListener('click', function(e) {
            const rect = starRatingSpan.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const starWidth = rect.width / 5;
            const rating = Math.ceil(clickX / starWidth);
            updateStars(rating);
        });
        
        updateStars(5);
    }

    if (showReviewLink) {
        showReviewLink.addEventListener('click', function(e) {
            e.preventDefault();
            reviewFormContainer.style.display = 'block';
            showReviewLink.style.display = 'none';
        });
    }

    if (cancelReviewBtn) {
        cancelReviewBtn.addEventListener('click', function() {
            reviewFormContainer.style.display = 'none';
            showReviewLink.style.display = 'inline-block';
            document.getElementById('reviewerName').value = '';
            document.getElementById('reviewText').value = '';
            document.getElementById('reviewProduct').value = '';
            updateStars(5);
        });
    }

    if (submitReviewBtn) {
        submitReviewBtn.addEventListener('click', function() {
            const name = document.getElementById('reviewerName').value;
            const review = document.getElementById('reviewText').value;
            const product = document.getElementById('reviewProduct').value;
            const rating = parseInt(ratingValueInput.value);
            
            if (!name || !review) {
                alert('Please enter your name and review');
                return;
            }
            
            const starsDisplay = '★'.repeat(rating) + '☆'.repeat(5 - rating);
            
            const newReview = document.createElement('div');
            newReview.className = 'review-card';
            newReview.innerHTML = `
                <div class="stars">${starsDisplay}</div>
                <p>"${review}"</p>
                ${product ? `<p style="font-size: 12px; color: rgb(84, 21, 21); margin-top: 5px;">Product: ${product}</p>` : ''}
                <span class="reviewer">— ${name}, Just now</span>
            `;
            
            reviewsGrid.insertBefore(newReview, reviewsGrid.firstChild);
            
            document.getElementById('reviewerName').value = '';
            document.getElementById('reviewText').value = '';
            document.getElementById('reviewProduct').value = '';
            updateStars(5);
            reviewFormContainer.style.display = 'none';
            showReviewLink.style.display = 'inline-block';
            
            alert('Thank you for your review!');
        });
    }

    // HOMEPAGE SCROLL PADDING
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

});