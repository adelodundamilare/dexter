import {
  Home,
  LucideIcon,
  LucideProps,
  MessageCircleQuestion,
  ShoppingCart,
  Truck,
  UsersRound,
} from "lucide-react";

export type Icon = LucideIcon;

export const Icons = {
  home: Home,
  serviceRequest: MessageCircleQuestion,
  vendors: MessageCircleQuestion,
  users: UsersRound,
  services: Truck,
  payments: ShoppingCart,
};
