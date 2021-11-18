import {
  IQueryFeaturesOptions,
  queryFeatures as qf,
} from '@esri/arcgis-rest-feature-layer';

export const queryFeatures = async (options: IQueryFeaturesOptions) => {
  require('cross-fetch/polyfill');
  require('isomorphic-form-data');
  const response = await qf(options);
  return response;
};