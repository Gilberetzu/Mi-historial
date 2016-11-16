function Persona(nombre, numero_de_cedula, clave, edad, sexo, raza, nacionalidad,  e_civil, ocupacion, lugar_de_origen, lugar_de_residencia, domicilio, persona_responsable, religion, antecedentes){
  this.nombre = nombre;
  this.numero_de_cedula = numero_de_cedula;
  this.clave = clave;
  this.edad = edad;
  this.sexo = sexo;
  this.raza = raza;
  this.nacionalidad = nacionalidad;
  this.e_civil = e_civil;
  this.ocupacion = ocupacion;
  this.lugar_de_origen = lugar_de_origen;
  this.lugar_de_residencia = lugar_de_residencia;
  this.domicilio = domicilio;
  this.persona_responsable = persona_responsable;
  this.religion = religion;
  this.antecedentes = antecedentes;
}
var lista_users;
var inputs = function(){
  var nombre = $("#nombre").val();
  var numero_de_cedula = $("#numero_de_cedula").val();
  var clave = $("#clave").val();
  var edad = $("#edad").val();
  var sexo = $("#sexo").val();
  var raza = $("#raza").val();
  var nacionalidad = $("#nacionalidad").val();
  var e_civil = $("#e_civil").val();
  var ocupacion = $("#ocupacion").val();
  var lugar_de_origen = $("#lugar_de_origen").val();
  var lugar_de_residencia = $("#lugar_de_residencia").val();
  var domicilio = $("#domicilio").val();
  var persona_responsable = $("#persona_responsable").val();
  var religion = $("#religion").val();
  var antecedentes = $("#antecedentes").val();
  var users = new Persona(nombre, numero_de_cedula, clave, edad, sexo, raza, nacionalidad,  e_civil, ocupacion, lugar_de_origen, lugar_de_residencia, domicilio, persona_responsable, religion, antecedentes)
  lista_users = users;
  localStorage.setItem("nombre",lista_users.nombre);
  localStorage.setItem("cedula",lista_users.numero_de_cedula);
  localStorage.setItem("clave",lista_users.clave);
  localStorage.setItem("edad",lista_users.edad);
  localStorage.setItem("sexo",lista_users.sexo);
  localStorage.setItem("raza",lista_users.raza);
  window.location.replace("perfP.html");
}
