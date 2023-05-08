import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit{

  listOfStates : any = [];
  listOfPlaces : any = {};
  selectedState : any = '';
  selectedLocation : any = '';
  headlines : any = [];
  constructor(
    private router : Router,
    private _http : HttpClient
    ){
  }

    getLocations()
    {
      this._http.get('http://localhost:3000/locations')
      .subscribe(
         {
          next : (data : any) => {
             this.listOfStates = Object.keys(data.result);
             let stateObjects : any = {}
             for(let i = 0 ; i < this.listOfStates.length; i++)
             {
              stateObjects[this.listOfStates[i]] = this.listOfStates[i];
              for(let j = 0 ; j < data.result[this.listOfStates[i]].length; j++)
              {
                if(!this.listOfPlaces[this.listOfStates[i]])
                {
                  this.listOfPlaces[this.listOfStates[i]] = {}
                }
                console.log(data.result[this.listOfStates[i]][j].location, this.listOfStates[i])
                this.listOfPlaces[this.listOfStates[i]][data.result[this.listOfStates[i]][j].location]
                =                   data.result[this.listOfStates[i]][j].location 

              }
             }
             this.listOfStates = stateObjects;
             console.log(this.listOfPlaces)
          },
          error : error => console.log(error),
          complete : () => console.log('Complete')
         }
      )
    }
      navigateToPage(link : any){
        // console.log('')
        window.open(link, '_blank')
        // this.router.navigateByUrl('news-timeline').then((data)=>{console.log('This is data',data)}).catch((error)=>console.log(error))
      }

      changeLocation()
      {
        Swal.fire(
          {
            title : 'Select State',
            input : 'select',
            inputOptions : this.listOfStates,
            inputPlaceholder: 'Select State',
            confirmButtonText : 'Proceed'
          }
        ).then((data)=>{
          console.log(this.listOfStates)
          if(data.isConfirmed === true && data.value)
          {
            this.selectedState = data.value;
            console.log(this.listOfPlaces[data.value])
            Swal.fire(
              {
                input : 'select',
                title : 'Select Place',
                inputOptions : this.listOfPlaces[data.value],
                inputPlaceholder : 'Select Place',
                confirmButtonText : 'Confirm'
              }
            ).then((loc) => {
              if(data.isConfirmed === true && loc.value)
              {
                this.selectedLocation = loc.value;
                console.log(this.selectedLocation, this.selectedState)
                this.getNews()
              }
            })
          }
        })
      }

      getNews()
      {
        Swal.fire({
          title : 'Loading news'
        });
        Swal.showLoading();
        this._http.get('http://localhost:3000/news', 
        {
          params : {
            location : this.selectedLocation,
            state : this.selectedState
          }
        }
        )
        .subscribe(
          {
            next : (data : any) => {
              if(data.result.length === 0 && data.error != true)
              {
                 Swal.fire(
                  {
                    title : 'No news found.'
                  }
                )
                return
              }
              this.headlines = data.result
              Swal.close()
            }
          }
        )
      }


      ngOnInit(): void {
          this.getNews();
          this.getLocations();
      }
}
