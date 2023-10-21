class View {
  constructor(viewModel) {
    this.viewModel = viewModel;
  }

  displaySearchResults(results) {
    const container = document.querySelector('#countries-container');
    container.innerHTML = '';

    if (!Array.isArray(results)) {
      results = [results];
    }

    results.forEach((result) => {
      const card = document.createElement('div');
      card.setAttribute('value', result.Key);

      card.className = 'card';
      card.classList.add('country-btn');

      const cardText = document.createElement('p');
      cardText.innerText = result.LocalizedName;

      card.appendChild(cardText);
      container.appendChild(card);
    });
  }

  displayCountrites(countries) {
    const container = document.querySelector('#countries-container');
    container.innerHTML = '';

    countries.forEach((country) => {
      const card = document.createElement('div');
      card.setAttribute('value', country.ID);

      card.className = 'card';
      card.classList.add('country-btn');

      const cardText = document.createElement('p');
      cardText.innerText = country.EnglishName;

      card.appendChild(cardText);
      container.appendChild(card);
    });
  }
}

export default View;
