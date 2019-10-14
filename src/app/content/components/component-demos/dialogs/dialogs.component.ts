import { Component, HostBinding } from '@angular/core';

import { slideInUpAnimation } from '../../../../app.animations';

import { TdDialogService } from '../../../../../platform/core';
import { DraggableDemoComponent } from './draggable-demo/draggable-demo.component';

@Component({
  selector: 'dialogs-demo',
  styleUrls: ['./dialogs.component.scss'],
  templateUrl: './dialogs.component.html',
  animations: [slideInUpAnimation],
  preserveWhitespaces: true,
})
export class DialogsDemoComponent {
  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

  dialogServiceMethods: Object[] = [
    {
      description: `Opens an alert dialog with the provided config.`,
      name: 'openAlert',
      type: 'function(IAlertConfig): MatDialogRef<TdAlertDialogComponent>',
    },
    {
      description: `Opens a confirm dialog with the provided config.`,
      name: 'openConfirm',
      type: 'function(IConfirmConfig): MatDialogRef<TdConfirmDialogComponent>',
    },
    {
      description: `Opens a prompt dialog with the provided config.`,
      name: 'openPrompt',
      type: 'function(IPromptConfig): MatDialogRef<TdPromptDialogComponent>',
    },
    {
      description: `Wrapper function over the open() method in MatDialog.
                  Opens a modal dialog containing the given component.`,
      name: 'open',
      type: 'function<T>(component: ComponentType<T>, config: MatDialogConfig): MatDialogRef<T>',
    },
    {
      description: 'Opens a draggable dialog containing the given component',
      name: 'openDraggable',
      type: 'function<T>(IDraggableConfig<T>): MatDialogRef<T>',
    },
    {
      description: `Wrapper function over the closeAll() method in MatDialog.
                  Closes all of the currently-open dialogs.`,
      name: 'closeAll',
      type: 'function()',
    },
  ];

  constructor(private _dialogService: TdDialogService) {}

  openAlert(): void {
    this._dialogService.openAlert({
      title: 'Alert',
      disableClose: true,
      message: 'This is how simple it is to create an alert with this wrapper service.',
    });
  }

  openConfirm(): void {
    this._dialogService.openConfirm({
      title: 'Confirm',
      message: 'This is how simple it is to create a confirm with this wrapper service. Do you agree?',
      cancelButton: 'Disagree',
      acceptButton: 'Agree',
      width: '500px',
    });
  }

  openPrompt(): void {
    this._dialogService.openPrompt({
      title: 'Prompt',
      message: 'This is how simple it is to create a prompt with this wrapper service. Prompt something.',
      value: 'Populated value',
      cancelButton: 'Cancel',
      acceptButton: 'Ok',
    });
  }

  openDraggable(): void {
    this._dialogService.openDraggable({
      component: DraggableDemoComponent,
      config: { height: '300px' },
      // CSS selectors of element(s) inside the component meant to be drag handle(s)
      dragHandleSelectors: ['.drag-handle'],
      // Class that will be added to the component signifying drag-ability
      draggableClass: 'custom-class',
    });
  }
}
