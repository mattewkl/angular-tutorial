import {AfterViewInit, ChangeDetectionStrategy, Component, DoCheck, OnInit, ViewChild,} from '@angular/core';
import {RoomDataInterface, RoomInterface} from "./rooms";
import {HeaderComponent} from "../header/header.component";

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsComponent implements OnInit,  AfterViewInit, DoCheck{
  hotelName = '4 seasons';
  numberOfRooms = 10;
  selectedRoom!: RoomDataInterface;
  title:string = 'Room List'
  constructor() {
  }

  ngDoCheck() {
    console.log('call')
  }

  @ViewChild(HeaderComponent)  headerComponent!:HeaderComponent
  ngAfterViewInit() {
    this.headerComponent.title = "Rooms View"
  }

  ngOnInit() {
    this.roomsList = [ {
      roomNumber: 1,
      roomType: 'Standart',
      amenities: 'AC, Minibar, TV, WIFI',
      price: 300,
      photos: 'placeholder',
      checkInTime: new Date('11-Nov-2021'),
      checkOutTime: new Date('12-Nov-2021'),
      rating: 2.1
    }, {
      roomNumber: 2,
      roomType: 'Standart+',
      amenities: 'AC, Minibar, TV, WIFI, jabroni',
      price: 500,
      photos: 'placeholder',
      checkInTime: new Date('11-Nov-2021'),
      checkOutTime: new Date('12-Nov-2021'),
      rating: 3.6
    }, {
      roomNumber: 3,
      roomType: 'DELUXE',
      amenities: 'AC, Minibar, TV, WIFI, jabroni, jacusi, gym',
      price: 1000,
      photos: 'placeholder',
      checkInTime: new Date('11-Nov-2021'),
      checkOutTime: new Date('12-Nov-2021'),
      rating: 4.8
    },]


  }


  rooms: RoomInterface = {
    totalRooms: 20,
    availableRooms: 3,
    bookedRooms: 5
  }

  roomsList: RoomDataInterface[] = [];
  isRoomsHidden: boolean = false;

  selectRoom(room: RoomDataInterface) {
    console.log(room)
    this.selectedRoom = room
  }

  toggle() {
    this.isRoomsHidden = !this.isRoomsHidden
    this.title = 'New Rooms List'
  }

  addRoom() {
    const room: RoomDataInterface = {
      roomNumber: 4,
      roomType: 'Bad',
      amenities: 'ur ass',
      price: 9999,
      photos: 'placeholder',
      checkInTime: new Date('11-Nov-2021'),
      checkOutTime: new Date('12-Nov-2021'),
      rating: 4.8
    }
    this.roomsList = [...this.roomsList, room]
  }

}
