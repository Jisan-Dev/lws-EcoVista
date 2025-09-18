import Link from "next/link";
import Card from "./Card";
import Error404 from "./icons/error-404";

const NoLocationInfo = ({ location }) => {
  return (
    <Card>
      <div className="flex flex-col items-center justify-center h-full gap-3">
        <Error404 />
        <p className="max-w-60 text-center ">
          No details found for this location: &quot;{location}&quot;
        </p>
        <Link
          href="/"
          className="mt-3 group flex items-center justify-between gap-4 rounded-lg border border-current px-4 py-2 text-white transition-colors text-sm hover:bg-indigo-600 focus:ring-3 focus:outline-hidden">
          {/* arrow icon */}
          <span className="shrink-0 rounded-full border border-indigo-700 bg-white p-2 text-indigo-600">
            <svg
              className="size-4 shadow-sm rotate-180 transition-transform group-hover:rotate-0"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>

          <span className="font-medium transition-colors group-hover:text-white">
            {" "}
            Return To Home
          </span>
        </Link>
      </div>
    </Card>
  );
};

export default NoLocationInfo;
