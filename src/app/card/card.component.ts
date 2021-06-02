import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CardObject } from './card-object';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

/**
 * Main class that should contain all information needed to render a card.
 */
export class CardComponent {
  @Input() data: CardObject;
  @Input() date: Date;
  @Input() path: string;
  @Output() messageOut: EventEmitter<any> = new EventEmitter<any>();

  public lowCapacity = 10;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  checkEnabled(): boolean {
    if (this.checkCapacity() && this.data.status) {
      return true;
    } else {
      return false;
    }
  }

  navigate(id): void {
    if (!this.data.status || this.checkCapacity() <= 0) {
      return null;
    } else {
      switch (this.path) {
        case 'parks':
          this.router.navigate([this.path, id]);
          break;
        case 'passes':
          this.router.navigate([this.path, id], { relativeTo: this.route });
          break;
      }
    }
  }

  onMessageOut(msg): void {
    this.messageOut.emit(msg);
  }

  getPassString(): string {
    if (this.data.type) {
      return this.data.type.replace(/^\w/, (c) => c.toUpperCase());
    }
  }

  checkCapacity(): number {
    if (this.data.capacity && this.data.passes) {
      return this.data.capacity - this.data.passes[0];
    } else {
      return 0;
    }

  }
}
