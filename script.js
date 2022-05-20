console.log('Meu primeiro JavaScript');

function validacpf(cpf) {
    if (cpf.length != 11){
        return false;
    }else{
        var numeros = cpf.substring(0 , 9);
        var digito = cpf.substring(9);

        var soma = 0;
        for(var i = 10; i > 1; i--){
            soma += numeros.charAt(10 - i) * i;
        }
      
        var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
        //Validação primeiro digito
        if (resultado != digito.charAt(0)){
            return false;
        }
        
        console.log(
            digito.toString().charAt(0)
        );

        soma = 0;
        numeros = cpf.substring(0 ,10);
        for(var k = 0; k > 1; k--){
            soma += numeros.charAt(11 - k) * k;
        }
       
        resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
        


        return true;
    }
    
}

function validacao() {
    console.log('Begging Validar kkk');
    var cpf = document.getElementById('cpf_digitado').value;
    console.log(cpf);
    
    document.getElementById('success').style.display = 'none';
    document.getElementById('error').style.display = 'none';

    var resultadoValidacao = validacpf(cpf);
     if (resultadoValidacao){
         document.getElementById('success').style.display = 'block';
     }else{
         document.getElementById('error').style.display = 'block';
     }

}