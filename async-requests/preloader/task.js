export default async function run({execution_id, input, data}) {
    const loadCurrencyRates = () => {
        return new Promise((resolve, reject) => {
            const request = new XMLHttpRequest();
            request.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses', true);

            request.onload = function() {
                if (this.status >= 200 && this.status < 300) {
                    resolve(JSON.parse(this.response));
                } else {
                    reject({
                        status: this.status,
                        statusText: this.statusText
                    });
                }
            };

            request.onerror = function() {
                reject({
                    status: this.status,
                    statusText: this.statusText
                });
            };

            request.send();
        });
    };

    try {
        const response = await loadCurrencyRates();
        const valutes = response.response.Valute;
        const itemsContainer = document.getElementById('items');
        itemsContainer.innerHTML = '';

        Object.values(valutes).forEach(valute => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('item');
            itemElement.innerHTML = `
                <div class="item__code">${valute.CharCode}</div>
                <div class="item__value">${valute.Value}</div>
                <div class="item__currency">руб.</div>
            `;
            itemsContainer.appendChild(itemElement);
        });

        document.getElementById('loader').classList.remove('loader_active');
    } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
        document.getElementById('loader').classList.remove('loader_active');
    }

    return {};
}