import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { Heart } from "lucide-react";
export const CharacterGridCard = () => {
  return (
    <Card className="group overflow-hidden p-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl bg-linear-to-br from-white to-gray-50">
      <div className="relative h-64 overflow-hidden">
        <img
          src="/placeholder.svg?height=300&width=300"
          alt="Superman"
          className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
        />
      </div>
      <CardHeader className="flex flex-row items-center justify-between pb-3">
        <h3 className="text-lg font-bold leading-tight">Rick</h3>

        <Button
          size="sm"
          variant="ghost"
          className="border border-gray-200 p-2 hover:bg-gray-100"
        >
          <Heart className="h-4 w-4 fill-red-500 text-red-500" />
        </Button>
      </CardHeader>
    </Card>
  );
};
