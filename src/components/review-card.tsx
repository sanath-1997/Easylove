import { Star } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

type ReviewCardProps = {
  name: string;
  review: string;
  avatarSeed: string;
};

export function ReviewCard({ name, review, avatarSeed }: ReviewCardProps) {
  return (
    <Card className="bg-card/80 backdrop-blur-sm text-left shadow-lg transition-transform duration-300 hover:-translate-y-2">
      <CardHeader className="flex-row items-center gap-4 pb-4">
        <Avatar className="w-12 h-12 border-2 border-primary/50">
          <AvatarImage src={`https://picsum.photos/seed/${avatarSeed}/100/100`} alt={name} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="text-lg font-bold font-headline">{name}</h3>
          <div className="flex items-center gap-0.5 text-primary">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-current" />
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-card-foreground/80">"{review}"</p>
      </CardContent>
    </Card>
  );
}
