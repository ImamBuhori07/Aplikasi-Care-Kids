import { Component } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { FormGroup, FormControl, Validators } from '@angular/forms';

//services
import { AdminService } from '../../admin.service';

//class
import { Posting } from '../../classes/addPost';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  addForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required),
    category_id: new FormControl('', Validators.required),
    // status_id: new FormControl('', Validators.required),
    // thumbnail: new FormControl('', Validators.required)
  });

  htmlContent = '';

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '50vh',
    minHeight: '15rem',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' }
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadUrl: 'v1/image',
    //   upload: (file: File) => { ... }
    // uploadWithCredentials: false,
    // sanitize: true,
    // toolbarPosition: 'top',
    // toolbarHiddenButtons: [
    //   ['bold', 'italic'],
    //   ['fontSize']
    // ]
  };

  posting: any;

  constructor(private adminData: AdminService) { }

  // onSubmit(posting: Posting) {
  //   console.warn(posting);
  //   // this.adminData.addPostingan(posting).subscribe((res: any) => {
  //   //   this.posting = Array.of(res.data);
  //   // });
  // }

  addPostPublic() {
    this.adminData.addPostinganPublic(this.addForm.value).subscribe((res: any) => {
      this.posting = Array.of(res.data);
    });
  }

  addPostDraft() {
    this.adminData.addPostinganDraft(this.addForm.value).subscribe((res: any) => {
      this.posting = Array.of(res.data);
    });
  }



}
