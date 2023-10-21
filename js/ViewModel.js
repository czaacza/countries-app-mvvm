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

  setSearchIPFormListener(viewmodel) {
    const searchIpForm = document.querySelector('#search-container-ip form');
    searchIpForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const searchInput = document.querySelector('.search-container input');
      const searchValue = searchInput.value;

      (async () => {
        try {
          const data = await viewmodel.model.fetchDataByCode(
            'cities',
            'ipaddress',
            searchValue
          );
          viewmodel.displaySearchResults(data);
        } catch (error) {
          console.error('An error occurred:', error);
        }
      })();
    });
  }

  setSearchCodeFormListener(viewmodel) {
    const searchCodeForm = document.querySelector(
      '#search-container-code form'
    );

    searchCodeForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const searchInput = document.querySelector(
        '#search-container-code input'
      );
      const searchValue = searchInput.value;

      (async () => {
        try {
          const data = await viewmodel.model.fetchDataByCode(
            'postalcodes',
            'search',
            searchValue
          );
          viewmodel.displaySearchResults(data);
        } catch (error) {
          console.error('An error occurred:', error);
        }
      })();
    });
  }

  setContinentButtonListeners(viewmodel) {
    const continentButtons = document.querySelectorAll('.continent-btn');
    continentButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        const searchValue = button.getAttributeNode('value').value;
        (async () => {
          try {
            const data = await viewmodel.model.fetchData(
              'countries',
              searchValue
            );
            viewmodel.displayCountries(data);
            viewmodel.setCountryButtonListeners(viewmodel);
          } catch (error) {
            console.error('An error occurred:', error);
          }
        })();
      });
    });
  }

  setCountryButtonListeners(viewmodel) {
    const countryButtons = document.querySelectorAll('.country-btn');

    countryButtons.forEach(function (button) {
      // send a get request to get the data from a sample url
      button.addEventListener('click', function () {
        const searchValue = button.getAttributeNode('value').value;

        (async () => {
          try {
            const data = await viewmodel.model.fetchData(
              'adminareas',
              searchValue
            );
            viewmodel.displayCountries(data);
          } catch (error) {
            console.error('An error occurred:', error);
          }
        })();
      });
    });
  }

  displaySearchResults(data) {
    this.view.displaySearchResults(data);
  }

  displayCountries(data) {
    this.view.displayCountries(data);
  }

  init() {
    this.setSearchFormListener(this);
    this.setSearchIPFormListener(this);
    this.setSearchCodeFormListener(this);
    this.setContinentButtonListeners(this);
  }
}

export default ViewModel;
