// script for ./logs/js

getData();
async function getData() {
    const response = await fetch('/api');
    const data = await response.json();
    console.log(data);

    for (item of data) {
        const root = document.createElement('div');
        const nome = document.createElement('p');
        const geo = document.createElement('p');
        const time = document.createElement('p');
        const dateString = new Date(item.timestamp).toLocaleString();
        const image = document.createElement('img');
        root.id = "root";
        image.alt = "foto from webcam"

        nome.textContent = `nome: ${item.nome}`;
        geo.textContent = `${item.lat}°, ${item.lon}°`;
        time.textContent = dateString;
        image.src = item.image64;

        root.append(nome, geo, time, image);
        document.body.append(root);
        const linha = document.createElement('hr')
        document.body.append(linha);
    }
}