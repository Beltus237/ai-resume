import { MainLayout } from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <MainLayout>
      <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] p-6">
        <Card className="w-full max-w-md">
          <CardContent className="flex flex-col items-center text-center p-8">
            <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mb-6">
              <span className="text-4xl font-bold text-muted-foreground">
                404
              </span>
            </div>
            <h1 className="text-2xl font-bold mb-2">Page Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <div className="flex gap-2 w-full">
              <Button variant="outline" asChild className="flex-1">
                <Link to="/" className="gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Go Back
                </Link>
              </Button>
              <Button asChild className="flex-1">
                <Link to="/" className="gap-2">
                  <Home className="h-4 w-4" />
                  Home
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}
