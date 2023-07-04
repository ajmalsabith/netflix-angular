import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from 'src/app/service/movie/api-service.service';

@Component({
  selector: 'app-movie-deatails',
  templateUrl: './movie-deatails.component.html',
  styleUrls: ['./movie-deatails.component.css']
})
export class MovieDeatailsComponent implements OnInit {

  constructor(private service:ApiServiceService,private router:ActivatedRoute){}
  getMovieDeatailResult:any
  getMovieVideoResult:any
  getMovieCastResult:any

  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id')
    console.log(getParamId,'getparamid#')

    this.getMovie(getParamId)
    this.getVideo(getParamId)
    this.getMovieCast(getParamId)
  }

  getMovie(id:any){
    this.service.getMovieDetails(id).subscribe((result)=>{

      console.log(result,'getmovierdetails#' );
      this.getMovieDeatailResult= result;

    })

  }

  getVideo(id:any)
  {
    this.service.getMovieVideo(id).subscribe((result)=>{
      console.log(result,'getMovieVideo#')
      result.results.forEach((element:any) => {
        if (element.type=='Trailer') {
          this.getMovieVideoResult= element.key

        }
      });
    })
  }

  getMovieCast(id:any)
  {
    this.service.getMovieCast(id).subscribe((result)=>{
      console.log(result,'movieCast#');
      this.getMovieCastResult= result.cast
    })
  }
}


