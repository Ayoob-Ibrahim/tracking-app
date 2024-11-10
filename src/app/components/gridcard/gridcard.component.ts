import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-gridcard',
  standalone: true,
  imports: [],
  templateUrl: './gridcard.component.html',
  styleUrl: './gridcard.component.scss'
})
export class GridcardComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    this.griddata['value']['colorcode'] = this.color_code_status(this.griddata?.value?.status);
    console.log(this.griddata)
  }
  @Input() griddata: any;

  color_code_status(type: string): string | undefined {
    const data: { [key: string]: string } = {
      'Idle': '#1f5baa',
      'Running': '#1eb15d',
      'Stop': '#FF0000',
      'Yet_to_transmit': '#7d410f',
      'No Transmission': '#800080',
      'Online': '#00E1BC',
      'Overspeed': '#f28918',
      'DoorOpen': '#FF851B',
      'HighTemp': '#FF0000',
      'PowerFail': '#412525',
      'Geofence': '#1f5baa',
      'Good': '#1eb15d',
      'Towed': '#ec268f',
      'StandBy': '#f4d642',
      'Working': '#1eb15d',
      'Out_Of_Zone': '#FF0000',
      'OnLine': '#00008b',
      'GSMLost': '#c200b8',
      'BatteryDrain': '#00aef3',
      'PowerCut': '#ff0000',
      'Movement': '#1eb15d',
      'LowBattery': '#fba300',
    };
    return data[type];
  }

}
