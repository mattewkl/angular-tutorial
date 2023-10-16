import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import {RoomDataInterface, RoomInterface} from "../rooms";


@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.sass']
})


export class RoomsListComponent implements OnInit, OnChanges {

  @Input() rooms: RoomDataInterface[] = [

  ]
  @Input() title: string = ''

  @Output() selectedRoom = new EventEmitter<RoomDataInterface>();
  constructor() {
  }
  selectRoom(room:RoomDataInterface) {
    this.selectedRoom.emit(room)
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['title']){
      this.title = changes['title'].currentValue.toUpperCase()
    }
  }
  ngOnInit() {
  }

}
