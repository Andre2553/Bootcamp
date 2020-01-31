const usuarios = [
    {
      nome: 'Salvio',
      receitas: [115.3, 48.7, 98.3, 14.5],
      despesas: [85.3, 13.5, 19.9]
    },
    {
      nome: 'Marcio',
      receitas: [24.6, 214.3, 45.3],
      despesas: [185.3, 12.1, 120.0]
    },
    {
      nome: 'Lucia',
      receitas: [9.8, 120.3, 340.2, 45.3],
      despesas: [450.2, 29.9]
    }
  ]
  for(let i = 0; i< usuarios.length;i++){
    calculaSaldo(usuarios[i].receitas,usuarios[i].despesas, usuarios[i].nome)

  }
  function somaNumeros(numeros) {

    let soma=0

        for(let o = 0; o < numeros.length; o++){
        soma=soma+numeros[o]
       

        }
    return soma

    }
    function calculaSaldo(receitas, despesas,nome) {
        let somaReceita=somaNumeros(receitas)
        let somaDespesa=somaNumeros(despesas)
        
        saldo = somaReceita-somaDespesa
         if(saldo>0){
            console.log(`${nome} tem saldo positivo de ${saldo}`)
        }
        else{
            console.log(`${nome} tem saldo negativo ${saldo}`)
        }

    }
    
 