(function(){
    let radio_buttons = document.getElementsByClassName('radio-button');
    let numero_solicitacao = document.getElementById('numero_solicitacao');
    let nome_da_funcao = document.getElementById('nome_da_funcao');
    let solicitacao = document.getElementById('solicitacao');
    let dados_usuario = document.getElementById('dados_usuario');

    let script_abertura_chamado = document.getElementById('script_abertura_chamado');
    let script_solicitacao_aprovacao = document.getElementById('script_solicitacao_aprovacao');
    let script_solicitacao_em_pendencia = document.getElementById('script_solicitacao_em_pendencia');

    let btn = document.getElementsByClassName('btn-clipboard');
    let gerar = document.getElementById('btn-gerar');
    let limpar = document.getElementById('btn-limpar');

    limpar.onclick = function() {
        //console.log('limpar');
        numero_solicitacao.value = '';
        nome_da_funcao.value = '';
        solicitacao.value = '';
        dados_usuario.value = '';
        script_abertura_chamado.innerHTML = '';
        script_solicitacao_aprovacao.innerHTML = '';
        script_solicitacao_em_pendencia.innerHTML = '';
    }

    for (let index = 0; index < radio_buttons.length; index++) {
        const element = radio_buttons[index];
        element.addEventListener('click', function(){
            //console.log(this.value);
            return tipo_de_manutencao = this.value;
        });
    }

    gerar.onclick = function() {
        //console.log('gerar');
        let array_de_dados = [numero_solicitacao.value, nome_da_funcao.value, solicitacao.value, dados_usuario.value];
        //console.log(array_de_dados);
        if (array_de_dados[0] === '' || array_de_dados[3] === '') {
            alert('Preencha todos os campos!');
        } else {
            if(tipo_de_manutencao === 'funcao') {
                //console.log('manutencao de funcao');
                gerarScriptFuncao();
            } else {
                gerarScriptPerfil();
            }
        }
    }

    function gerarScriptFuncao() {
        //console.log(valor);
        let array_dados_usuario = dados_usuario.value.split('\t');
        //console.log(dados_usuario.value);
        //console.log(array_dados_usuario);
        script_abertura_chamado.innerHTML = 'Demanda GRC número '+numero_solicitacao.value+'<br>\
        Função<br>\
        Nome/Matrícula: '+array_dados_usuario[5]+'<br>\
        Sala/Bloco: '+array_dados_usuario[4]+'<br>\
        Setor: '+array_dados_usuario[3]+'<br>\
        Ramal: '+array_dados_usuario[1]+'<br>\
        Patrimônio: não se aplica<br>\
        ID Senha: não se aplica<br>\
        Solicitação: '+solicitacao.value+'';

        script_solicitacao_em_pendencia.innerHTML = 'Em atendimento a solicitação '+numero_solicitacao.value+' de '+array_dados_usuario[0]+' para a função '+nome_da_funcao.value+' nenhum risco não mitigado, segue para aprovação.';

        script_solicitacao_aprovacao.innerHTML = 'Aguardando aprovação do gestor da função '+nome_da_funcao.value+'';
    }

    function gerarScriptPerfil() {
        //console.log(valor);
        let array_dados_usuario = dados_usuario.value.split('\t');
        //console.log(dados_usuario.value);
        //console.log(array_dados_usuario);
        script_abertura_chamado.innerHTML = 'Demanda GRC número '+numero_solicitacao.value+'<br>\
        Perfil<br>\
        Nome/Matrícula: '+array_dados_usuario[5]+'<br>\
        Sala/Bloco: '+array_dados_usuario[4]+'<br>\
        Setor: '+array_dados_usuario[3]+'<br>\
        Ramal: '+array_dados_usuario[1]+'<br>\
        Patrimônio: não se aplica<br>\
        ID Senha: não se aplica<br>\
        Solicitação: '+solicitacao.value+'';

        script_solicitacao_em_pendencia.innerHTML = 'Em atendimento a solicitação '+numero_solicitacao.value+' de '+array_dados_usuario[0]+' para o perfil '+nome_da_funcao.value+' nenhum risco não mitigado, segue para aprovação.';

        script_solicitacao_aprovacao.innerHTML = 'Aguardando aprovação dos Team Leaders do perfil '+nome_da_funcao.value+'';
    }

    let clipboard = new ClipboardJS(btn);
    //var clipboard = new ClipboardJS('.btn');
    clipboard.on('success', function(e) {
        console.log(e);
    });
    clipboard.on('error', function(e) {
        console.log(e);
    });
})();