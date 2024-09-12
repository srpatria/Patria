function choose(path) {
    let storyDiv = document.getElementById('story');
    if (path === 'cabin') {
        storyDiv.innerHTML = `
            <h1>A Cabana Antiga</h1>
            <p>Você chega à cabana antiga. A porta está entreaberta e você pode ouvir um som misterioso vindo de dentro. Você decide:</p>
            <button class="choice-button" onclick="choose('exploreCabin')">Explorar a cabana</button>
            <button class="choice-button" onclick="choose('leaveCabin')">Voltar para a floresta</button>
        `;
    } else if (path === 'river') {
        storyDiv.innerHTML = `
            <h1>O Rio Brilhante</h1>
            <p>Você chega ao rio e vê uma ponte de madeira que parece instável. Você pode:</p>
            <button class="choice-button" onclick="choose('crossRiver')">Atravesse a ponte</button>
            <button class="choice-button" onclick="choose('relaxRiver')">Relaxar e contemplar a paisagem</button>
        `;
    } else if (path === 'exploreCabin') {
        storyDiv.innerHTML = `
            <h1>Explorando a Cabana</h1>
            <p>Dentro da cabana, você encontra um antigo baú coberto de poeira. Você decide:</p>
            <button class="choice-button" onclick="choose('openChest')">Abrir o baú</button>
            <button class="choice-button" onclick="choose('leaveCabin')">Sair da cabana</button>
        `;
    } else if (path === 'openChest') {
        storyDiv.innerHTML = `
            <h1>O Baú Misterioso</h1>
            <p>Ao abrir o baú, você encontra um mapa antigo e uma chave. O mapa parece levar a um lugar profundo na floresta. Você:</p>
            <button class="choice-button" onclick="choose('followMap')">Seguir o mapa</button>
            <button class="choice-button" onclick="choose('leaveCabin')">Voltar para a floresta</button>
        `;
    } else if (path === 'followMap') {
        storyDiv.innerHTML = `
            <h1>O Destino do Mapa</h1>
            <p>Seguindo o mapa, você encontra um antigo templo escondido. Dentro, você encontra um tesouro incrível! Você venceu!</p>
            <button class="choice-button" onclick="restart()">Jogar novamente</button>
        `;
    } else if (path === 'crossRiver') {
        storyDiv.innerHTML = `
            <h1>A Travessia do Rio</h1>
            <p>Você atravessa a ponte com sucesso e encontra uma pequena vila onde os habitantes o acolhem. Você encontra paz e novas amizades. Você venceu!</p>
            <button class="choice-button" onclick="restart()">Jogar novamente</button>
        `;
    } else if (path === 'relaxRiver') {
        storyDiv.innerHTML = `
            <h1>Relaxando à Beira do Rio</h1>
            <p>Você relaxa e contempla a paisagem. É um momento de paz e tranquilidade, mas você se pergunta o que poderia ter encontrado se tivesse explorado mais. Fim da história.</p>
            <button class="choice-button" onclick="restart()">Jogar novamente</button>
        `;
    } else if (path === 'leaveCabin') {
        storyDiv.innerHTML = `
            <h1>De Volta à Floresta</h1>
            <p>Você decide voltar para a floresta e continua sua jornada. A aventura continua com novas possibilidades e mistérios.</p>
            <button class="choice-button" onclick="restart()">Jogar novamente</button>
        `;
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
