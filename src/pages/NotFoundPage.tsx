import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-[120px] font-bold text-[#B9FF66] leading-none">
            404
          </h1>
          <h2 className="text-[#191A23] mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            Oops! The page you're looking for doesn't exist. It might have been
            moved, deleted, or the URL was mistyped.
          </p>
        </div>

        <Link to="/">
          <Button className="btn-primary inline-flex items-center gap-2">
            <ArrowLeft size={20} />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
