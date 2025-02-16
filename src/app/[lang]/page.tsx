import { Check, Code } from "lucide-react";

import { ExtendedBadge } from "@/components/extended-badge";
import { ExtendedButton } from "@/components/extended-button";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  ExtendedCard,
} from "@/components/extended-card";
import { cn } from "@/lib/utils";

function CardDemo() {
  return (
    <ExtendedCard className={cn("w-[380px]")} scale="none">
      <CardHeader className="flex-row gap-4">
        <ExtendedButton
          size="icon"
          asChild
          shine="none"
          float="none"
          scale="none"
          gradient="none"
          variant="soft"
        >
          <div>
            <Code />
          </div>
        </ExtendedButton>
        <div className="flex gap-1.5 flex-col flex-1">
          <CardTitle>Notifications</CardTitle>
          <CardDescription>You have 3 unread messages.</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="grid gap-4">
        <ExtendedBadge>View all notifications</ExtendedBadge>
      </CardContent>
      <CardFooter>
        <ExtendedButton className="w-full">
          <Check /> Mark all as read
        </ExtendedButton>
      </CardFooter>
    </ExtendedCard>
  );
}

const Home = () => {
  return (
    <div>
      <CardDemo />
    </div>
  );
};

export default Home;
