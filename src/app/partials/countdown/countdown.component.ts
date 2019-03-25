import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}


// import * as React from "react";
// import "./Countdown.scss";
//
// interface CountdownProps {}
//
// interface State {
//     days: number;
//     hours: number;
//     minutes: number;
//     seconds: number;
// }
//
// export class Countdown extends React.Component<CountdownProps, State> {
//     public static readonly displayName = "Countdown component";
//
//     constructor(props: CountdownProps, context: any) {
//         super(props, context);
//
//         this.state = {
//             days: 0,
//             hours: 0,
//             minutes: 0,
//             seconds: 0
//         };
//
//         this.countdown();
//     }
//
//     public render(): JSX.Element {
//         return (
//             <div className={"Countdown"}>
//                 <div className={"Countdown__column"}>
//                     <span className={"Countdown__column--text"}>{this.state.days}</span>
//                     <h3 className={"Countdown__column--title"}>Days</h3>
//                 </div>
//
//                 <div className={"Countdown__column divider"}>:</div>
//
//                 <div className={"Countdown__column"}>
//                     <span className={"Countdown__column--text"}>{this.state.hours}</span>
//                     <h3 className={"Countdown__column--title"}>Hours</h3>
//                 </div>
//
//                 <div className={"Countdown__column divider"}>:</div>
//
//                 <div className={"Countdown__column"}>
//                     <span className={"Countdown__column--text"}>{this.state.minutes}</span>
//                     <h3 className={"Countdown__column--title"}>Minutes</h3>
//                 </div>
//
//                 <div className={"Countdown__column divider"}>:</div>
//
//                 <div className={"Countdown__column"}>
//                     <span className={"Countdown__column--text"}>{this.state.seconds}</span>
//                     <h3 className={"Countdown__column--title"}>Seconds</h3>
//                 </div>
//             </div>
//         );
//     }
//
//     private countdown(): void {
//         setInterval(this.calculateTimeLeft.bind(this), 1000);
//     }
//
//     private calculateTimeLeft(): any {
//         const endDate = new Date("03/07/2019 04:20:00 PM").getTime();
//
//         let days: number;
//         let hours: number;
//         let minutes: number;
//         let seconds: number;
//
//         const startDate: Date = new Date();
//         const startDateMilliseconds: number = startDate.getTime();
//         const diff: number = (endDate - startDateMilliseconds) / 1000;
//         let timeRemaining: number = parseInt(diff, 10);
//
//         days = parseInt(timeRemaining / 86400, 10);
//         timeRemaining = (timeRemaining % 86400);
//
//         hours = parseInt(timeRemaining / 3600, 10);
//         timeRemaining = (timeRemaining % 3600);
//
//         minutes = parseInt(timeRemaining / 60, 10);
//         timeRemaining = (timeRemaining % 60);
//
//         seconds = parseInt(timeRemaining);
//
//         this.setState({
//             days: parseInt(days, 10),
//             hours: parseInt(("0" + hours).slice(-2), 10),
//             minutes: parseInt(("0" + minutes).slice(-2), 10),
//             seconds: parseInt(("0" + seconds).slice(-2), 10)
//         });
//     }
// }
