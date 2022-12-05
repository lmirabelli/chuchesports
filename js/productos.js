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

let shirts = 3500
let premiumShirts = 3800
let ecoShirts = 2500


//TALLE S
camisetas.push(new producto('camiseta basket','boston celtics','S','tercer uniforme','irvine','https://i.ibb.co/Rz35ZFK/web-celtics.png',premiumShirts,Math.random()))
camisetas.push(new producto('camiseta futbol','seleccion argentina','S','violeta','angel di maria','https://i.ibb.co/716dcJM/web-dimariavioleta.png',shirts,Math.random()))
camisetas.push(new producto('camiseta futbol','seleccion argentina','S','celeste y blanca','angel di maria','https://i.ibb.co/JKd2mXn/web-dimariacelesteyblanca.png',shirts,Math.random()))
camisetas.push(new producto('camiseta futbol','seleccion argentina','S','celeste y blanca','lautaro martinez','https://i.ibb.co/YRV7Kh9/lautaro-martinez.png',shirts,Math.random()))
camisetas.push(new producto('remera deportiva','adidas','S','negra','...','https://i.ibb.co/Np1Nm3T/adidas-negra.png',ecoShirts,Math.random()))
camisetas.push(new producto('camiseta basket','chicago bulls','S','uniforme alternativo','jordan','https://i.ibb.co/88cS26R/bulls-negra.png',premiumShirts,Math.random()))
camisetas.push(new producto('camiseta futbol','manchester city','S','uniforme celeste','julian alvarez','https://i.ibb.co/tC1qVLk/web-manchester-City.png',shirts,Math.random()))

//TALLE M
camisetas.push(new producto('camiseta futbol','seleccion argentina','M','violeta','rodrigo de paul','https://i.ibb.co/Dk9Lby2/web-de-Paul-V-eco.png',ecoShirts,Math.random()))
camisetas.push(new producto('camiseta futbol','seleccion argentina','M','celeste y blanca','lionel messi','https://i.ibb.co/JFr2hH7/web-messi.png',ecoShirts,Math.random()))
camisetas.push(new producto('remera deportiva','adidas','M','Bordo','...','https://i.ibb.co/p3t6wPH/adidas-bordo.png',ecoShirts,Math.random()))
camisetas.push(new producto('camiseta futbol','manchester city','M','uniforme celeste','julian alvarez','https://i.ibb.co/tC1qVLk/web-manchester-City.png',shirts,Math.random()))
camisetas.push(new producto('camiseta futbol','barcelona','M','uniforme blugrana','robert lewandowski','https://i.ibb.co/hCnDTqb/web-barcelona-lewandowski.png',shirts,Math.random()))
camisetas.push(new producto('camiseta futbol','seleccion argentina','M','celeste y blanca','-','https://i.ibb.co/n8F2Tgp/nophoto.png',shirts,Math.random()))
camisetas.push(new producto('camiseta futbol','seleccion argentina','M','celeste y blanca','-','https://i.ibb.co/n8F2Tgp/nophoto.png',shirts,Math.random()))

//TALLE L
camisetas.push(new producto('camiseta basket','LA Lakers','L','uniforme alternativo','james','https://i.ibb.co/72Z2YYK/web-lakers-Blanca.png',premiumShirts,Math.random()))
camisetas.push(new producto('camiseta basket','chicago bulls','L','primer uniforme','jordan','https://i.ibb.co/4Knz1Fs/web-bulls.png',premiumShirts,Math.random()))
camisetas.push(new producto('camiseta basket','golden state','L','uniforme alternativo','curry','https://i.ibb.co/s2B9Nh4/web-golden-State.png',premiumShirts,Math.random()))
camisetas.push(new producto('remera deportiva','adidas','L','azul','...','https://i.ibb.co/ZJD0D1p/adidas-azul.png',ecoShirts,Math.random()))
camisetas.push(new producto('camiseta futbol','seleccion argentina','L','celeste y blanca','Julian Alvarez','https://i.ibb.co/6bRztxw/web-alvarez.png',shirts,Math.random()))

//TALLE XL
camisetas.push(new producto('camiseta futbol','seleccion argentina','XL','celeste y blanca','lionel messi','https://i.ibb.co/JFr2hH7/web-messi.png',ecoShirts,Math.random()))
camisetas.push(new producto('camiseta futbol','seleccion argentina','XL','celeste y blanca','lionel messi','https://i.ibb.co/JFr2hH7/web-messi.png',ecoShirts,Math.random()))
camisetas.push(new producto('camiseta basket','cleveland cavaliers','XL','uniforme alternativo','james','https://i.ibb.co/mNV3xjK/web-cleveland.png',premiumShirts,Math.random()))
camisetas.push(new producto('camiseta futbol','seleccion argentina','XL','violeta','rodrigo de paul','https://i.ibb.co/Dk9Lby2/web-de-Paul-V-eco.png',ecoShirts,Math.random()))
camisetas.push(new producto('camiseta futbol','seleccion argentina','XL','violeta','julian alvarez','https://i.ibb.co/9qwGkCc/web-alvarezvioleta.png',shirts,Math.random()))
camisetas.push(new producto('camiseta basket','san antonio spurs','XL','uniforme alternativo','ginobili','https://i.ibb.co/f1RyFrC/web-spurs.png',premiumShirts,Math.random()))
camisetas.push(new producto('camiseta futbol','seleccion argentina','XL','celeste y blanca','lionel messi','https://i.ibb.co/JFr2hH7/web-messi.png',shirts,Math.random()))
camisetas.push(new producto('camiseta futbol','seleccion argentina','XL','celeste y blanca','Rodrigo de Paul','https://i.ibb.co/CV2jGct/web-de-Paul.png',shirts,Math.random()))

//TALLE XXL
camisetas.push(new producto('camiseta futbol','seleccion argentina','XXL','celeste y blanca','angel di maria','https://i.ibb.co/JKd2mXn/web-dimariacelesteyblanca.png',shirts,Math.random()))
camisetas.push(new producto('camiseta futbol','seleccion argentina','XXL','celeste y blanca','lionel messi','https://i.ibb.co/JFr2hH7/web-messi.png',ecoShirts,Math.random()))
camisetas.push(new producto('camiseta futbol','seleccion argentina','XXL','celeste y blanca','lionel messi','https://i.ibb.co/JFr2hH7/web-messi.png',ecoShirts,Math.random()))
camisetas.push(new producto('camiseta futbol','seleccion argentina','XXL','violeta','lionel messi','https://i.ibb.co/ysrQBwb/web-messi-v-eco.png',ecoShirts,Math.random()))
camisetas.push(new producto('remera deportiva','adidas','XXL','blanca','...','https://i.ibb.co/Jn3VQdB/adidas-blanca.png',ecoShirts,Math.random()))
camisetas.push(new producto('camiseta futbol','manchester city','XXL','uniforme celeste','julian alvarez','https://i.ibb.co/tC1qVLk/web-manchester-City.png',shirts,Math.random()))
camisetas.push(new producto('camiseta futbol','seleccion argentina','XXL','celeste y blanca','-','https://i.ibb.co/n8F2Tgp/nophoto.png',shirts,Math.random()))