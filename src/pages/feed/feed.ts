import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
      MoovieProvider
  ]
})
export class FeedPage {

  public object_feed = {
      title: "Laerte Neto",
      date: "November, 11, 1955",
      description: "Estou criando esse app massa",
      qntd_likes: 12,
      qntd_comments: 4,
      time_comment: "11h"
  }

  public movie_list = new Array<any>();


  public nome_usuario:string = "Laerte Neto do Código";

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private moovieProvider: MoovieProvider
  ){
  }

  public somaDoisNumeros(num1:number,num2:number): void{
    //alert(num1+num2);
  }

  ionViewDidLoad() {
    this.moovieProvider.getLatestMovies().subscribe(
      data => {
        const response = (data as any);
        const obg_return = JSON.parse(response._body);
        this.movie_list = obg_return.results;
        console.log(obg_return);
      },
      error =>{
        console.log(error);
      }
    )
  }

}
