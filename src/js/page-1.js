const elements = {
  list: document.querySelector('.js-movie-list'),
  btnLoad: document.querySelector('.js-load-more'),
};

let page = 1;
const limit = 10;

elements.btnLoad.addEventListener('click', handlerLoadMore);

async function handlerLoadMore() {
  try {
    page += 1;
    const data = await serviceMovie(page, limit);

    elements.list.insertAdjacentHTML('beforeend', createMarkup(data.docs));

    if (page >= data.totalPages) {
      elements.btnLoad.classList.add('load-more-hidden');
    }
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
    page: data.page,
    totalPages: Math.ceil(data.total / limit),
  };
}

async function initialize() {
  try {
    const data = await serviceMovie(page, limit);

    elements.list.insertAdjacentHTML('afterbegin', createMarkup(data.docs));

    if (page < data.totalPages) {
      elements.btnLoad.classList.remove('load-more-hidden');
    }
  } catch (error) {
    console.error(error);
  }
}

initialize();

function createMarkup(arr) {
  return arr
    .map(
      ({ name, race }) => `
    <li class="character-card">
        <h2>${name}</h2>
        <p>${race}</p>
    </li>
    `
    )
    .join('');
}
