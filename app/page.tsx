import Link from "next/link";
import MaxWithWrapper from "../components/MaxWidthWrapper";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <MaxWithWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center">
      <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
        <p className="text-sm font-semibold text-gray-700">
          PDF reader is public
        </p>
      </div>
      <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
        Chat with your <span className="text-blue-600">Documents</span> in a
        second
      </h1>
      <p className="mt-5 max-w-prose text-zinc-700 sm:text-lg">
        PDF AI allows you to have conversatoin with any PDF document. Simply
        upload your file and start asking question right away.
      </p>
      <Link
        className={buttonVariants({ size: "lg", className: "mt-5" })}
        href="/dashboard"
        target="_blank"
      >
        Get started <ArrowRightIcon className="ml-2 h-5 w-5 font-bold" />
      </Link>
    </MaxWithWrapper>
  );
}
