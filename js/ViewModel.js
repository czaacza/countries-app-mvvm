import Model from './model.js';
import View from './view.js';

class ViewModel {
  constructor() {
    this.model = new Model();
    this.view = new View(this);
    this.init();
  }

  setSearchFormListener(viewmodel) {
    const searchForm = document.querySelector('.search-container form');

    searchForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const searchInput = document.querySelector('.search-container input');

      const searchValue = searchInput.value;
      console.log('searchValue: ', searchValue);

      (async () => {
        try {
          const data = await viewmodel.model.fetchDataByCode(
            'cities',
            'autocomplete',
            searchValue
          );
          viewmodel.displaySearchResults(data);
        } catch (error) {
          console.error('An error occurred:', error);
        }
      })();
    });
  }

  setSearchIPFormListener() {}

  setSearchCodeFormListener() {}

  setContinentButtonListeners() {}

  displaySearchResults(data) {
    this.view.displaySearchResults(data);
  }

  displayCountries(data) {
    this.view.displayCountries(data);
  }

  init() {
    this.setSearchFormListener(this);
    this.setSearchIPFormListener();
    this.setSearchCodeFormListener();
    this.setContinentButtonListeners();
  }
}

export default ViewModel;
