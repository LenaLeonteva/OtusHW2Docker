import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - ResErr
 * ResErr
 */
@model({name: 'ResErr'})
export class ResErr {
  constructor(data?: Partial<ResErr>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   * Сообщение об ошибке
   */
  @property({jsonSchema: {
  maxLength: 200,
  type: 'string',
  description: 'Сообщение об ошибке',
}})
  error?: string;

}

export interface ResErrRelations {
  // describe navigational properties here
}

export type ResErrWithRelations = ResErr & ResErrRelations;


