function inicio(){
  $("#name").html(localStorage.getItem("nombre"));
  $("#cedula").html(localStorage.getItem("cedula"));
}

$( document ).ready(function() {
    inicio();
});
