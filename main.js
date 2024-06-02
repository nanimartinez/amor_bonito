for (let i = 0; i < 1; i++) {
    let respuesta = prompt("¿Quieres ser mi amor? (puedes responder por 'SI' o por 'NO')");
    if (respuesta.toLowerCase() === "sí" || respuesta.toLowerCase() === "si") {
      alert("Yo también quiero ser tu amor");
      break; // Salimos del bucle si la respuesta es sí
    } else if (respuesta.toLowerCase() === "no") {
      alert("Está bien, volveré a preguntar.");
      i--; // Restamos uno al contador para que el bucle se repita
    } else {
      alert("Por favor, responde solo con 'SI' o 'NO'.");
      i--; // Restamos uno al contador para que el bucle se repita
    }
  }