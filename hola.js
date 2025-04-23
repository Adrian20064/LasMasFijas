fetch("https://www.openligadb.de/")
.then(res => res.json())
.then(data => {
  const contenedor = document.getElementById("resultados");
  data.matches.forEach(partido => {
    contenedor.innerHTML += `<p>${partido.home} vs ${partido.away} - ${partido.time}</p>`;
  });
})
.catch(error => {
  console.error("Error al obtener datos:", error);
});