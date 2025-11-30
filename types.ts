import React from 'react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
  result: string;
}

export interface GeneratedStrategy {
  niche: string;
  pillars: string[];
  hooks: string[];
  schedule: string;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}