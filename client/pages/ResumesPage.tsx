import { MainLayout } from "@/components/layout/main-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Plus, MoreVertical, Calendar, Eye } from "lucide-react";

const mockResumes = [
  {
    id: 1,
    title: "Software Engineer Resume",
    lastModified: "2 hours ago",
    status: "Published",
    template: "Modern",
  },
  {
    id: 2,
    title: "Frontend Developer CV",
    lastModified: "1 day ago",
    status: "Draft",
    template: "Creative",
  },
  {
    id: 3,
    title: "Full Stack Developer",
    lastModified: "3 days ago",
    status: "Published",
    template: "Professional",
  },
];

export default function ResumesPage() {
  return (
    <MainLayout>
      <div className="p-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold">My Resumes</h1>
              <p className="text-muted-foreground">
                Manage and organize your resume collection
              </p>
            </div>
            <Button className="gap-2 bg-ai-gradient text-white">
              <Plus className="h-4 w-4" />
              Create New Resume
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockResumes.map((resume) => (
              <Card
                key={resume.id}
                className="group hover:shadow-lg transition-all cursor-pointer"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <FileText className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-base">
                          {resume.title}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">
                          {resume.template} template
                        </p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {resume.lastModified}
                    </div>
                    <Badge
                      variant={
                        resume.status === "Published" ? "default" : "secondary"
                      }
                    >
                      {resume.status}
                    </Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 gap-2"
                    >
                      <Eye className="h-4 w-4" />
                      Preview
                    </Button>
                    <Button size="sm" className="flex-1">
                      Edit
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
