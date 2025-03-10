import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export function ProfessionalProjectCard({ title, description, techStack }) {
  return (
    <Card className="w-[350px] h-[250px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <div className="flex gap-2">
          {techStack.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <Icon
                key={index}
                className="w-5 h-5 text-muted-foreground"
                strokeWidth={1.5}
              />
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}

export function PersonalProjectCard({ title, image, techStack }) {
  return (
    <Card className="w-[350px] h-[300px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative w-full h-[150px] mb-4">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="flex gap-2">
          {techStack.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <Icon
                key={index}
                className="w-5 h-5 text-muted-foreground"
                strokeWidth={1.5}
              />
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
