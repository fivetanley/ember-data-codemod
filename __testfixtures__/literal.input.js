import attr from 'ember-data/attr';
import Model from 'ember-data/model';
import { hasMany as many, belongsTo } from 'ember-data/relationships';
import { normalizeModelName as normalize } from 'ember-data/store';
import JSONAPIAdapter from 'ember-data/adapters/json-api';
import { InvalidError, ServerError, TimeoutError, NotFoundError  } from 'ember-data/adapter/error';
import Transform from '@ember-data/serializer/transform';
