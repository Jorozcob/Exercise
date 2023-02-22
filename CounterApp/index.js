    let count = 0;


    function increment() {
        count++;
        document.getElementById('count-el').textContent = count;

    }

    function save() {
        let saveEl = document.getElementById('save-el');
        saveEl.textContent += ` ${count} - `;
        count = 0;
        document.getElementById('count-el').textContent = 0;

    }