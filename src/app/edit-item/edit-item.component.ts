import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent {
  @Input() item: any; 
  @Output() editItem = new EventEmitter<any>();

  editedItem: any = {};

  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit(): void {
    // Initialize editedItem with a copy of the original item
    this.editedItem = { ...this.item };
  }

  saveChanges(): void {
    // this.onClose.emit(this.editedItem);
    this.bsModalRef.hide();
  }

}
