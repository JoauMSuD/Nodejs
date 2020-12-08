/*0 - Obter um susário
1 - Obter o numero de telefone de um usuario a partir do seu ID
2 - Obter o endereço do usuario pelo ID
*/

function obterUsuario(callback){
    setTimeout(function (){
        return callback(null, {
            id: 1,
            nome: 'Aladin',
            dataNacimento: new Date()
        })
    }, 1000)
}

//por padrão o callback deve sempre vir por ultimo, para nao atrapalhar o sistema
function obterTelefone(idUsuario, callback){
    setTimeout(()=> {
        return callback(null, {
            telefone: '986582255',
            ddd:11
        })
    },2000);
}

function obterEndereco (idUsuario, callback){
    setTimeout(()=>{
        return callback(null, {
            rua: 'dos Bobos',
            numero: 0
        })
    }, 2000);
}

function resolverUsuario (erro, usuario){
console.log('usuario', usuario)
}


 obterUsuario(function resolverUsuario(error, usuario){
    //no JS null || " " | 0 === FALSE 
    if (error){
         console.log('Deu RUIM em Usuário', error)
         return;
     }
     obterTelefone(usuario.id, function resolverTelefone(error1, telefone){
        if (error1){
            console.log('Deu RUIM no Telefone', error)
            return;
        }
        obterEndereco(usuario.id, function resolverEndereco(error2, endereco){
            if (error2){
                console.log('Deu RUIM no Endereço', error)
                return;
            }
            console.log(`
            Nome: ${usuario.nome},
            Endereco: ${endereco.rua},${endereco.numero},
            Telefone: (${telefone.ddd})${telefone.telefone}
            `)
        })
     })
 })
//const telefone = obterTelefone(usuario.id)

//console.log('usuario', usuario)
//console.log('telefone', telefone)