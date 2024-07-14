import React from "react";
import { pocketbase } from "../configs/pocketbase";
import { Button, Label } from "@medusajs/ui";
import { Link, useLocation } from "react-router-dom";
import {
  CircleSolid,
  EllipseBlueSolid,
  PencilSquareSolid,
  PlusMini,
  SquaresPlus,
  Tag,
} from "@medusajs/icons";

const NavLink = ({ to, label, icon }) => {
  const location = useLocation();
  return (
    <Link
      to={to}
      className={`${
        location.pathname === to
          ? "border-gray-100 bg-white"
          : "border-transparent"
      } flex items-center gap-2 px-2 text-gray-600 border py-2 font-sans text-sm font-semibold rounded-lg hover:bg-white`}
    >
      {icon}
      {label}
    </Link>
  );
};

const links = [
  {
    id: 1,
    to: "/app",
    label: "Home",
    icon: <SquaresPlus />,
  },
  {
    id: 2,
    to: "/app/issues",
    label: "Issues",
    icon: <CircleSolid />,
  },
  {
    id: 3,
    to: "/app/labels",
    label: "Labels",
    icon: <Tag />,
  },
];

const AppLayout = ({ children }) => {
  const isLoggedIn = pocketbase.authStore.isValid;
  if (!isLoggedIn) {
    return children;
  }
  return (
    <div>
      <aside className="fixed w-64 h-screen space-y-4 border-r bg-gray-50">
        <div className="p-4">
          <h2 className="flex items-center font-mono text-4xl font-semibold">
            Sprinter.
          </h2>
        </div>
        <div className="p-4">
          <Button className="w-full">
            <PencilSquareSolid /> Create A Project
          </Button>
          <div className="py-4 space-y-2">
            <Label size="small" weight="plus">
              Navigation
            </Label>
            {links.map((link) => (
              <NavLink
                key={link.id}
                to={link.to}
                label={link.label}
                icon={link.icon}
              />
            ))}
          </div>
          <div className="py-4 space-y-2">
            <Label size="small" weight="plus">
              Projects
            </Label>
            <div className="space-y-2">
              <Link
                to="/app/project/1"
                className="flex items-center gap-2 px-2 py-2 font-sans text-sm font-semibold text-gray-600 rounded-lg hover:bg-white"
              >
                <EllipseBlueSolid /> Tailwind Labs
              </Link>
              <Link
                to="/app/project/2"
                className="flex items-center gap-2 px-2 py-2 font-sans text-sm font-semibold text-gray-600 rounded-lg hover:bg-white"
              >
                <EllipseBlueSolid /> Project 2
              </Link>
            </div>
          </div>
        </div>
      </aside>
      <main className="pl-64">
        <div className="flex items-center justify-between p-4 bg-gray-100 border-b">
          <div>
            <h2 className="text-2xl font-semibold capitalize">Dashboard</h2>
          </div>
          <div>
            <Button>
              <PlusMini /> Create An Issue
            </Button>
          </div>
        </div>
        {children}
      </main>
    </div>
  );
};

export default AppLayout;
