import { StateCreator } from 'zustand';
import { PersistOptions } from 'zustand/middleware';

export type AdminRegion = number;

export interface AdminRegionStates {
  adminRegion: AdminRegion;
}

export interface AdminRegionActions {
  setAdminRegion: (region: AdminRegion) => void;
}

export type AdminRegionPersist = (
  config: StateCreator<AdminRegionStore>,
  options: PersistOptions<AdminRegionStates>
) => StateCreator<AdminRegionStore>;

export interface AdminRegionStore extends AdminRegionStates, AdminRegionActions {}