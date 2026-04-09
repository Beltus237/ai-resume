import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  User,
  FileText,
  Briefcase,
  GraduationCap,
  Code,
  Award,
  Languages,
  Heart,
  Plus,
  Sparkles,
} from "lucide-react";

const sectionTypes = [
  {
    id: "header",
    title: "Personal Info",
    description: "Name, contact details, location",
    icon: User,
    category: "Essential",
  },
  {
    id: "summary",
    title: "Professional Summary",
    description: "Brief overview of your experience",
    icon: FileText,
    category: "Essential",
  },
  {
    id: "experience",
    title: "Work Experience",
    description: "Employment history and achievements",
    icon: Briefcase,
    category: "Essential",
  },
  {
    id: "education",
    title: "Education",
    description: "Academic background and qualifications",
    icon: GraduationCap,
    category: "Essential",
  },
  {
    id: "skills",
    title: "Technical Skills",
    description: "Programming languages, tools, frameworks",
    icon: Code,
    category: "Popular",
  },
  {
    id: "projects",
    title: "Projects",
    description: "Notable projects and contributions",
    icon: Award,
    category: "Popular",
  },
  {
    id: "languages",
    title: "Languages",
    description: "Spoken languages and proficiency",
    icon: Languages,
    category: "Additional",
  },
  {
    id: "interests",
    title: "Interests",
    description: "Hobbies and personal interests",
    icon: Heart,
    category: "Additional",
  },
];

const categories = ["Essential", "Popular", "Additional"];

export function SectionsPanel() {
  return (
    <Card className="w-80 h-full border-l-0 rounded-l-none">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-primary" />
          Resume Sections
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Drag sections to your resume or click to add
        </p>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-[calc(100vh-200px)]">
          <div className="p-4 space-y-6">
            {categories.map((category) => (
              <div key={category}>
                <h3 className="text-sm font-semibold text-muted-foreground mb-3 px-2">
                  {category}
                </h3>
                <div className="space-y-2">
                  {sectionTypes
                    .filter((section) => section.category === category)
                    .map((section) => {
                      const IconComponent = section.icon;
                      return (
                        <div
                          key={section.id}
                          className="group p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors cursor-pointer"
                          draggable
                          onDragStart={(e) => {
                            e.dataTransfer.setData("sectionType", section.id);
                          }}
                        >
                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center">
                              <IconComponent className="h-4 w-4 text-primary" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between mb-1">
                                <h4 className="text-sm font-medium">
                                  {section.title}
                                </h4>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                  <Plus className="h-3 w-3" />
                                </Button>
                              </div>
                              <p className="text-xs text-muted-foreground line-clamp-2">
                                {section.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            ))}

            {/* AI Suggestions */}
            <div className="border-t pt-6">
              <h3 className="text-sm font-semibold text-muted-foreground mb-3 px-2 flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                AI Suggestions
              </h3>
              <div className="space-y-2">
                <div className="p-3 rounded-lg bg-ai-gradient text-white">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-md bg-white/20 flex items-center justify-center">
                      <Sparkles className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium mb-1">
                        Add Certifications
                      </h4>
                      <p className="text-xs opacity-90 mb-2">
                        Show your professional certifications to stand out
                      </p>
                      <Button
                        variant="secondary"
                        size="sm"
                        className="h-7 text-xs"
                      >
                        Add Section
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
