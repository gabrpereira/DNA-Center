async function loadSection(id, file) {
  const response = await fetch(`sections/${file}`);
  const html = await response.text();
  document.getElementById(id).innerHTML = html;
}

loadSection("header", "header.html");
loadSection("menu", "menu.html");
loadSection("atividades", "atividades.html");
loadSection("atendimento", "atendimento.html");
loadSection("contatos", "contatos.html");
loadSection("footer", "footer.html");