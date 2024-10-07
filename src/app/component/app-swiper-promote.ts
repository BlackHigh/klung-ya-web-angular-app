import { Component, AfterViewInit, NO_ERRORS_SCHEMA } from '@angular/core';
import Swiper from 'swiper'; // Ensure correct import
import Navigation from 'swiper'; // Correctly importing Navigation and Pagination
import Pagination from 'swiper';
import 'swiper/swiper-bundle.css'; // Importing Swiper styles

Swiper.use([Navigation, Pagination]);


@Component({
  selector: 'app-swiper-promote',
  standalone: true,
  templateUrl: './app-swiper-promote.html',
  styleUrls: ['../app.component.scss'],
  schemas: [NO_ERRORS_SCHEMA], // This suppresses the error for unknown elements
})
export class AppSwiperPromote implements AfterViewInit {
  title = "standAloneSwiper";

  ngAfterViewInit() {
    // Initialize Swiper after the view initializes
    const swiper = new Swiper('.mySwiper', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      // Additional options can be added here
    });
  }
}
