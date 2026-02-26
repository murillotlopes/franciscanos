import {
  mockFormation,
  mockFraternity,
  mockProfile,
  mockSongs,
} from '../data/mockData.js';
import { apiRequest } from './client.js';

const USE_MOCK_DATA = true;

export async function getSongs() {
  if (USE_MOCK_DATA) return Promise.resolve(mockSongs);
  return apiRequest('/songs');
}

export async function getFormationMaterials() {
  if (USE_MOCK_DATA) return Promise.resolve(mockFormation);
  return apiRequest('/formation');
}

export async function getProfile() {
  if (USE_MOCK_DATA) return Promise.resolve(mockProfile);
  return apiRequest('/profile/me');
}

export async function getFraternity() {
  if (USE_MOCK_DATA) return Promise.resolve(mockFraternity);
  return apiRequest('/fraternity/me');
}
