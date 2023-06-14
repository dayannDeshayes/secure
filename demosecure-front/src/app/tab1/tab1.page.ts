import {Component, OnInit} from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {ExploreContainerComponent} from '../explore-container/explore-container.component';
import {UserService} from "../services/user/user.service";
import {FormBuilder, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, AsyncPipe, NgIf, ReactiveFormsModule, NgForOf],
})
export class Tab1Page implements OnInit {
  form?: UntypedFormGroup;
  submitted = false;
  ajoutRole: boolean = false;


  constructor(private serviceUser: UserService, private formBuilder: UntypedFormBuilder) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['jon.doe@gmail.com', Validators.required],
      role: [Validators.required],
    });
  }

  onSubmit() {

    if (!this.form || this.form.invalid) {
      return;
    }

    let email = this.form.get('email')?.value;
    let role = this.form.get('role')?.value;
    console.log(email);

    this.serviceUser.changeRole(email, role).subscribe({
        next: (response) => {
          this.ajoutRole = true;

          setTimeout(() => {
            this.ajoutRole = false;
          }, 3000);
        },
        error: (e) => console.error(e),
        complete: () => {
          console.info('complete');
        }
      }
    );
  }

  logout() {
    this.serviceUser.logout();
  }
}
