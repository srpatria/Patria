function choose(path) {
    let storyDiv = document.getElementById('story');
    switch (path) {
        case 'cabin':
            storyDiv.innerHTML = `
                <h1>A Cabana Antiga</h1>
                <p>Você chega à cabana antiga. A porta está entreaberta e você pode ouvir um som misterioso vindo de dentro. Você decide:</p>
                <button class="choice-button" onclick="choose('exploreCabin')">Explorar a cabana</button>
                <button class="choice-button" onclick="choose('leaveCabin')">Voltar para a floresta</button>
            `;
            break;
        case 'river':
            storyDiv.innerHTML = `
                <h1>O Rio Brilhante</h1>
                <p>Você chega ao rio e vê uma ponte de madeira que parece instável. Você pode:</p>
                <button class="choice-button" onclick="choose('crossRiver')">Atravesse a ponte</button>
                <button class="choice-button" onclick="choose('relaxRiver')">Relaxar e contemplar a paisagem</button>
                <button class="choice-button" onclick="choose('searchRiver')">Procurar algo na água</button>
            `;
            break;
        case 'exploreCabin':
            storyDiv.innerHTML = `
                <h1>Explorando a Cabana</h1>
                <p>Dentro da cabana, você encontra um antigo baú coberto de poeira. Você decide:</p>
                <button class="choice-button" onclick="choose('openChest')">Abrir o baú</button>
                <button class="choice-button" onclick="choose('leaveCabin')">Sair da cabana</button>
                <button class="choice-button" onclick="choose('searchCabin')">Procurar mais coisas</button>
            `;
            break;
        case 'searchCabin':
            storyDiv.innerHTML = `
                <h1>Procurando na Cabana</h1>
                <p>Você procura pela cabana e encontra um antigo diário escondido em uma prateleira. O diário contém pistas sobre um tesouro escondido. Você decide:</p>
                <button class="choice-button" onclick="choose('readDiary')">Ler o diário</button>
                <button class="choice-button" onclick="choose('openChest')">Abrir o baú</button>
                <button class="choice-button" onclick="choose('leaveCabin')">Sair da cabana</button>
            `;
            break;
        case 'readDiary':
            storyDiv.innerHTML = `
                <h1>O Diário Antigo</h1>
                <p>O diário revela a localização de um tesouro escondido na floresta. Parece que você precisa seguir um mapa para encontrá-lo. Você:</p>
                <button class="choice-button" onclick="choose('followMap')">Seguir o mapa</button>
                <button class="choice-button" onclick="choose('leaveCabin')">Voltar para a floresta</button>
            `;
            break;
        case 'openChest':
            storyDiv.innerHTML = `
                <h1>O Baú Misterioso</h1>
                <p>Ao abrir o baú, você encontra um mapa antigo e uma chave. O mapa parece levar a um lugar profundo na floresta. Você:</p>
                <button class="choice-button" onclick="choose('followMap')">Seguir o mapa</button>
                <button class="choice-button" onclick="choose('leaveCabin')">Voltar para a floresta</button>
                <button class="choice-button" onclick="choose('useKey')">Usar a chave</button>
            `;
            break;
        case 'useKey':
            storyDiv.innerHTML = `
                <h1>Usando a Chave</h1>
                <p>A chave abre uma pequena porta no fundo da cabana, revelando um túnel secreto. Você decide:</p>
                <button class="choice-button" onclick="choose('exploreTunnel')">Explorar o túnel</button>
                <button class="choice-button" onclick="choose('leaveCabin')">Sair da cabana</button>
            `;
            break;
        case 'exploreTunnel':
            storyDiv.innerHTML = `
                <h1>O Túnel Secreto</h1>
                <p>Você explora o túnel e encontra uma câmara cheia de tesouros antigos. Você encontrou um grande prêmio! Você venceu!</p>
                <button class="choice-button" onclick="restart()">Jogar novamente</button>
            `;
            break;
        case 'crossRiver':
            storyDiv.innerHTML = `
                <h1>A Travessia do Rio</h1>
                <p>Você atravessa a ponte com sucesso e encontra uma pequena vila onde os habitantes o acolhem. Você encontra paz e novas amizades. Você venceu!</p>
                <button class="choice-button" onclick="restart()">Jogar novamente</button>
            `;
            break;
        case 'relaxRiver':
            storyDiv.innerHTML = `
                <h1>Relaxando à Beira do Rio</h1>
                <p>Você relaxa e contempla a paisagem. É um momento de paz e tranquilidade, mas você se pergunta o que poderia ter encontrado se tivesse explorado mais. Fim da história.</p>
                <button class="choice-button" onclick="restart()">Jogar novamente</button>
            `;
            break;
        case 'searchRiver':
            storyDiv.innerHTML = `
                <h1>Procurando no Rio</h1>
                <p>Você procura na água e encontra um pequeno baú submerso. Dentro há um antigo colar e um bilhete misterioso. Você decide:</p>
                <button class="choice-button" onclick="choose('readNote')">Ler o bilhete</button>
                <button class="choice-button" onclick="choose('keepTreasure')">Guardar o colar</button>
            `;
            break;
        case 'readNote':
            storyDiv.innerHTML = `
                <h1>O Bilhete Misterioso</h1>
                <p>O bilhete dá dicas sobre um tesouro escondido perto de uma árvore velha na floresta. Você:</p>
                <button class="choice-button" onclick="choose('searchTree')">Procurar a árvore</button>
                <button class="choice-button" onclick="choose('keepTreasure')">Guardar o colar</button>
            `;
            break;
        case 'searchTree':
            storyDiv.innerHTML = `
                <h1>Procurando a Árvore</h1>
                <p>Você encontra a árvore velha e cava no local indicado. Encontra um baú com ouro e joias! Você venceu!</p>
                <button class="choice-button" onclick="restart()">Jogar novamente</button>
            `;
            break;
        case 'keepTreasure':
            storyDiv.innerHTML = `
                <h1>Guardando o Colar</h1>
                <p>Você guarda o colar e volta para a cidade. Sua jornada continua, mas você se pergunta sobre os outros tesouros que poderia ter encontrado. Fim da história.</p>
                <button class="choice-button" onclick="restart()">Jogar novamente</button>
            `;
            break;
        case 'leaveCabin':
            storyDiv.innerHTML = `
                <h1>De Volta à Floresta</h1>
                <p>Você decide voltar para a floresta e continua sua jornada. A aventura continua com novas possibilidades e mistérios.</p>
                <button class="choice-button" onclick="restart()">Jogar novamente</button>
            `;
            break;
    }
}

function restart() {
    document.getElementById('story').innerHTML = `
        <h1>Bem-vindo à Aventura!</h1>
        <p>Você está em uma floresta misteriosa. À sua frente, há duas trilhas: uma leva a uma cabana antiga e a outra leva a um rio brilhante. Para onde você vai?</p>
        <button class="choice-button" onclick="choose('cabin')">Ir para a cabana</button>
        <button class="choice-button" onclick="choose('river')">Ir para o rio</button>
    `;
}

