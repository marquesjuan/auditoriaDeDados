
fetch('jsonPadronizado.json')
    .then(response => response.json())
    .then(dados => {
        const cabecalho = document.getElementById('cabecalho');
        const corpo = document.getElementById('corpo-tabela');

        
        if (dados.length > 0) {
            Object.keys(dados[0]).forEach(coluna => {
                const th = document.createElement('th');
                th.textContent = coluna;
                cabecalho.appendChild(th);
            });
        }

        
        dados.forEach(linha => {
            const tr = document.createElement('tr');
            Object.values(linha).forEach(valor => {
                const td = document.createElement('td');
                td.textContent = valor;
                tr.appendChild(td);
            });
            corpo.appendChild(tr);
        });
    })
    .catch(error => console.error('Erro ao carregar os dados:', error));