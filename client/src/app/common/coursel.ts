
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coursel',
  template: `
  <div id="carouselExampleIndicators" class="carousel slide my-4" data-ride="carousel">
  <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner" role="listbox">
      <div class="carousel-item active">
          <img class="d-block img-fluid" src="https://www.discovermuskoka.ca/content/uploads/girls-night-out-shopping-blog-header-1000x417.jpg" alt="First slide">
      </div>
      <div class="carousel-item">
          <img class="d-block img-fluid" src="https://cdn.pixabay.com/photo/2016/05/06/09/25/human-1375492_960_720.png" alt="Second slide">
      </div>
      <div class="carousel-item">
          <img class="d-block img-fluid" src="https://www.livinglocal247.com/wp-content/uploads/2018/11/SHOPPING-HEADER-e1542232163823.jpeg" alt="Third slide">
      </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
  </a>
</div>
  `,
  styles: []
})
export class CourselComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
