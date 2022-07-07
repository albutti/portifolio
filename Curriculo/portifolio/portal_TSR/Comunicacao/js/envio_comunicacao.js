
/** geracao o popup de Crise**/
function abrir_inicial_crise(){
    document.getElementById('popup_inicial_crise').style.display = 'block';
}
function fechar_inicial_crise(){
    document.getElementById('popup_inicial_crise').style.display =  'none';
}

function abrir_atualizacao_crise(){
    document.getElementById('popup_atualizacao_crise').style.display = 'block';
}
function fechar_atualizacao_crise(){
    document.getElementById('popup_atualizacao_crise').style.display =  'none';
}

function abrir_validacao_crise(){
    document.getElementById('popup_validacao_crise').style.display = 'block';
}
function fechar_validacao_crise(){
    document.getElementById('popup_validacao_crise').style.display =  'none';
}

function abrir_encerramento_crise(){
    document.getElementById('popup_encerramento_crise').style.display = 'block';
}
function fechar_encerramento_crise(){
    document.getElementById('popup_encerramento_crise').style.display =  'none';
}

function abrir_unica_crise(){
    document.getElementById('popup_unica_crise').style.display = 'block';
}
function fechar_unica_crise(){
    document.getElementById('popup_unica_crise').style.display =  'none';
}


/** geracao o popup de Degradaçao**/

function abrir_inicial_degradacao(){
    document.getElementById('popup_inicial_degradacao').style.display = 'block';
}
function fechar_inicial_degradacao(){
    document.getElementById('popup_inicial_degradacao').style.display =  'none';
}

function abrir_atualizacao_degradacao(){
    document.getElementById('popup_atualizacao_degradacao').style.display = 'block';
}
function fechar_atualizacao_degradacao(){
    document.getElementById('popup_atualizacao_degradacao').style.display =  'none';
}

function abrir_validacao_degradacao(){
    document.getElementById('popup_validacao_degradacao').style.display = 'block';
}
function fechar_validacao_degradacao(){
    document.getElementById('popup_validacao_degradacao').style.display =  'none';
}

function abrir_encerramento_degradacao(){
    document.getElementById('popup_encerramento_degradacao').style.display = 'block';
}
function fechar_encerramento_degradacao(){
    document.getElementById('popup_encerramento_degradacao').style.display =  'none';
}

function abrir_unica_degradacao(){
    document.getElementById('popup_unica_degradacao').style.display = 'block';
}
function fechar_unica_degradacao(){
    document.getElementById('popup_unica_degradacao').style.display =  'none';
}

/** geracao o popup de informativos**/

var informativo = document.getElementsByName('informativo')

function abrir_informativo(){
    if (informativo[0].checked) {
    document.getElementById('popup_informativo_alarme').style.display = 'block';
    } else if (informativo[1].checked){
        document.getElementById('popup_informativo_pre_crise').style.display = 'block';
    } else if (informativo[2].checked) {
        document.getElementById('popup_informativo_pre_degradacao').style.display = 'block';
    }
}

function fechar_informativo_alarme(){
    document.getElementById('popup_informativo_alarme').style.display =  'none';
}

function fechar_informativo_pre_crise(){
    document.getElementById('popup_informativo_pre_crise').style.display =  'none';
}

function fechar_informativo_pre_degradacao(){
    document.getElementById('popup_informativo_pre_degradacao').style.display =  'none';
}

/** geracao da copia de crise**/

var texto_inicial_crise = document.getElementById('texto_inicial_crise');
var texto_atualizacao_crise = document.getElementById('texto_atualizacao_crise');
var texto_validacao_crise = document.getElementById('texto_validacao_crise');
var texto_encerramento_crise = document.getElementById('texto_encerramento_crise');
var texto_unica_crise = document.getElementById('texto_unica_crise');

function gerar_copia_incial_crise() {
    texto_inicial_crise.innerHTML = "Iniciando Crise: INCXXXXXXXXXXX <br>Cliente: XXXXX <br>Ambiente: XXXXX <br>Teams: XXXX# <br>Telefone: XXXX        Senha: XXXXX# <br><br>Sintoma: XXXXX <br>Impacto: XXXXXXXX <br><br>Inicio do Impacto: XXXXXX <br>Inicio da crise: XXXXXX <br>Delay Impacto X Tratativa: XXXXXX<br> Identificado por: XXXXXX <br><br>Resolution Manager: XXXXX/XXXXXX<br>Equipe atuando: XXXXXXX <br>Responsável TSR: XXXXXXX";
}

function gerar_copia_atualizacao_crise() {
    texto_atualizacao_crise.innerHTML = "Atualização Crise: INCXXXXXXXXXXXX <br>Cliente: XXXXX <br>Ambiente: XXXXXXXXX <br>Status: XXXXXXXXXXXXXX <br><br>Ações Realizadas/Em Andamento <br>❌XXXXXXXXXX <br>✅XXXXXXXXX <br>⚠XXXXXXXXX <br><br>Ações Planejadas/Previstas <br>📍 XXXXXXXXXX <br><br>Resolution Manager: XXXX/XXX <br> Responsável TSR: XXXXXXX";
}

function gerar_copia_validacao_crise() {
    texto_validacao_crise.innerHTML = "Validação da Crise: 2022.XX-XX <br>Cliente: XXX <br>Ambiente: XXXX <br></br>Status: XXX <br></br>Solução Aplicada: XXXX <br>Responsável TSR: XXXX";
}

function gerar_copia_encerramento_crise() {
    texto_encerramento_crise.innerHTML = "Encerramento Crise: INCXXXXXXXX<br>Cliente: XXXX <br>Ambiente: XXXXX <br><br>Status: XXXXXXXX <br><br>Periodo da crise: XX/XX/XXXX XXhXXm às XX/XX/XXXX XXhXXm (xxdxxhxxm) <br>Período do impacto: XX/XX/XXXX XXhXXm às XX/XX/XXXX XXhXXm (xxdxxhxxm) <br>periodo em validação: XX/XX/XXXX XXhXXm às XX/XX/XXXX XXhXXm (xxdxxhxxm) <br><br>Resolution Manager: XXXXXX <br>Responsável TSR: XXXXXXX";
}

function gerar_copia_unica_crise() {
    texto_unica_crise.innerHTML = "Crise Única: INC2022XXXXXXX <br> Cliente: XXXXXX <br>Ambiente: XXXXXX <br><br>Sintoma: XXXXXX </br>Impacto: Houve indisponibilidade momentânea no ambiente. Normalizado e validado após XXXXXX <br><br>Identificado por: XXXXX <br>Horário de notificação para o TSR: XX/XX/XXXX XXhXXm <br>Período de Impacto: XX/XX/XXXX XXhXXm  até XX/XX/XXXX XXhXXm (XXm) <br></br>Responsável TSR: XXXXXX";
}

/** envio crise**/

function enviar() {
    document.getElementById('popup_informativo_pre_degradacao').style.display =  'none';
    document.getElementById('popup_informativo_pre_crise').style.display =  'none';
    document.getElementById('popup_informativo_alarme').style.display =  'none';

    document.getElementById('popup_encerramento_degradacao').style.display =  'none';
    document.getElementById('popup_validacao_degradacao').style.display =  'none';
    document.getElementById('popup_atualizacao_degradacao').style.display =  'none';
    document.getElementById('popup_inicial_degradacao').style.display =  'none';
    
    document.getElementById('popup_encerramento_crise').style.display =  'none';
    document.getElementById('popup_validacao_crise').style.display =  'none';
    document.getElementById('popup_atualizacao_crise').style.display =  'none';
    document.getElementById('popup_inicial_crise').style.display =  'none';

    document.getElementById('popup_atualizacao_alarme').style.display =  'none';
    
}
/** envio Degradação**/

/** geracao da copia de degradação**/

var texto_inicial_degradacao = document.getElementById('texto_inicial_degradacao');
var texto_atualizacao_degradacao = document.getElementById('texto_atualizacao_degradacao');
var texto_validacao_degradacao = document.getElementById('texto_validacao_degradacao');
var texto_encerramento_degradacao = document.getElementById('texto_encerramento_degradacao');
var texto_unica_degradacao = document.getElementById('texto_unica_degradacao');

function gerar_copia_incial_degradacao() {
    texto_inicial_degradacao.innerHTML = "Iniciando Degradação: INC2022XXXXXXX <br>Cliente: XXXXX <br>Ambiente: XXXXX <br>Teams: XXXX# <br>Telefone: XXXX        Senha: XXXXX# <br><br>Sintoma: XXXXX <br>Impacto: XXXXXXXX <br><br>Inicio do Impacto: XXXXXX <br>Inicio da Degradação: XXXXXX <br>Delay Impacto X Tratativa: XXXXXX<br> Identificado por: XXXXXX <br><br>Resolution Manager: XXXXX/XXXXXX<br>Equipe atuando: XXXXXXX <br>Responsável TSR: XXXXXXX";
}

function gerar_copia_atualizacao_degradacao() {
    texto_atualizacao_degradacao.innerHTML = "Atualização Degradação: INC2022XXXXXXXX <br>Cliente: XXXXX <br>Ambiente: XXXXXXXXX <br>Status: XXXXXXXXXXXXXX <br><br>Ações Realizadas/Em Andamento <br>❌XXXXXXXXXX <br>✅XXXXXXXXX <br>⚠XXXXXXXXX <br><br>Ações Planejadas/Previstas <br>📍 XXXXXXXXXX <br><br>Resolution Manager: XXXX/XXX <br> Responsável TSR: XXXXXXX";
}

function gerar_copia_validacao_degradacao() {
    texto_validacao_degradacao.innerHTML = "Validação da Degradação: INC2022XXXXXXX <br>Cliente: XXX <br>Ambiente: XXXX <br></br>Status: XXX <br></br>Solução Aplicada: XXXX <br>Responsável TSR: XXXX";
}

function gerar_copia_encerramento_degradacao() {
    texto_encerramento_degradacao.innerHTML = "Encerramento Degradação: INC2022XXXX<br>Cliente: XXXX <br>Ambiente: XXXXX <br><br>Status: XXXXXXXX <br><br>Periodo da Degradação: XX/XX/XXXX XXhXXm às XX/XX/XXXX XXhXXm (xxdxxhxxm) <br>Periodo do impacto: XX/XX/XXXX XXhXXm às XX/XX/XXXX XXhXXm (xxdxxhxxm) <br>periodo em validação: XX/XX/XXXX XXhXXm às XX/XX/XXXX XXhXXm (xxdxxhxxm) <br><br>Resolution Manager: XXXXXX <br>Responsável TSR: XXXXXXX";
}

function gerar_copia_unica_degradacao() {
    texto_unica_degradacao.innerHTML = "Degradação Única: INC2022XXXXXXX <br> Cliente: XXXXXX <br>Ambiente: XXXXXX <br><br>Sintoma: XXXXXX </br>Impacto: Houve degradação momentânea no ambiente. Normalizado e validado após XXXXXX <br><br>Identificado por: XXXXX <br>Horário de notificação para o TSR: XX/XX/XXXX XXhXXm <br>Período de Impacto: XX/XX/XXXX XXhXXm  até XX/XX/XXXX XXhXXm (XXm) <br></br>Responsável TSR: XXXXXX";
}

/** Atualização de alarme **/

function abrir_atualizacao_alarme(){
    document.getElementById('popup_atualizacao_alarme').style.display = 'block';
}
function fechar_atualizacao_alarme(){
    document.getElementById('popup_atualizacao_alarme').style.display =  'none';
}


var texto_sem_impacto = document.getElementById('alarme_sem_impacto');
var texto_mudanca = document.getElementById('alarme_mudanca');

function exemplo_sem_impacto(){ 
    texto_mudanca.style.display = 'none';
    texto_sem_impacto.style.display = 'grid';
}

function exemplo_mudanca() {
    texto_mudanca.style.display = 'grid';
    texto_sem_impacto.style.display = 'none';
}
