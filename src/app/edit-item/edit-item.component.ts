import { Component, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent {
  @Input() item: any; 
  @Output() editItem = new EventEmitter<any>();

  editedItem: any = {};

  constructor() {}

  ngOnInit(): void {
    // Initialize editedItem with a copy of the original item
    this.editedItem = { ...this.item };
  }

  saveChanges(): void {
    // Emit the edited item to the parent component
    this.editItem.emit(this.editedItem);
  }
}
