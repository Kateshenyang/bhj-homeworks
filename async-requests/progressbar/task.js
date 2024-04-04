document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    const progress = document.getElementById('progress');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(form);

        const xhr = new XMLHttpRequest();

        xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload', true);

        xhr.upload.onprogress = function(event) {
            if (event.lengthComputable) {
                const percentComplete = event.loaded / event.total;
                progress.value = percentComplete;
            }
        };

        xhr.onload = xhr.onerror = function() {
            if (this.status == 200) {
                console.log("Успех");
            } else {
                console.log("Ошибка " + this.status);
            }
        };

        xhr.send(formData);
    });
});