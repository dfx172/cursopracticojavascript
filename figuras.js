// codigo del cuadrado //
console.group("Cuadrados");   //agrupa lso logs de consola en un grupo llamado cuadrados//
const ladoCuadrado = 5;
console.log("los lados del cuadrado miden: " +ladoCuadrado + " cm");
const perimetroCuadrado=ladoCuadrado*4;
console.log("el perimetro del cuadrado es: "+perimetroCuadrado+" cm");
const areaCuadrada=ladoCuadrado * ladoCuadrado;
console.log("el area del cuadrado es: "+areaCuadrada+" cm2");
console.groupEnd();         //termina un grupo de logs //
//codigo del triangulo//
console.group("triangulos");
const ladoTrianguloUno = 6;
const ladoTrianguloDos =6;
const baseTriangulo =4;
const alturaTriangulo=5.5;
console.log("los lados del triangulo miden: " +ladoTrianguloUno + " cm, y "
            +ladoTrianguloDos+" cm, y la base mide: "+baseTriangulo+" cm");
console.log("la altura del triangulo es: "+alturaTriangulo+" cm");
const perimetroTriangulo= ladoTrianguloUno+ladoTrianguloDos+baseTriangulo;
console.log("el perimetro del triangulo es: "+perimetroTriangulo+" cm");
const areaTriangulo=(baseTriangulo*alturaTriangulo)/2;
console.log("el area del triagulo es: "+areaTriangulo+" cm2");
console.groupEnd();

//codigo del circulo//
console.group("circulos");
const radioCirculo=4;
console.log("el radio del circulo es: "+radioCirculo+" cm")
const diametroCirculo=radioCirculo*2;
console.log("el diametro del circulo es: "+diametroCirculo+" cm")
const pi = Math.PI;
const perimetroCirculo=diametroCirculo* pi;
console.log("el perimetro del Circulo es: "+perimetroCirculo+" cm")
const areaCirculo=(radioCirculo*radioCirculo)*pi;
console.log("el area del circulo es: "+areaCirculo+" cm2")
console.groupEnd();

function calcularareacuadrado (lado){
    return lado*lado
}

function calcularperimetrocuadrado (lado){return lado*4}