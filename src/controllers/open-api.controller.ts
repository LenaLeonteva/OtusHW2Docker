import {api, operation} from '@loopback/rest';
import {ResHealth} from '../models/res-health.model';

/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by <no-tag>.
 *
 */
@api({
  components: {
    schemas: {
      ResHealth: {
        type: 'object',
        properties: {
          status: {
            maxLength: 10,
            type: 'string',
            description: 'health',
          },
        },
      },
      ResErr: {
        type: 'object',
        properties: {
          error: {
            maxLength: 200,
            type: 'string',
            description: 'Сообщение об ошибке',
          },
        },
      },
    },
  },
  paths: {},
})
export class OpenApiController {
  constructor() { }
  /**
   *
   *
   * @returns Успешная проверка
   */
  @operation('get', '/health', {
    summary: 'Проверка health',
    operationId: 'health',
    responses: {
      '200': {
        description: 'Успешная проверка',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/ResHealth',
            },
          },
        },
      },
      '400': {
        description: 'Неверный формат запроса',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/ResErr',
            },
          },
        },
      },
      '408': {
        description: 'Время выполнения запроса истекло',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/ResErr',
            },
          },
        },
      },
      '415': {
        description: 'Неподдерживаемый тип данных',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/ResErr',
            },
          },
        },
      },
      '422': {
        description: 'Данные запроса не прошли ФЛК',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/ResErr',
            },
          },
        },
      },
      '500': {
        description: 'Внутренняя ошибка',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/ResErr',
            },
          },
        },
      },
      '503': {
        description: 'Сервис недоступен',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/ResErr',
            },
          },
        },
      },
    },
  })
  async health(): Promise<ResHealth> {
    return {
      status: 'OK'
    }
  }
}

