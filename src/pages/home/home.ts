import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { PostsService } from '../../providers/posts-service';
/**
 * Generated class for the Home page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  posts: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, private post: PostsService) {
      post.getPosts().subscribe(res => {
        console.log(res);
        this.posts = res;
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Home');
  }

}
