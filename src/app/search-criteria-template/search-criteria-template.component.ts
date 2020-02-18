import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-criteria-template',
  templateUrl: './search-criteria-template.component.html',
  styleUrls: ['./search-criteria-template.component.css']
})
export class SearchCriteriaTemplateComponent {

  @Input('title') title: string;
  isExpanded : boolean;
  
  toggle(){
    this.isExpanded = !this.isExpanded;
  }
}
