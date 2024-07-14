import {
  Adjustments,
  Beaker,
  ChartBar,
  ChevronDown,
  CircleDottedLine,
  CircleFilledSolid,
  EllipsisVertical,
} from "@medusajs/icons";
import { Button, Heading, IconButton, Text } from "@medusajs/ui";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="mx-auto">
      <div>
        <div className="flex items-center gap-4 p-4">
          <h2 className="text-lg font-semibold">My Issues</h2>
        </div>
        <div className="flex justify-between p-4 border-y">
          <div>
            <Button variant="secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
                />
              </svg>
              Filter
            </Button>
          </div>
          <div>
            <Button variant="secondary">
              <Adjustments />
              Display
            </Button>
          </div>
        </div>
        <div>
          <div>
            <div className="flex items-center justify-between w-full p-4 border-b">
              <div className="flex items-center gap-2">
                <CircleFilledSolid />
                <Heading>Tailwind Labs</Heading>
              </div>
              <div>
                <Button variant="transparent">
                  <ChevronDown />
                </Button>
              </div>
            </div>
            <Link
              to=""
              className="flex items-center justify-between p-4 transition-all border-b hover:bg-gray-50"
            >
              <div className="flex items-center gap-2">
                <ChartBar />
                <CircleDottedLine />
                <span>
                  <Text>Issue #1</Text>
                </span>
              </div>
              <div>
                <IconButton>
                  <EllipsisVertical />
                </IconButton>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
