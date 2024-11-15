import { Home } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function NotFoundCard() {
  return (
    <Card className="mx-auto my-10 w-[380px] text-center">
      <CardHeader>
        <CardTitle className="text-3xl font-bold">404</CardTitle>
        <CardDescription className="text-xl">Page Not Found</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="space-y-2">
          <p className="text-lg">
            Oops! The page you&apos;re looking for doesn&apos;t exist.
          </p>
          <p className="text-muted-foreground text-sm">
            It might have been moved or deleted, or perhaps you mistyped the
            URL.
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button className="w-full max-w-[200px]">
          <Home className="mr-2 h-4 w-4" /> Go to Homepage
        </Button>
      </CardFooter>
    </Card>
  );
}
