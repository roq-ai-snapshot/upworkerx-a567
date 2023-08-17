import { ApplicationInterface } from 'interfaces/application';
import { BookingInterface } from 'interfaces/booking';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface JobInterface {
  id?: string;
  title: string;
  description: string;
  company_id: string;
  created_at?: any;
  updated_at?: any;
  application?: ApplicationInterface[];
  booking?: BookingInterface[];
  company?: CompanyInterface;
  _count?: {
    application?: number;
    booking?: number;
  };
}

export interface JobGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  company_id?: string;
}
