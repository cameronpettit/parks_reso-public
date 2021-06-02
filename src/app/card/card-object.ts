import { Component } from '@angular/core';

export interface ICardObjectParams {

  /**
   * id of the object
   */
   _id?: number;

  /**
   * name of the object
   */
   name?: string;

  /**
   * status of a object (open/closed)
   */
   status?: boolean;

  /**
   * issued passes of a object
   */
   passes?: number[];

  /**
   * type of object
   */
   type?: string;

  /**
   * time object is available (AM/PM/All Day)
   */
   time?: string;

  /**
   * date object is available
   */
   date?: Date;

  /**
   * capacity of object
   */
   capacity?: number;

  /**
   * parent of object
   */
   _schemaName?: string;

  /**
   * image of a object
   */
   image?: string;
}
/**
 * Main class that should contain all information needed to render a card.
 */
export class CardObject {
  // tslint:disable-next-line:variable-name
  public _id?: number;
  public name?: string;
  public status?: boolean;
  public time?: string;
  public type?: string;
  public date?: Date;
  public capacity?: number;
  public _schemaName?: string;
  public passes?: number[];
  public image?: string;
  constructor(params?: ICardObjectParams) {
    this._id = (params && params._id) || null;
    this.name = (params && params.name) || '';
    this.status = (params && params.status) || true;
    this.time = (params && params.time) || '';
    this.type = (params && params.time) || '';
    this.date = (params && params.date) || null;
    this.capacity = (params && params.capacity) || null;
    this._schemaName = (params && params._schemaName) || '';
    this.passes = (params && params.passes) || null;
    this.image = (params && params.image) || '';
  }
}
