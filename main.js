import './style.css';
import ViewModel from './js/ViewModel';

document.querySelector('#app').innerHTML = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Continents of the World</title>
      <link rel="stylesheet" href="css/style.css" />
    </head>
    <body>
      <div class="app-container">
        <div class="sidebar">
          <div class="title-container">
            <h1 class="title">Countries App</h1>
            <h2 class="subtitle-2">
              Programowanie Aplikacji Mobilnych i Webowych
            </h2>
            <h2 class="subtitle">Mateusz Czarnecki</h2>
          </div>
          <div class="bg-container">
            <div class="search-container">
              <h2 class="search-title">Search for any place on Earth</h2>
              <form action="/search" method="get">
                <input
                  type="text"
                  name="query"
                  id="search-input"
                  class="search-input"
                  placeholder="Search..."
                />
                <button type="submit" class="search-button" id="search-button">
                  Search
                </button>
              </form>
            </div>
            <div class="search-container" id="search-container-ip">
              <h2 class="search-title">Find the Location of the IP address</h2>
              <form action="/search" method="get">
                <input
                  type="text"
                  name="query"
                  class="search-input"
                  id="search-input-ip"
                  placeholder="Search..."
                />
                <button type="submit" class="search-button" id="search-button-ip">
                  Search
                </button>
              </form>
            </div>
            <div class="search-container" id="search-container-code">
              <h2 class="search-title">Find the Location by the Postal Code</h2>
              <form action="/search" method="get">
                <input
                  type="text"
                  name="query"
                  class="search-input"
                  id="search-input-code"
                  placeholder="Search..."
                />
                <button
                  type="submit"
                  class="search-button"
                  id="search-button-code"
                >
                  Search
                </button>
              </form>
            </div>
            <div class="container">
              <h1>Choose your continent</h1>
              <ul>
                <li class="continent-btn" value="AFR" id="africa-btn">Africa</li>
                <li class="continent-btn" value="ANT" id="antarctica">
                  Antarctica
                </li>
                <li class="continent-btn" value="ASI" id="asia-btn">Asia</li>
                <li class="continent-btn" value="EUR" id="europe-btn">Europe</li>
                <li class="continent-btn" value="NAM" id="north-america-btn">
                  North America
                </li>

                <li class="continent-btn" value="OCN" id="australia-btn">
                  Australia and Oceania
                </li>
                <li class="continent-btn" value="SAM" id="south-america-btn">
                  South America
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="content-container">
          <h2 id="countries-title" class="hidden">Choose your country</h2>
          <div class="content">
            <div id="countries-container"></div>
          </div>
        </div>
      </div>
    </body>
  </html>
`;

const viewModel = new ViewModel();
