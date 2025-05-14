//Importa módulos app e browserWindow do Electron
const { app, BrowserWindow } = require('electron')

//Função para criar a janela principal

function creatWindow () {
 
    //criar nova instancia do BrowserWindow
    const window = new BrowserWindow({
        width: 800,
        height: 600,
    })

    //carregar o arquivo html na janela
    window.loadFile('src/pages/index.html');
}

//Evento que é acionado quando o Electron está pronto
app.whenReady().then( () => {
    creatWindow(); //Chama a função de criar janela
} )

