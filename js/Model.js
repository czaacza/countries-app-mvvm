class Model {
  constructor() {
    this.apiKey = 'dvT5HgUQ1B4sARqRSNudKCWvZOVRxHjy';
  }

  fetchData = function (endpoint, value) {
    const url = `http://dataservice.accuweather.com/locations/v1/${endpoint}/${value}?apikey=${this.apiKey}`;

    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  fetchDataByCode = function (endpoint, name, value) {
    const url = `http://dataservice.accuweather.com/locations/v1/${endpoint}/${name}?apikey=dvT5HgUQ1B4sARqRSNudKCWvZOVRxHjy&q=${value}`;

    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .catch(function (err) {
        console.log(err);
      });
  };
}

export default Model;
