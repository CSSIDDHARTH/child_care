export interface Service {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
}

export interface Benefit {
  id: string;
  title: string;
}

export interface ContactInfo {
  phone: string;
  parentOrg: string;
  address: {
    complex: string;
    road: string;
    landmark: string;
    area1: string;
    area2: string;
    city: string;
    stateZip: string;
  };
}
