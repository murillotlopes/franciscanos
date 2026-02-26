import {
  getFormationMaterials,
  getFraternity,
  getProfile,
  getSongs,
} from './api/franciscanosService.js';

const menuItems = document.querySelectorAll('.menu-item');
const panels = document.querySelectorAll('.panel');

menuItems.forEach((button) => {
  button.addEventListener('click', () => {
    const target = button.dataset.target;

    menuItems.forEach((item) => item.classList.remove('is-active'));
    button.classList.add('is-active');

    panels.forEach((panel) => {
      panel.classList.toggle('is-visible', panel.id === target);
    });
  });
});

function renderList(container, items, mapper) {
  container.innerHTML = items
    .map(
      (item) => `
      <li class="card">
        ${mapper(item)}
      </li>
    `,
    )
    .join('');
}

function renderDefinitionList(container, dataMap) {
  const entries = Object.entries(dataMap)
    .map(
      ([label, value]) => `
      <dt>${label}</dt>
      <dd>${value}</dd>
    `,
    )
    .join('');

  container.innerHTML = `<dl>${entries}</dl>`;
}

async function bootstrap() {
  const [songs, materials, profile, fraternity] = await Promise.all([
    getSongs(),
    getFormationMaterials(),
    getProfile(),
    getFraternity(),
  ]);

  const songsList = document.querySelector('#songs-list');
  renderList(
    songsList,
    songs,
    (song) => `
      <h3>${song.title}</h3>
      <p>${song.context}</p>
      <span class="badge">${song.type}</span>
    `,
  );

  const formationList = document.querySelector('#formation-list');
  renderList(
    formationList,
    materials,
    (material) => `
      <h3>${material.title}</h3>
      <p>${material.description}</p>
      <span class="badge">${material.format}</span>
    `,
  );

  const fraternityCard = document.querySelector('#fraternity-card');
  renderDefinitionList(fraternityCard, {
    Fraternidade: fraternity.name,
    Regional: fraternity.region,
    Local: fraternity.local,
    Encontros: fraternity.meetingFrequency,
    Contato: fraternity.councilContact,
  });

  const profileCard = document.querySelector('#profile-card');
  renderDefinitionList(profileCard, {
    Nome: profile.name,
    Email: profile.email,
    Telefone: profile.phone,
    Cidade: profile.city,
    'Profissão na OFS': profile.vocationDate,
  });
}

bootstrap().catch((error) => {
  const content = document.querySelector('.content');
  content.innerHTML = `
    <section class="panel is-visible">
      <h2>Não foi possível carregar os dados</h2>
      <p>${error.message}</p>
    </section>
  `;
});
