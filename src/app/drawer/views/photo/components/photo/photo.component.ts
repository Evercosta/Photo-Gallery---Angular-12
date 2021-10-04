import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { PhotoService } from '../..';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  photos: any[] = [];
  selectedPhoto: any;
  file: any = '';
  form: FormGroup = this.fb.group({
    photo: ['', [Validators.required]]
  })
  showLoader: boolean = false;
  modalRef?: BsModalRef;

  constructor(
    private fb: FormBuilder,
    private photoService: PhotoService,
    private toast: ToastrService,
    private modalService: BsModalService
  ) {  }

  ngOnInit(): void {
    this.loadPhotos();
  }

  loadPhotos(){
    this.showLoader = true;
    this.photoService.read_Photos().subscribe(data => {
      if(!data.length) this.showLoader = false;
      this.photos = data.map((e, index) => {
        const datas:any = e.payload.doc.data()
        if(index + 1 === data.length) this.showLoader = false;
        return {
          id: e.payload.doc.id,
          url: datas.url
        }
      });
    });
  }

  uploadPhoto(){
    this.showLoader = true;
    this.photoService.create_NewPhoto({
      url: this.file
    }).then(data => {
      this.form.reset();
      this.file = '';
      this.showLoader = false;
      if(data) this.toast.success('Foto gravada!', 'Sucesso!')
      else this.toast.success('Não foi possível gravar a foto!', 'Erro!')
    })
  }

  getBase64(event: any) {
    var files = event.target.files;
    var file = files[0];

    if (files && file) {
      var reader = new FileReader();

      reader.onload =this.handleFile.bind(this);

      reader.readAsBinaryString(file);
    }
  }

  handleFile(event: any) {
    var binaryString = event.target.result;
    this.file= btoa(binaryString);
    console.log(this.file);
  }

  getUrlImage(src: string): string{
    return 'data:image/jpg;base64,' + src;
  }

  openModal(modal: TemplateRef<any>, item: any) {
    this.modalRef = this.modalService.show(modal);
    this.selectedPhoto = item;
  }

  

}
