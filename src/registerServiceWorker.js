import { register } from "register-service-worker";

if (process.env.NODE_ENV === 'production') {
    register(`${process.env.BASE_URL}service-worker.js`, {
        ready() {
            console.log('O aplicativo está sendo servido do cache por um service worker.\n' +
                'Para mais detalhes, visit https://goo.gl/AFskqB');
        },
        registered() {
            console.log('Service worker foi registrado.');
        },
        cached() {
            console.log('O conteúdo foi armazenado em cache para uso offline.');
        },
        updatefound() {
            console.log('Novo content está sendo baixado.');
        },
        updated() {
            console.log('Novo content está disponível; por favor atualize.');
        },
        offline() {
            console.log('Nenhuma conexão de internet encontrada. O aplicativo está sendo executado no modo offline.');
        },
        error(erro) {
            console.log('Erro durante o registro do service worker:', erro);
        }
    })
}