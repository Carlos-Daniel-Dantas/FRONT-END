// ===================================================================================//

document.getElementById('alertBasic').addEventListener('click', function () {
    Swal.fire('Alerta Básico!',
        'Este é um alerta simples.',
        'question'
    )
});

// ===================================================================================//

document.getElementById('alertSucesso').addEventListener('click', function () {
    Swal.fire('Sucesso!',
        'A operação foi concluida con sucesso.',
        'success'
    )
});

// ===================================================================================//

document.getElementById('alertError').addEventListener('click', function () {
    Swal.fire('Erro!',
        'Algo deu errado, tente novamente.',
        'error'
    )
});

// ===================================================================================//

// Alerta de Aviso
document.getElementById('alertAviso').addEventListener('click', function () {
    Swal.fire('Atenção!', 'Verifique os dados informados.', 'warning');
});

// Alerta Informativo
document.getElementById('alertInfo').addEventListener('click', function () {
    Swal.fire('Informação', 'Este é um alerta de informação.', 'info');
});


// Alerta de Confirmação com botões personalizado (Confirmar/Cancelar)
document.getElementById('alertConfirmation').addEventListener('click', function () {
    Swal.fire({
        title: 'Você tem certeza?',
        text: "Esta ação é irreversível!",
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Sim, prosseguir!',
        cancelButtonText: 'Cancelar'


    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire('Confirmado!', 'Você confirmou a ação.', 'success');
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire('Cancelado', 'A ação foi cancelada.', 'error');
        }
    });
});


// Alerta com Prompt de Input
document.getElementById('alertInput').addEventListener('click', function () {
    Swal.fire({
        title: 'Digite seu nome',
        input: 'text',
        inputPlaceholder: 'Seu nome aqui',
        showCancelButton: true,
        confirmButtonText: 'Enviar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed && result.value) {
            Swal.fire(`Olá, ${result.value}!`, 'Seu nome foi recebido.', 'success');
        }
    });
});