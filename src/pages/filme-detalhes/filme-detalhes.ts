import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';
import { Camera, CameraOptions } from '@ionic-native/camera';

/**
 * Generated class for the FilmeDetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filme-detalhes',
  templateUrl: 'filme-detalhes.html',
  providers: [
    MoovieProvider,
    Camera
  ]
})
export class FilmeDetalhesPage {

  public movie;
  public movie_id;

  public img="";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public movieProvider: MoovieProvider,
    private camera: Camera
  ) { }

  ionViewDidEnter() {
    this.movie_id = this.navParams.get("id");
    this.movieProvider.getMovieDetails(this.movie_id).subscribe(
      data => {
        let retorno = (data as any)._body;
        this.movie = JSON.parse(retorno);
      }, error => {
        console.log(error);
      });
  }

  tirarFoto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      this.img = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });
  }

}
