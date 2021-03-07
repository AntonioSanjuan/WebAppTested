import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Movie } from 'src/app/models/dataSupplier-models/Common/Movie.model';
import { FullScreenImageComponent } from '../../common/full-screen-image/full-screen-image.component';
import { MovieAdvancedInfoComponent } from '../movie-advanced-info/movie-advanced-info.component';

@Component({
  selector: 'app-movie-minified-info',
  templateUrl: './movie-minified-info.component.html',
  styleUrls: ['./movie-minified-info.component.scss']
})
export class MovieMinifiedInfoComponent implements OnInit {
  @Input() movie: Movie;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {}

  openImageDialog(): void {
    const dialogImageRef = this.dialog.open(FullScreenImageComponent, {
      height: '90vh',
      width: 'fit-content',
      data: this.movie.images.posterImageToBase64
    });
  }

  openMovieInfoDialog(): void {
    const dialogInfoRef = this.dialog.open(MovieAdvancedInfoComponent, {
      height: '90vh',
      width: '80vh',
      data: this.movie
    });
  }

}
