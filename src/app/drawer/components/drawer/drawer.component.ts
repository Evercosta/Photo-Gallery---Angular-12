import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SidebarjsService } from 'ng-sidebarjs';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css']
})
export class DrawerComponent implements OnInit {
  
  // subscribeRoute:
  constructor(
    private readonly sidebarjsService: SidebarjsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe(
      (data: any) => {
        console.log('rota: ', data);
        
      }
    );
    
  }

  public onOpen() {
    // console.log('open');
  }

  public onClose() {
    // console.log('close');
  }

  public onChangeVisibility(event: any) {
    // console.log('change visibility', event);
  }

  logout(){
    localStorage.setItem('token-photo-gallery', '');
    this.router.navigate(['/login']);
  }
}
