const elements = {
  list: document.querySelector('.js-lotr-list'),
  pagination: document.querySelector('.js-pagination'),
};

let currentPage = 1;
const itemsPerPage = 10;
let totalPages = 0;

elements.pagination.addEventListener('click', handlePaginationClick);

async function handlePaginationClick(event) {
  if (event.target.tagName === 'BUTTON') {
    const requestedPage = parseInt(event.target.dataset.page);

    if (requestedPage && requestedPage !== currentPage) {
      currentPage = requestedPage;
      await loadData();
    }
  }
}

async function loadData() {
  try {
    const data = await serviceMovie(currentPage, itemsPerPage);

    elements.list.innerHTML = createMarkup(data.docs);

    totalPages = data.totalPages;

    updatePaginationButtons();
  } catch (error) {
    console.error(error);
  }
}

async function serviceMovie(page = 1, limit = 10) {
  const BASE_URL = 'https://the-one-api.dev/v2/';
  const END_POINT = 'character';
  const BEARER_TOKEN = 'fVhH6jhxy5LdB6Ie2Y7P';

  const params = new URLSearchParams({
    page,
    limit,
  });

  const response = await fetch(`${BASE_URL}${END_POINT}?${params}`, {
    headers: {
      Authorization: `Bearer ${BEARER_TOKEN}`,
    },
  });

  if (!response.ok) {
    throw new Error(response.statusText || 'Error');
  }

  const data = await response.json();

  return {
    docs: data.docs,
    totalPages: Math.ceil(data.total / limit),
  };
}

async function initialize() {
  await loadData();
}

function createMarkup(arr) {
  return arr
    .map(
      ({ name, race }) => `
      <li class="card-list">
        <h2>${name}</h2>
        <p>${race != null ? race : 'unknown'}</p>
      </li>
    `
    )
    .join('');
}

function updatePaginationButtons() {
  elements.pagination.innerHTML = '';

  const maxButtonsToShow = 10;
  const startPage = Math.max(currentPage - Math.floor(maxButtonsToShow / 2), 1);
  const endPage = Math.min(startPage + maxButtonsToShow - 1, totalPages);

  if (startPage > 1) {
    const firstButton = document.createElement('button');
    firstButton.textContent = '1';
    firstButton.dataset.page = '1';
    elements.pagination.appendChild(firstButton);
  }

  for (let i = startPage; i <= endPage; i++) {
    const button = document.createElement('button');
    button.textContent = i;
    button.dataset.page = i;
    elements.pagination.appendChild(button);
  }

  if (endPage < totalPages) {
    const lastButton = document.createElement('button');
    lastButton.textContent = totalPages.toString();
    lastButton.dataset.page = totalPages.toString();
    elements.pagination.appendChild(lastButton);
  }
}

initialize();
