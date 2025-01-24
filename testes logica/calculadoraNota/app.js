function CalcularNota(number1, number2, number3){
    let media = (number1 + number2 + number3) / 3;
    if (media >= 7) {
     console.log(`Você foi aprovado com ${media.toFixed(2)} pontos na media!`);
    } else {
    console.log(`Você não foi aprovado:( Sua media foi de ${media.toFixed(2)} `);
    }
     
   }
   
   CalcularNota()