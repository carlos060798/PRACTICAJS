
const inputsalario = document.querySelector('#salario');
const inputdias= document.querySelector('#dias');
const btn = document.querySelector('#calcular');
const pcesantis= document.querySelector('#cesantias');
const pintereses = document.querySelector('#interes');
const pprima = document.querySelector('#prima');
const pvacaciones=document.querySelector('#vacaciones');



btn.addEventListener('click', calcularPrecioConDescuento);

function calcularPrecioConDescuento() {
    // variales locales de funcion
      const salario = Number(inputsalario.value);
      const dias= Number(inputdias.value);

    
      // ciclo validador de llenado de spacios

      
      const cesantias= Math.round((salario*dias) / 360);
      pcesantis.innerText = cesantias;
     
     const intereses = Math.round((cesantias*0.12*dias) /360);
     pintereses.innerText = intereses; 


     const prima = Math.round((salario*dias) / 360);
     pprima.innerText= prima;


     const vacaciones= Math.round((salario*dias) / 720);
     pvacaciones.innerText = vacaciones; 
      

}
