import { Icons } from "@/components/icons";

export interface IData {
  name: string;
  profession?: string;
  rating: number;
}

export interface NavItem {
  title: string;
  href: string;
  icon: keyof typeof Icons;
  color?: string;
  isChildren?: boolean;
  children?: NavItem[];
}

export interface IMeta {
  total: number;
  per_page: number;
  current_page: number;
  last_page: number;
  from: number;
  to: number;
}

interface ContactAddress {
  street: string;
  city: string;
  state: string;
  country: string;
  full_address: string;
}

interface Service {
  id: number;
  name: string;
  is_bookable: boolean;
  description: string;
  cover_image: string;
  is_active: boolean;
  deleted_at: string | null;
}

interface Shop {
  id: number;
  name: string;
  biography: string;
  cover_image: string;
  opening_time: string;
  closing_time: string;
  contact_email: string;
  contact_phone: string;
  contact_address: ContactAddress;
  vendor_id: number;
  discount: string | null;
  shipping_cost: string;
  longitude: string;
  latitude: string;
  service_id: number;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  service: Service;
}

export interface IUser {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  available_balance: string;
  image: string;
  qualification: string;
  nin: string | null;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  book_balance: string;
  business: any;
  shop: Shop | null;
}
