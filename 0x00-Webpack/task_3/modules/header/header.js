import $ from 'jquery';
import '../header/header.css';

$(document).ready(function () {
  $('body').prepend('<div id="logo"></div>');
  $('body').prepend('<h1>ALX Dashboard</h1>');
  console.log('Init header');
});