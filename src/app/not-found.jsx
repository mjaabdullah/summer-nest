import { Button } from "@heroui/react";
import Link from "next/link";

const notFound = () => {
  return (
    <div className="min-h-screen  flex flex-col items-center justify-center px-6">
      <div className="text-8xl font-bold bg-linear-to-br from-orange-600 to-orange-400 text-transparent bg-clip-text mb-4">
        404
      </div>
      <h1 className="text-4xl font-semibold text-zinc-600 mb-2">Not Found</h1>
      <p className="text-zinc-500 text-center max-w-sm mb-8">
        The page you are looking for could not be found.
      </p>

      <Link href="/">
        <Button className={`bg-linear-to-br from-orange-600 to-orange-400`}>
          Go Back Home
        </Button>
      </Link>
    </div>
  );
};

export default notFound;
