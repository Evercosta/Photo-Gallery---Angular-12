import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: any = [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.read_Users().subscribe(data => {
      this.users = data.map(e => {
        const datas:any = e.payload.doc.data()
        return {
          id: e.payload.doc.id,
          name: datas.name
        }
      });
    })
      
  }

}
