import { showDetailsView } from "./details.js";
import {request} from './request.js';
export function showHomeView() {
  //hide all sections
  document
    .querySelectorAll("section")
    .forEach((s) => (s.style.display = "none"));
  //show current section
  document.getElementById("home-view").style.display = "block";
  //populate dinamic content
  start();
}

async function start() {
  const list = document.getElementById("list");

  const movies = await getMovies();

  list.replaceChildren(...movies.map(createMoviePreview));
}

async function getMovies() {
  const url = "http://localhost:3030/data/movies?select=_id%2Ctitle%2Cimg";

  return request(url);
}

function createMoviePreview(movie) {
  const element = document.createElement("li");
  element.innerHTML = `<a href="/details/${movie._id}">${movie.title}</a>`;

  element.querySelector('a').addEventListener('click', e=>{
    showView('details-view',showDetailsView,e,movie._id)
  })
  return element;
}
