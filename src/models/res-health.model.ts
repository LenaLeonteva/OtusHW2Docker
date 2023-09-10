import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - ResHealth
 * ResHealth
 */
@model({name: 'ResHealth'})
export class ResHealth {
  constructor(data?: Partial<ResHealth>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   * health
   */
  @property({jsonSchema: {
  maxLength: 10,
  type: 'string',
  description: 'health',
}})
  status?: string;

}

export interface ResHealthRelations {
  // describe navigational properties here
}

export type ResHealthWithRelations = ResHealth & ResHealthRelations;


