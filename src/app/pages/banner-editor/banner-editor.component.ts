import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

export interface Fruit {
  name: string;
}


@Component({
  selector: 'app-banner-editor',
  templateUrl: './banner-editor.component.html',
  styleUrls: ['./banner-editor.component.scss']
})
export class BannerEditorComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }

}
