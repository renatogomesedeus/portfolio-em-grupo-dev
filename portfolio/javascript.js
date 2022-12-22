function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 75 * i)
    });
}

function createProggressBar() {
    const tecItems = document.getElementsByClassName('tec-item');
    for (let i = 0; i < tecItems.length; i++) {
        const tecItem = tecItems[i];
        const tecItemLegend = tecItem.getElementsByClassName('tec-item-legend')[0];
        const progressBar = document.createElement('div')
        progressBar.style.width = '100%';
        progressBar.style.height = '4px';
        progressBar.style.borderRadius = '5px';
        progressBar.style.position = 'relative';
        progressBar.style.backgroundColor = '#DDDDDD';
        progressBar.style.marginTop = '10px';

        const percentage = +tecItemLegend.getElementsByTagName('div')[1].innerText.replace('%', '');
        const progressFilled = document.createElement('div');
        progressFilled.style.position = 'absolute';
        progressFilled.style.width = `${percentage}%`;
        progressFilled.style.backgroundColor = 'black';
        progressFilled.style.left = '0';
        progressFilled.style.top = '0';
        progressFilled.style.bottom = '0';

        progressBar.appendChild(progressFilled);

        tecItemLegend.after(progressBar);
    }
}
