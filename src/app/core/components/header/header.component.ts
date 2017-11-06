import { ElectronService } from '../../services/electron.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private electron: ElectronService) {}
  ngOnInit() {
  }
  LogIn() {
    this.electron.openAuthWindow();
  }
}
