var num_fase2 = 0

const teste_de_einstein = {
    paises: [ 'Inglaterra', 'Aústria', 'Estados Unidos da América', 'Estados Unidos da América' ],
    nascimento: [ 1815, 1914, 1906, 1936 ],
    legado: [
        'Primeira pessoa do mundo a programar um computador.',
        'Criou a tecnologia necessária para o Wi-Fi (sistema que permite computadores se comunicarem sem fios).',
        'Criou a primeira linguagem de programação.',
        'Programou os computadores do foguete Apollo XI, que levou o ser humano à Lua.'
    ],
    curiosidade: [
        'Era filha de Lord Byron, o famoso escritor.',
        'Trabalhava como atriz, e estudar ciência e inventar era seu hobbie',
        'Tinha pequenos pedaços de fio que chamava nanossegundos, porque eles tinham exatamente o comprimento que a luz viaja em um nanossegundo.',
        'Trabalhou como professora de matemática antes de programar.'
    ],
}

// fase 4 {{{
function falhar_botao(id) {
    document.querySelector(id).style.border = 'solid 4px #ff5555'
}

function acertar_botao(id) {
    document.querySelector(id).style.border = 'solid 4px #50fa7b'
}

function cria_botoes(pergunta, opcoes, certa) {
    let botoes = ''
    for (i = 0; i < opcoes.length; i++) {
        id = pergunta + i
        if (i != certa) {
            botoes += `
                <div id="button">
                    <button type="button" id="${id}" onclick="falhar_botao('${'#' + id}')">${opcoes[i]}</button>
                </div>
            `
        } else {
            botoes += `
                <div id="button">
                    <button type="button" id="${id}" onclick="acertar_botao('${'#' + id}')">${opcoes[i]}</button>
                </div>
            `
        }
    }
    return botoes
}

function fase4() {
    const opcoes_1 = [
        'Ada Lovelace',
        'Giorgian de Arrascaeta',
        'John Von Neumann',
        'Carmen Hara'
    ]
    const opcoes_2 = [
        'Alan Turing',
        'Marcos Castilho',
        'Grace Hopper',
        'Ronald Reagan'
    ]
    const opcoes_3 = [
        'Daniel Oliveira',
        'Margaret Hamilton',
        'Albert Einstein',
        'Ronaldo de Assis Moreira'
    ]
    const opcoes_4 = [
        'Hedy Lamarr',
        'Carlos Maziero',
        'Nakamoto Suzuka',
        'David Hilbert'
    ]
    const opcoes_5 = [
        'Alan Turing',
        'Benedict Cumberbatch',
        'Eduardo Hoefel',
        'Mavis Batey'
    ]

    document.querySelector('#header-title').innerHTML = 'Fase 4: Quiz Final'
    document.querySelector('#main-view').innerHTML = `
        <div id="text">
            <p>
            Programar um computador significa criar uma sequência de instruções
            que ele consiga reproduzir. Quem foi a primeira pessoa programadora
            do mundo?
            </p>
            ${cria_botoes('primeira-programadora', opcoes_1, 0)}
            <p>
            Linguagens de programação são línguas, como inglês e português, com
            o propósito específico de definir instruções que tanto o computador
            quanto os programadores consigam entender facilmente. Quem foi que
            criou a primeira linguagem de programação?
            </p>
            ${cria_botoes('assembly', opcoes_2, 2)}
            <p>
            Para levar seres humanos à Lua, o foguete Apollo XI precisou de
            computadores. Quem foi a pessoa que programou os computadores do
            foguete?
            </p>
            ${cria_botoes('apollo', opcoes_3, 1)}
            <p>
            O Wi-Fi é um sistema que permite computadores se comunicarem sem
            estarem conectados por fios. Dessa maneira, podemos usar a internet
            em celulares ou notebooks sem esses estarem ligados diretamente ao
            fio de internet. Quem foi que inventou a tecnologia necessária para
            isso?
            </p>
            ${cria_botoes('wifi', opcoes_4, 0)}
            <p>
            Cifras são códigos usados para esconder mensagens. Quem foi que
            decifrou a cifra que os navios italianos usavam na II Guerra
            Mundial?
            </p>
            ${cria_botoes('cifra', opcoes_5, 3)}
        </div>
    `
}
// }}}

// fase 3 {{{
function testa_fase3() {
    if (
        document.querySelector('#pais-ada').value           == teste_de_einstein.paises[0] &&
        document.querySelector('#pais-lamarr').value        == teste_de_einstein.paises[1] &&
        document.querySelector('#pais-grace').value         == teste_de_einstein.paises[2] &&
        document.querySelector('#pais-maggie').value        == teste_de_einstein.paises[3] &&
        document.querySelector('#nascimento-ada').value     == teste_de_einstein.nascimento[0] &&
        document.querySelector('#nascimento-lamarr').value  == teste_de_einstein.nascimento[1] &&
        document.querySelector('#nascimento-grace').value   == teste_de_einstein.nascimento[2] &&
        document.querySelector('#nascimento-maggie').value  == teste_de_einstein.nascimento[3] &&
        document.querySelector('#legado-ada').value         == teste_de_einstein.legado[0] &&
        document.querySelector('#legado-lamarr').value      == teste_de_einstein.legado[1] &&
        document.querySelector('#legado-grace').value       == teste_de_einstein.legado[2] &&
        document.querySelector('#legado-maggie').value      == teste_de_einstein.legado[3] &&
        document.querySelector('#curiosidade-ada').value    == teste_de_einstein.curiosidade[0] &&
        document.querySelector('#curiosidade-lamarr').value == teste_de_einstein.curiosidade[1] &&
        document.querySelector('#curiosidade-grace').value  == teste_de_einstein.curiosidade[2] &&
        document.querySelector('#curiosidade-maggie').value == teste_de_einstein.curiosidade[3]
    ) {
        fase4()
    } else {
        document.querySelector('#button').innerHTML = `
        Errado! Tente novamente!<br>
        <button type="button" onclick="testa_fase3()">Responder!</button>
        `
    }
}

function fase3() {
    let itens       = ''
    let paises      = ''
    let nascimento  = ''
    let legado      = ''
    let curiosidade = ''

    for (i = 0; i < 4; i++) {
        itens += `<li>${teste_de_einstein.paises[i]}</li>`
        paises += `<option value="${teste_de_einstein.paises[i]}">${teste_de_einstein.paises[i]}</option>`
    }
    for (i = 0; i < 4; i++) {
        itens += `<li>${teste_de_einstein.nascimento[i]}</li>`
        nascimento += `<option value="${teste_de_einstein.nascimento[i]}">${teste_de_einstein.nascimento[i]}</option>`
    }
    for (i = 0; i < 4; i++) {
        itens += `<li>${teste_de_einstein.legado[i]}</li>`
        legado += `<option value="${teste_de_einstein.legado[i]}">${teste_de_einstein.legado[i]}</option>`
    }
    for (i = 0; i < 4; i++) {
        itens += `<li>${teste_de_einstein.curiosidade[i]}</li>`
        curiosidade += `<option value="${teste_de_einstein.curiosidade[i]}">${teste_de_einstein.curiosidade[i]}</option>`
    }

    document.querySelector('#header-title').innerHTML = 'Fase 3: Teste de Einstein'
    document.querySelector('#main-view').innerHTML = `
        <div id="text">
            <h2 id="pergunta">O teste consiste em relacionar cada um dos seguintes itens
            à uma localização na tabela: </h2>
            <ul>
            ${itens}
            </ul>
            <p>
            Você pode pesquisar na internet o que precisar! E siga as seguintes dicas:
            <ul>
                <li>Perceba que há duas cientistas nascidas nos Estados Unidos da América.</li>
                <li>Hamilton foi professora de matemática.</li>
                <li>A nascida em 1936 está ao lado da que chamava fios de "nanossegundos".</li>
                <li>A criadora do Wi-Fi era uma atriz, e estudava ciência por hobbie.</li>
                <li>As duas nascidas nos EUA estão lado a lado.</li>
                <li>A atriz está ao lado da inglesa.</li>
                <li>A criadora da primeira linguagem de programação está ao lado da cientista que programou o foguete Apollo XI.</li>
            </ul>
            </p>
            <table>
                <tr>
                    <th></th>
                    <th>Ada Lovelace</th>
                    <th>Hedy Lamarr</th>
                    <th>Grace Hopper</th>
                    <th>Margaret Hamilton</th>
                </tr>
                <tr>
                    <td>País de Origem</td>
                    <td>
                        <select id="pais-ada">
                            <option value="none" selected></option>
                            ${paises}
                        </select>
                    </td>
                    <td>
                        <select id="pais-lamarr">
                            <option value="none" selected></option>
                            ${paises}
                        </select>
                    </td>
                    <td>
                        <select id="pais-grace">
                            <option value="none" selected></option>
                            ${paises}
                        </select>
                    </td>
                    <td>
                        <select id="pais-maggie">
                            <option value="none" selected></option>
                            ${paises}
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>Ano de Nascimento</td>
                    <td>
                        <select id="nascimento-ada">
                            <option value="none" selected></option>
                            ${nascimento}
                        </select>
                    </td>
                    <td>
                        <select id="nascimento-lamarr">
                            <option value="none" selected></option>
                            ${nascimento}
                        </select>
                    </td>
                    <td>
                        <select id="nascimento-grace">
                            <option value="none" selected></option>
                            ${nascimento}
                        </select>
                    </td>
                    <td>
                        <select id="nascimento-maggie">
                            <option value="none" selected></option>
                            ${nascimento}
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>Legado</td>
                    <td>
                        <select id="legado-ada">
                            <option value="none" selected></option>
                            ${legado}
                        </select>
                    </td>
                    <td>
                        <select id="legado-lamarr">
                            <option value="none" selected></option>
                            ${legado}
                        </select>
                    </td>
                    <td>
                        <select id="legado-grace">
                            <option value="none" selected></option>
                            ${legado}
                        </select>
                    </td>
                    <td>
                        <select id="legado-maggie">
                            <option value="none" selected></option>
                            ${legado}
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>Curiosidade</td>
                    <td>
                        <select id="curiosidade-ada">
                            <option value="none" selected></option>
                            ${curiosidade}
                        </select>
                    </td>
                    <td>
                        <select id="curiosidade-lamarr">
                            <option value="none" selected></option>
                            ${curiosidade}
                        </select>
                    </td>
                    <td>
                        <select id="curiosidade-grace">
                            <option value="none" selected></option>
                            ${curiosidade}
                        </select>
                    </td>
                    <td>
                        <select id="curiosidade-maggie">
                            <option value="none" selected></option>
                            ${curiosidade}
                        </select>
                    </td>
                </tr>
            </table>
            <div id="button">
                <button type="button" onclick="testa_fase3()">Responder!</button>
            </div>
        </div>
    `
}
// }}}

// fase 2 {{{
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

function fase2() {
    num_fase2 = Math.floor(Math.random() * 100)
    document.querySelector('#header-title').innerHTML = 'Fase 2: Busca Binária'
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
// }}}

// fase 1 {{{
function testa_fase1() {
    if (document.querySelector('#number-input').value == 52) {
        fase2()
    } else {
        document.querySelector('#pergunta').innerHTML = 'Errou! Tente novamente!'
    }
}

function fase1() {
    let circle   = "<span style='color: red;'> &#x25cf;</span>"
    let square   = "<span style='color: blue;'> &#x25A0;</span>"
    let triangle = "<span style='color: yellow;'> &#x25b2;</span>"
    document.querySelector('#header-title').innerHTML = 'Fase 1: Álgebra'
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
// }}}
