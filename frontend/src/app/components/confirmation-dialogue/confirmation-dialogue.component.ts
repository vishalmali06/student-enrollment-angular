import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-dialogue',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './confirmation-dialogue.component.html',
  styleUrl: './confirmation-dialogue.component.sass'
})
export class ConfirmationDialogueComponent {
  constructor(public dialogRef: MatDialogRef<ConfirmationDialogueComponent>) {}

  onCancel(): void {
    this.dialogRef.close('cancel');
  }

  onConfirm(): void {
    this.dialogRef.close('confirm');
  }
}
