import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  GripVertical,
  Plus,
  Eye,
  Download,
  Share2,
  Edit3,
  Trash2,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ResumeSection {
  id: string;
  type: string;
  title: string;
  content: string;
  isVisible: boolean;
}

const initialSections: ResumeSection[] = [
  {
    id: "1",
    type: "header",
    title: "Personal Information",
    content: "John Doe • Software Engineer • john.doe@email.com",
    isVisible: true,
  },
  {
    id: "2",
    type: "summary",
    title: "Professional Summary",
    content:
      "Experienced software engineer with 5+ years of expertise in React, TypeScript, and cloud technologies...",
    isVisible: true,
  },
  {
    id: "3",
    type: "experience",
    title: "Work Experience",
    content: "Senior Software Engineer at TechCorp (2021-Present)",
    isVisible: true,
  },
  {
    id: "4",
    type: "education",
    title: "Education",
    content: "Bachelor of Science in Computer Science - University (2019)",
    isVisible: true,
  },
  {
    id: "5",
    type: "skills",
    title: "Technical Skills",
    content: "React, TypeScript, Node.js, AWS, Docker, PostgreSQL",
    isVisible: true,
  },
];

export function ResumeCanvas() {
  const [sections, setSections] = useState(initialSections);

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    const items = Array.from(sections);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setSections(items);
  };

  return (
    <div className="flex-1 flex">
      {/* Canvas Area */}
      <div className="flex-1 p-6">
        <div className="max-w-4xl mx-auto">
          {/* Canvas Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold">Resume Builder</h1>
              <p className="text-muted-foreground">
                Drag and drop sections to customize your resume
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="gap-2">
                <Eye className="h-4 w-4" />
                Preview
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <Download className="h-4 w-4" />
                Export PDF
              </Button>
              <Button size="sm" className="gap-2 bg-ai-gradient text-white">
                <Share2 className="h-4 w-4" />
                Share
              </Button>
            </div>
          </div>

          {/* Resume Canvas */}
          <Card className="min-h-[800px] bg-canvas-background border-canvas-border shadow-lg">
            <CardContent className="p-8 space-y-6">
              <DragDropContext onDragEnd={handleDragEnd}>
                <Droppable droppableId="resume-sections">
                  {(provided, snapshot) => (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      className={cn(
                        "space-y-4 min-h-[400px] transition-colors",
                        snapshot.isDraggingOver && "bg-muted/20 rounded-lg",
                      )}
                    >
                      {sections.map((section, index) => (
                        <Draggable
                          key={section.id}
                          draggableId={section.id}
                          index={index}
                        >
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              className={cn(
                                "group relative bg-white dark:bg-card rounded-lg border transition-all",
                                snapshot.isDragging && "shadow-lg rotate-2",
                              )}
                            >
                              <div className="flex items-start gap-3 p-4">
                                <div
                                  {...provided.dragHandleProps}
                                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                                >
                                  <GripVertical className="h-4 w-4" />
                                  <Badge
                                    variant="outline"
                                    className="text-xs capitalize"
                                  >
                                    {section.type}
                                  </Badge>
                                </div>

                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between mb-2">
                                    <h3 className="font-semibold text-sm">
                                      {section.title}
                                    </h3>
                                    <div className="opacity-0 group-hover:opacity-100 flex gap-1 transition-opacity">
                                      <Button
                                        variant="ghost"
                                        size="sm"
                                        className="h-7 w-7 p-0"
                                      >
                                        <Edit3 className="h-3 w-3" />
                                      </Button>
                                      <Button
                                        variant="ghost"
                                        size="sm"
                                        className="h-7 w-7 p-0 text-destructive hover:text-destructive"
                                      >
                                        <Trash2 className="h-3 w-3" />
                                      </Button>
                                    </div>
                                  </div>
                                  <p className="text-sm text-muted-foreground line-clamp-2">
                                    {section.content}
                                  </p>
                                </div>
                              </div>
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}

                      {/* Add Section Button */}
                      <div className="flex items-center justify-center py-8 border-2 border-dashed border-muted-foreground/20 rounded-lg hover:border-primary/50 hover:bg-muted/20 transition-colors cursor-pointer group">
                        <div className="flex items-center gap-2 text-muted-foreground group-hover:text-primary transition-colors">
                          <Plus className="h-5 w-5" />
                          <span className="text-sm font-medium">
                            Add new section
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </Droppable>
              </DragDropContext>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
