import { LayoutDashboard, Users, BookOpen, icons } from "lucide-react";

export const routes = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
    roles: ["admin"],
  },
  {
    name: "Kitaplar",
    path: "/books",
    icon: BookOpen,
    roles: ["admin", "librarian"],
  },
  {
    name: "Kullanıcılar",
    path: "/users",
    icon: Users,
    roles: ["admin"],
  },
];
