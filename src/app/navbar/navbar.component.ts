import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{
  activeTab = 'search';
  search(activeTab){
    this.activeTab = activeTab;
  }

  add(activeTab){
    this.activeTab = activeTab;
  }
  delete(activeTab){
    this.activeTab = activeTab;
  }
}
