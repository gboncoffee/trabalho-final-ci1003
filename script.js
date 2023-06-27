var num_fase2 = 0

//
// TODO: fase 3 e 4
//

function testa_fase2() {
    let numero_tentado = document.querySelector('#number-input').value
    if (numero_tentado < num_fase2) {
        document.querySelector('#pergunta').innerHTML = `${numero_tentado} é menor que o número certo!`
    } else if (numero_tentado > num_fase2) {
        document.querySelector('#pergunta').innerHTML = `${numero_tentado} é maior que o número certo!`
    } else {
        fase3()
    }
}

function segunda_fase() {
    num_fase2 = Math.floor(Math.random() * 100)
    document.querySelector('#header-title').innerHTML = 'Fase 2'
    document.querySelector('#main-view').innerHTML = `
        <div id="text">
            <h2 id="pergunta">Escolhi um número entre 1 e 100. Tente advinhar!</h2>
            <input type="number" id="number-input">
            <div id="button">
                <button type="button" onclick="testa_fase2()">Responder</button>
            </div>
        </div>
    `
}

function testa_fase1() {
    if (document.querySelector('#number-input').value == 54) {
        segunda_fase()
    } else {
        document.querySelector('#pergunta').innerHTML = 'Errou! Tente novamente!'
    }
}

function primeira_fase() {
    let circle   = "<span style='color: red;'> &#x25cf;</span>"
    let square   = "<span style='color: blue;'> &#x25A0;</span>"
    let triangle = "<span style='color: yellow;'> &#x25b2;</span>"
    document.querySelector('#header-title').innerHTML = 'Fase 1'
    document.querySelector('#main-view').innerHTML = `
        <div id="text">
            <h2 id="pergunta">Qual a resposta?</h2>
            <span style="font-family: monospace; font-size: 30pt;">
                <p>
                ${circle} + ${circle} + ${circle} = 15
                </p>
                <p>
                ${circle} + ${square} + ${square} = 25
                </p>
                <p>
                ${square} + ${triangle} + ${triangle} = 14
                </p>
                <p>
                ${triangle} + ${square} x ${circle} = <input type="number" id="number-input">
                </p>
            </span>
            <div id="button">
                <button type="button" onclick="testa_fase1()">Responder</button>
            </div>
        </div>
    `
}

function tela_inicial() {
    document.querySelector('#main-view').innerHTML = `
        <div id="text">
            <p>
            Aqui vai o texto explicando brevemente sobre o que é computação e o
            funcionamento do jogo.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div id="button">
                <button type="button" onclick="primeira_fase()">Jogar!</button>
            </div>
        </div>
        <div id="image">
            <img src="lorem.jpg" id="content-image">
            <p>
            Legenda da imagem.
            </p>
        </div>
    ` 
}
