export interface JsonData {
    id: number;
    name: string;
    email: string;
    details?: {
      age?: number;
      city?: string;
    };
  }