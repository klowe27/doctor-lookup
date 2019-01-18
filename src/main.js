import { Practice } from './practice.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  var practice = new Practice('Kristin');
  $('#output').append(`<p>${practice.name}</p>`);
});
