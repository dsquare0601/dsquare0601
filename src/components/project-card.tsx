import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export function ProfessionalProjectCard({
  title,
  description,
  techStack,
}: {
  title: string;
  description: string;
  techStack: { name: string; icon: any }[];
}) {
  return (
    <Card className="h-[250px] w-[350px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4 text-sm">{description}</p>
        <div className="flex gap-2">
          {techStack.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <Icon
                key={index}
                className="text-muted-foreground h-5 w-5"
                strokeWidth={1.5}
              />
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}

export function PersonalProjectCard({
  title,
  image,
  techStack,
}: {
  title: string;
  image: any;
  techStack: { name: string; icon: any }[];
}) {
  return (
    <Card className="h-[300px] w-[350px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative mb-4 h-[150px] w-full">
          <Image
            src={image}
            alt={title}
            fill
            className="rounded-md object-cover"
          />
        </div>
        <div className="flex gap-2">
          {techStack.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <Icon
                key={index}
                className="text-muted-foreground h-5 w-5"
                strokeWidth={1.5}
              />
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
