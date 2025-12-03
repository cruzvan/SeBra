
import { Service } from '../types';
import { servicesContent } from '../content';

// This service is currently deprecated as the application runs on static content.
// It simply returns the local data from content.ts.

export const getCreativeServices = async (): Promise<Service[]> => {
  return Promise.resolve(servicesContent);
};
