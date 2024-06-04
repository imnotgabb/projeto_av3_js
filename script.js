//navegação do menu das páginas do site

function pontos() {

    var tabela = document.getElementById('tabela');

    tabela.innerHTML += "<tr><td><a href='sobre_nos.html'>Sobre nós</a></td></tr><tr><td><a href='prev_resp.html'>Prevenções e Respostas</a></td></tr><tr><td><a href='chat.html'>chat</a></td></tr>";
}

function pontos2() {

    var tabela = document.getElementById('tabela');

    tabela.innerHTML += "<tr><td><a href='index.html'>Página inicial</a></td></tr><tr><td><a href='prev_resp.html'>Prevenções e Respostas</a></td></tr><tr><td><a href='chat.html'>chat</a></td></tr>";
}

function pontos3() {

    var tabela = document.getElementById('tabela');

    tabela.innerHTML += "<tr><td><a href='index.html'>Página inicial</a></td></tr><tr><td><a href='sobre_nos.html'>Sobre nós</a></td></tr><tr><td><a href='chat.html'>chat</a></td></tr>";

    
}

function pontos4() {

    var tabela = document.getElementById('tabela');

    tabela.innerHTML += "<tr><td><a href='index.html'>Página inicial</a></td></tr><tr><td><a href='sobre_nos.html'>Sobre nós</a></td></tr><tr><td><a href='prev_resp.html'>Prevenções e Respostas</a></td></tr>";

    
}

//botão ver "mais" na página inicial

function RotaAlternativa() {

    var tabela2 = document.getElementById('tabela2');


    tabela2.innerHTML += '<tr><td><img id="iframe1_" src="imagens/rota_alternativa_1.jpg" alt="rota_alternativa"></td><td><img id="iframe2_" src="imagens/rota_alternativa_2.jpg" alt="rota_alternativa2"></td><td><img id="iframe3_" src="imagens/rota_alternativa_3.jpg" alt="rota_alternativa3"></td><td><img id="iframe4_" src="imagens/rota_alternativa_4.jpg" alt="rota_alternativa4"></td><td><img id="iframe5_" src="imagens/rota_alternativa_5.jpg" alt="rota_alternativa5"></td><td><img id="iframe6_" src="imagens/rota_alternativa_6.jpg" alt="rota_alternativa6"></td><td><p id="p1" class="pe">Você pode seguir pela Avenida Agamenon Magalhães Como rota alternativa!</p></td><td><p id="p2" class="pe">Você pode seguir pela Rua São miguel como rota alternativa! <br> Trajeto com o mesmo tempo!</p></td><td><p id="p3" class="pe">Você pode seguir pela via PE-009 como rota alternativa! <br> Trajeto 3min mais lento!</p></td><td><p id="p4" class="pe">Você pode pegar ir pela Agamenon Magalhães na metade do trajeto e depois voltar para a rua Real da torre! <br> Você também pode seguir pela Rua Imperial e fazer o retorno! <br> Sendo o trajeto 1min mais lento! </p></td><td><p id="p5" class="pe">Você pode ir via Rua Cosme viana como rota alternativa! <br> Com o mesmo tempo de trajeto! <br> Você também pode usar o desvio da Agamenon Magalhães para a Cosme Viana no meio do caminho! </p></td><td><p id="p6" class="pe">Você pode usar a via PE-009 como rota alternativa para chegar ao destino! <br> Trajeto 3min mais lento!</p></td></tr>'
}




//botões de navegação do banner

function BotaoDireita1() {

    tabela_banner.innerHTML += '<tr><td><img id="banner_exemplo2" src="imagens/carrossel_2(atualizado).jpg" alt="banner_exemplo2"></td><td><img id="momento2" src="imagens/0_1_0.png" alt="momento2"></td><td><a onclick="BotaoEsquerda11()"><img  id="botao_esquerda1" src="imagens/esquerda_seta.png"</td><td><a onclick="BotaoDireita2()"><img  id="botao_direita2" src="imagens/direita_seta.png"</td></tr>'

}

function BotaoDireita2() {

    tabela_banner.innerHTML += '<tr><td><img id="banner_exemplo3" src="imagens/carrossel_3(atualizado).jpg" alt="banner_exemplo3"></td><td><img id="momento3" src="imagens/0_0_1.png" alt="momento3"></td><td><a onclick="BotaoEsquerda2()"><img  id="botao_esquerda2" src="imagens/esquerda_seta.png"</td><td><a onclick="BotaoDireita3()"><img  id="botao_direita3" src="imagens/direita_seta.png"</td></tr>'

}


function BotaoEsquerda1() {

    tabela_banner.innerHTML += '<tr><td><img id="banner_exemplo1" src="imagens/carrossel_1(atualizado).jpg" alt="banner_exemplo1"></td><td><img id="momento1" src="imagens/1_0_0.png" alt="momento1"></td><td><a onclick="BotaoDireita1()"><img  id="botao_direita1" src="imagens/direita_seta.png"</td></tr>'
} 

function BotaoEsquerda2() {

    tabela_banner.innerHTML += '<tr><td><img id="banner_exemplo2" src="imagens/carrossel_2(atualizado).jpg" alt="banner_exemplo2"></td><td><img id="momento2" src="imagens/0_1_0.png" alt="momento2"></td><td><a onclick="BotaoEsquerda1()"><img  id="botao_esquerda1" src="imagens/esquerda_seta.png"</td><td><a onclick="BotaoDireita3()"><img  id="botao_direita3" src="imagens/direita_seta.png"</td></tr>'
} 

function BotaoEsquerda3() {

    tabela_banner.innerHTML += '<tr><td><img id="banner_exemplo3" src="imagens/carrossel_3(atualizado).jpg" alt="banner_exemplo3"></td><td><img id="momento3" src="imagens/0_0_1.png" alt="momento3"></td><td><a onclick="BotaoEsquerda2()"><img  id="botao_esquerda2" src="imagens/esquerda_seta.png"</td><td><a onclick="BotaoDireita3()"><img  id="botao_direita3" src="imagens/direita_seta.png"</td></tr>'

   
} 

//botão do chat

function Chat() {

    tabela3.innerHTML += '<tr><td><textarea id="textarea" name="text_area" id="text_area">Digite aqui...</textarea></td><td><input id="botao_enviar" type="submit" value="Enviar"></td></tr>'
}