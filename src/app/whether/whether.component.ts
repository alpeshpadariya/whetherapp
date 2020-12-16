import { Component, OnInit } from '@angular/core';
import {GeneralService} from '../service/general.service';
@Component({
  selector: 'app-whether',
  templateUrl: './whether.component.html',
  styleUrls: ['./whether.component.css']
})
export class WhetherComponent implements OnInit {

  whetherData: any;
  constructor(public service:GeneralService) { }

  ngOnInit(): void {
    this.loadWhetherData();
  }

  loadWhetherData(){
    this.service.getWhetherData().subscribe(res=>{
        this.whetherData = res;
        console.log(this.whetherData)
    })
  }

}
