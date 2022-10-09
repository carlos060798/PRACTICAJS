// variables generales
const form=document.querySelector('#formo')
const salario=document.querySelector('#salario')
const  horas=document.querySelector('#dias')
const  tipodehora=document.querySelector('#hora')
const  btn = document.querySelector('#calcular'); 
const  mensaje= document.querySelector('.mensaje')
const  pResult=document.querySelector('#resultado')


//eventos igual
 
btn.addEventListener('click', totalrecargos) ;



// array de cupones
const listarecargo= [];
listarecargo.push({
  name:'recargo Nocturno',
   valor: 30,
});
listarecargo.push({
    name:' Diurna',
     valor: 25,
  });
 listarecargo.push({
      name:'Extra Nocturno',
      valor: 75,
  });
  listarecargo.push({
    name:'festivo',
     valor: 75,
  });
  listarecargo.push({
    name:'Diurna Festiva',
     valor: 100,
  });
  listarecargo.push({
    name:'Nocturna Festiva',
    valor:150,
  });
  listarecargo.push({
    name:'Recargo Nocturno Festivo',
    valor:110,
  });

 

  function totalrecargos(event){
    event.preventDefault();
    const salariopagado = Number( salario.value) ;
    const diastrabajados = Number(horas.value);
    const aumento= tipodehora.value
  
    if (!salariopagado || !diastrabajados||!aumento) {
        pResult.innerText = 'por favor llena el formulario';
        return;
      }
      let recargoshoras;
      // funcion para validar si exiten eleemtos del array 
        function valorhorarecargo(horaElement) {// {name, discount}
          return horaElement.name == aumento;
        }
        
          const asignacionRecargo= listarecargo.find(valorhorarecargo); // {}
      // asiganacion d evalores ala avariable descuento dependiendo del cupon
        if (asignacionRecargo) {
          recargoshoras = asignacionRecargo.valor;
        } else {
          pResult.innerText = 'El cupón no es válido';
          return;
        }
 
  const horasalario=  salariopagado / 240;
  const  aumentodehora= (horasalario * recargoshoras)/100
  const  horafinal= horasalario + aumentodehora
  const totalfinal=  horafinal* diastrabajados;
  const pagofinal= Math.round(totalfinal)

  pResult.innerText = "$" + pagofinal;

  
}







 