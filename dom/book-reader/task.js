document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.font-size').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            changeFontSize(this);
        });
    });

    document.querySelectorAll('.book__control_color .color').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            changeTextColor(this);
        });
    });

    document.querySelectorAll('.book__control_background .color').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            changeBackgroundColor(this);
        });
    });

    function changeFontSize(element) {
        document.querySelectorAll('.font-size').forEach(item => {
            item.classList.remove('font-size_active');
        });

        element.classList.add('font-size_active');

        const book = document.getElementById('book');
        book.classList.remove('book_fs-big', 'book_fs-small');
        if (element.dataset.size === 'small') {
            book.classList.add('book_fs-small');
        } else if (element.dataset.size === 'big') {
            book.classList.add('book_fs-big');
        }
    }

    function changeTextColor(element) {
        document.querySelectorAll('.book__control_color .color').forEach(item => {
            item.classList.remove('color_active');
        });

        element.classList.add('color_active');

        const book = document.getElementById('book');
        book.classList.remove('book_color-gray', 'book_color-whitesmoke', 'book_color-black');
        if (element.dataset.textColor) {
            book.classList.add(`book_color-${element.dataset.textColor}`);
        }
    }

    function changeBackgroundColor(element) {
        document.querySelectorAll('.book__control_background .color').forEach(item => {
            item.classList.remove('color_active');
        });

        element.classList.add('color_active');

        const book = document.getElementById('book');
        book.classList.remove('book_bg-gray', 'book_bg-black', 'book_bg-white');
        if (element.dataset.bgColor) {
            book.classList.add(`book_bg-${element.dataset.bgColor}`);
        }
    }
});