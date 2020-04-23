import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {

  gender = 'male';
  inviteMap: any = {male: 'Invite him.', female: 'Invite her.', other: 'Invite them.'};

}
