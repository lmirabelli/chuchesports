class producto{
    constructor(titulo,detalle,talle,descripcion,jugador,imagen,precio,posicion){
        this.titulo = titulo,
        this.detalle = detalle,
        this.talle = talle,
        this.descripcion = descripcion,
        this.jugador = jugador,
        this.imagen = imagen,
        this.precio = precio,
        this.posicion = posicion
    }
}

let camisetas = []

let precio1 = 3500
let precio2 = 3800
let precio3 = 2500


//TALLE S
camisetas.push(new producto('camiseta futbol','seleccion argentina','S','celeste y blanca','lionel messi','https://i.ibb.co/JFr2hH7/web-messi.png',precio1,Math.random()))
camisetas.push(new producto('camiseta basket','boston celtics','S','tercer uniforme','irvine','https://i.ibb.co/Rz35ZFK/web-celtics.png',precio2,Math.random()))
camisetas.push(new producto('camiseta futbol','seleccion argentina','S','violeta','angel di maria','https://i.ibb.co/716dcJM/web-dimariavioleta.png',precio1,Math.random()))
camisetas.push(new producto('camiseta futbol','seleccion argentina','S','violeta','lionel messi','https://i.ibb.co/3csnFw5/web-messi-violeta.png',precio1,Math.random()))
camisetas.push(new producto('camiseta futbol','seleccion argentina','S','celeste y blanca','angel di maria','https://i.ibb.co/JKd2mXn/web-dimariacelesteyblanca.png',precio1,Math.random()))
camisetas.push(new producto('camiseta futbol','seleccion argentina','S','celeste y blanca','lautaro martinez','https://i.ibb.co/YRV7Kh9/lautaro-martinez.png',precio1,Math.random()))
camisetas.push(new producto('remera deportiva','adidas','S','negra','...','https://i.ibb.co/Np1Nm3T/adidas-negra.png',precio3,Math.random()))
camisetas.push(new producto('camiseta basket','chicago bulls','S','uniforme alternativo','jordan','https://i.ibb.co/88cS26R/bulls-negra.png',precio2,Math.random()))
camisetas.push(new producto('camiseta futbol','manchester city','S','uniforme celeste','julian alvarez','https://i.ibb.co/tC1qVLk/web-manchester-City.png',precio1,Math.random()))

//TALLE M
camisetas.push(new producto('camiseta futbol','seleccion argentina','M','celeste y blanca','lionel messi','https://i.ibb.co/JFr2hH7/web-messi.png',precio1,Math.random()))
camisetas.push(new producto('camiseta futbol','seleccion argentina','M','violeta','rodrigo de paul','https://i.ibb.co/Dk9Lby2/web-de-Paul-V-eco.png',precio3,Math.random()))
camisetas.push(new producto('camiseta futbol','seleccion argentina','M','celeste y blanca','lionel messi','https://i.ibb.co/JFr2hH7/web-messi.png',precio3,Math.random()))
camisetas.push(new producto('camiseta futbol','seleccion argentina','M','celeste y blanca','rodrigo de paul','https://i.ibb.co/CV2jGct/web-de-Paul.png',precio1,Math.random()))
camisetas.push(new producto('remera deportiva','adidas','M','Bordo','...','https://i.ibb.co/p3t6wPH/adidas-bordo.png',precio3,Math.random()))
camisetas.push(new producto('camiseta futbol','seleccion argentina','M','celeste y blanca','angel di maria','https://i.ibb.co/JKd2mXn/web-dimariacelesteyblanca.png',precio1,Math.random()))
camisetas.push(new producto('camiseta futbol','manchester city','M','uniforme celeste','julian alvarez','https://i.ibb.co/tC1qVLk/web-manchester-City.png',precio1,Math.random()))
camisetas.push(new producto('camiseta futbol','barcelona','M','uniforme blugrana','robert lewandowski','https://i.ibb.co/hCnDTqb/web-barcelona-lewandowski.png',precio1,Math.random()))

//TALLE L
camisetas.push(new producto('camiseta basket','LA Lakers','L','uniforme alternativo','james','https://i.ibb.co/72Z2YYK/web-lakers-Blanca.png',precio2,Math.random()))
camisetas.push(new producto('camiseta basket','chicago bulls','L','primer uniforme','jordan','https://i.ibb.co/4Knz1Fs/web-bulls.png',precio2,Math.random()))
camisetas.push(new producto('camiseta basket','golden state','L','uniforme alternativo','curry','https://i.ibb.co/s2B9Nh4/web-golden-State.png',precio2,Math.random()))
camisetas.push(new producto('remera deportiva','adidas','L','azul','...','https://i.ibb.co/ZJD0D1p/adidas-azul.png',precio3,Math.random()))

//TALLE XL
camisetas.push(new producto('camiseta futbol','seleccion argentina','XL','celeste y blanca','lionel messi','https://i.ibb.co/JFr2hH7/web-messi.png',precio3,Math.random()))
camisetas.push(new producto('camiseta futbol','seleccion argentina','XL','celeste y blanca','lionel messi','https://i.ibb.co/JFr2hH7/web-messi.png',precio3,Math.random()))
camisetas.push(new producto('camiseta futbol','seleccion argentina','XL','celeste y blanca','lionel messi','https://i.ibb.co/JFr2hH7/web-messi.png',precio3,Math.random()))
camisetas.push(new producto('camiseta basket','cleveland cavaliers','XL','uniforme alternativo','james','https://i.ibb.co/mNV3xjK/web-cleveland.png',precio2,Math.random()))
camisetas.push(new producto('camiseta futbol','seleccion argentina','XL','violeta','rodrigo de paul','https://i.ibb.co/Dk9Lby2/web-de-Paul-V-eco.png',precio3,Math.random()))
camisetas.push(new producto('camiseta futbol','seleccion argentina','XL','violeta','julian alvarez','https://i.ibb.co/9qwGkCc/web-alvarezvioleta.png',precio1,Math.random()))
camisetas.push(new producto('camiseta basket','san antonio spurs','XL','uniforme alternativo','ginobili','https://i.ibb.co/f1RyFrC/web-spurs.png',precio2,Math.random()))
camisetas.push(new producto('remera deportiva','adidas','XL','azul francia','...','https://i.ibb.co/VJG4c6z/adidas-azul-Francia.png',precio3,Math.random()))
camisetas.push(new producto('camiseta futbol','seleccion argentina','XL','celeste y blanca','julian alvarez','https://i.ibb.co/6bRztxw/web-alvarez.png',precio1,Math.random()))
camisetas.push(new producto('camiseta futbol','manchester city','XL','uniforme celeste','julian alvarez','https://i.ibb.co/tC1qVLk/web-manchester-City.png',precio1,Math.random()))


//TALLE XXL
camisetas.push(new producto('camiseta futbol','seleccion argentina','XXL','celeste y blanca','angel di maria','https://i.ibb.co/JKd2mXn/web-dimariacelesteyblanca.png',precio1,Math.random()))
camisetas.push(new producto('camiseta futbol','seleccion argentina','XXL','celeste y blanca','lionel messi','https://i.ibb.co/JFr2hH7/web-messi.png',precio3,Math.random()))
camisetas.push(new producto('camiseta futbol','seleccion argentina','XXL','celeste y blanca','lionel messi','https://i.ibb.co/JFr2hH7/web-messi.png',precio3,Math.random()))
camisetas.push(new producto('camiseta futbol','seleccion argentina','XXL','celeste y blanca','lionel messi','https://i.ibb.co/JFr2hH7/web-messi.png',precio3,Math.random()))
camisetas.push(new producto('camiseta futbol','seleccion argentina','XXL','violeta','lionel messi','https://i.ibb.co/ysrQBwb/web-messi-v-eco.png',precio3,Math.random()))
camisetas.push(new producto('remera deportiva','adidas','XXL','blanca','...','https://i.ibb.co/Jn3VQdB/adidas-blanca.png',precio3,Math.random()))
camisetas.push(new producto('camiseta futbol','manchester city','XXL','uniforme celeste','julian alvarez','https://i.ibb.co/tC1qVLk/web-manchester-City.png',precio1,Math.random()))
