import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['2006', '2007', '2008','2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data : [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data : [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
  ];

  constructor() { }

  ngOnInit() { }

  changeColor(newColor) {
    document.getElementById('para').style.color = newColor;
  }

  /////////////////////////////////////////////////////////////
//   title = 'Browser market shares at a specific website, 2014';
//   type='PieChart';
//   data = [
//     ['Firefox', 45.0],
//     ['IE', 26.8],
//     ['Chrome', 12.8],
//     ['Safari', 8.5],
//     ['Opera', 6.2],
//     ['Others', 0.7] 
//  ];
//  columnNames = ['Browser', 'Percentage'];
//  options = {
//   colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'], is3D: true
// };

// title = 'Browser market shares at a specific website, 2014';
   type = 'PieChart';
   data = [
      ['Firefox', 45.0],
      ['IE', 26.8],
      ['Chrome', 12.8],
      ['Safari', 8.5],
      ['Opera', 6.2],
      ['Others', 0.7] 
   ];
   columnNames = ['Browser', 'Percentage'];
   options = {    
    //  is3D: true
    pieHole: 0.4,
   };
   width = 550;
   height = 400;

}
