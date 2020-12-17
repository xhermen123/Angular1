import { Component, Input, OnInit } from '@angular/core';
import { ScoresStoreService } from '../../common/services/scores-store.service';


const COLORS: string[] = ["#ffa000", "#69f0ae", "#afb42b", "#40c4ff", "#e91e63"]
const MAX: number = 100;
const TABLE_DATA: object[] = [
  {icon: "Icon1", title: "Shopping", content: "Medical Expenses"},
  {icon: "Icon2", title: "Monthly Salary", content: "Income Protection"},
  {icon: "Icon3", title: "Purchase Food", content: "Stuff You Own"},
  {icon: "Icon4", title: "Shopping", content: "Liabilities"},
  {icon: "Icon5", title: "Wedding", content: "Digital"},
]


@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {
  @Input() value: number;
  totalValue: number = 0;
  paths: string[] = ['', '', '', '', ''];
  radiuses: number[] = [33.33, 66.67, 100, 133.33, 166.67];
  cx: number = 233.33;
  cy: number = 233.33;
  currentPageValues: number[] = [];
  slideIndex: number = 1;
  colors: string[] = COLORS;
  tableData = TABLE_DATA;
  DATA: number[][];

  constructor(private scoresStoreService: ScoresStoreService) {
    this.DATA = this.scoresStoreService.scores;
    let id, user_id, overall;
    console.log(this.DATA[this.slideIndex - 1]);
    [id, user_id, overall, ...this.currentPageValues] = Object.values(this.DATA[this.slideIndex - 1]);
    this.updateGraph(this.cx, this.cy);
    this.totalValue = this.sumValues(this.currentPageValues);
  }

  ngOnInit() {
    console.log('test!');
    this.showSlides(this.slideIndex);
  }

  updateGraph(cx: number, cy: number) {
    for (let i = 0; i < this.paths.length; i++) {
      this.paths[i] = this.arc(cx, cy, this.radiuses[i], 0, this.calEnding(this.currentPageValues[i]), false);
    }
  }

  sumValues(arr: number[]) {
    if (arr) {
      return arr.reduce((a, b) => a + b);
    }
  }
  plusSlides(n: number) {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n: number) {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n) {
    let dots = document.getElementsByClassName("dot");
    let id, user_id, overall;
    [id, user_id, overall, ...this.currentPageValues] = Object.values(this.DATA[this.slideIndex - 1]);
    this.updateGraph(this.cx, this.cy);
    this.totalValue = this.sumValues(this.currentPageValues);

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[this.slideIndex - 1].className += " active";
  }

  private calEnding (val: number) {
    return val / MAX * 359;
  }

  private round(val) {
    let noOfDigits = 2;
    let m = Math.pow(10, noOfDigits);
    let r = parseFloat((Math.round(val * m) / m).toFixed(noOfDigits));
    return r;
  }

  private polarToCartesian(centerX: number, centerY: number, radius: number, angleInDegrees: number) {
    let angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;

    return {
      x: centerX + this.round(parseFloat('' + radius * Math.cos(angleInRadians))),
      y: centerY + this.round(parseFloat('' + radius * Math.sin(angleInRadians)))
    };
  }

  private arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, bClose: boolean) {
    bClose = (typeof bClose !== "undefined") ? bClose : false;
    let start = this.polarToCartesian(x, y, radius, endAngle);
    let end = this.polarToCartesian(x, y, radius, startAngle);

    let arcSweep = endAngle - startAngle <= 180 ? "0" : "1";
    console.log(start['x']);
    let d = "M " + this.round(parseFloat('' + start['x'])) + " " + this.round(parseFloat('' + start['y'])) + " A" + this.round(parseFloat('' + radius)) + " " + this.round(parseFloat('' + radius)) + " 0 " + this.round(parseFloat('' + arcSweep)) + " 0 " + this.round(parseFloat('' + end.x)) + " " + this.round(parseFloat('' + end.y));
    if (bClose) {
      d += "L " + x + " " + y + " L " + start[x] + " " + start[y] + " L " + x + " " + y + " L";
    }

    return d
  }

}
