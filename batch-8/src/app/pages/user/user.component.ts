import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}

  listUser: any = [];

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.userService.getAll().subscribe((res) => {
      this.listUser = [...res.data];
      console.log('listUser: ', this.listUser);
    });
  }

  onAddUser() {
    // this.router.navigateByUrl('/user/create');
  }
  
}
