const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.listOfTitles = function () {
  return this.films.map(film => film.title)
};

Cinema.prototype.findByTitle = function (title) {
  return this.films.find(film => title === film.title);
}

Cinema.prototype.filterFilms = function (genre) {
  return this.films.filter(film => genre === film.genre);
}

Cinema.prototype.filmsByYear = function (year) {
  return this.films.some(film => year === film.year);
}

Cinema.prototype.findByLength = function (length) {
  return this.films.every(film => length > film.length);
}

Cinema.prototype.totalRunningTime = function () {
  return this.films.reduce((acc, currentFilm) => acc + currentFilm.length, 0);
}

Cinema.prototype.filmsByProperty = function (property, value) {
  return this.films.filter(film => value === film[property]);
}
 
module.exports = Cinema;
