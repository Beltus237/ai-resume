import { MainLayout } from "@/components/layout/main-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Eye, Star, Zap } from "lucide-react";

const mockTemplates = [
  {
    id: 1,
    name: "Modern Professional",
    category: "Professional",
    rating: 4.8,
    isPro: false,
    preview: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Creative Designer",
    category: "Creative",
    rating: 4.9,
    isPro: true,
    preview: "/placeholder.svg",
  },
  {
    id: 3,
    name: "Tech Minimalist",
    category: "Tech",
    rating: 4.7,
    isPro: false,
    preview: "/placeholder.svg",
  },
  {
    id: 4,
    name: "Executive Elite",
    category: "Executive",
    rating: 4.9,
    isPro: true,
    preview: "/placeholder.svg",
  },
  {
    id: 5,
    name: "Academic Scholar",
    category: "Academic",
    rating: 4.6,
    isPro: false,
    preview: "/placeholder.svg",
  },
  {
    id: 6,
    name: "Startup Founder",
    category: "Startup",
    rating: 4.8,
    isPro: true,
    preview: "/placeholder.svg",
  },
];

const categories = [
  "All",
  "Professional",
  "Creative",
  "Tech",
  "Executive",
  "Academic",
  "Startup",
];

export default function TemplatesPage() {
  return (
    <MainLayout>
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Resume Templates</h1>
            <p className="text-muted-foreground">
              Choose from our collection of professional resume templates
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search templates..." className="pl-10" />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockTemplates.map((template) => (
              <Card key={template.id} className="group overflow-hidden">
                <div className="aspect-[3/4] bg-muted relative overflow-hidden">
                  <img
                    src={template.preview}
                    alt={template.name}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button variant="secondary" className="gap-2">
                      <Eye className="h-4 w-4" />
                      Preview
                    </Button>
                  </div>
                  {template.isPro && (
                    <Badge className="absolute top-3 right-3 bg-ai-gradient text-white">
                      <Zap className="h-3 w-3 mr-1" />
                      Pro
                    </Badge>
                  )}
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{template.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {template.category}
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">
                        {template.rating}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">Use Template</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
