"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface ProjectSidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function ProjectSidebar({ isOpen, onClose }: ProjectSidebarProps) {
  useEffect(() => {
    if (!isOpen) {
      const toggleButton = document.querySelector<HTMLElement>("[data-sidebar-toggle]")
      toggleButton?.focus()
    }
  }, [isOpen])

  return (
    <>
      <div
        className={cn(
          "fixed inset-0 z-20 bg-black/20 backdrop-blur-sm transition-opacity duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
        aria-hidden={!isOpen}
      />

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-30 w-[min(320px,90vw)] transform border-r border-border-default bg-bg-surface shadow-2xl shadow-black/40 transition-all duration-300",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
        aria-hidden={!isOpen}
        inert={!isOpen}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-border-default px-4 py-4">
            <div>
              <p className="text-sm font-semibold text-text-primary">Projects</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="text-text-secondary"
              onClick={onClose}
              aria-label="Close projects sidebar"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex-1 overflow-hidden p-4">
            <Tabs defaultValue="my-projects" className="h-full">
              <TabsList>
                <TabsTrigger value="my-projects">My Projects</TabsTrigger>
                <TabsTrigger value="shared">Shared</TabsTrigger>
              </TabsList>

              <div className="mt-4 h-full overflow-auto rounded-3xl border border-border-default bg-bg-subtle p-4">
                <TabsContent value="my-projects">
                  <div className="flex h-full min-h-[240px] flex-col items-center justify-center gap-3 rounded-3xl border border-dashed border-border-default bg-bg-surface/80 p-6 text-center text-sm text-text-muted">
                    <p className="text-sm font-medium text-text-primary">No projects yet</p>
                    <p className="max-w-xs">Create a new project to see it listed here, or open one from your workspace later.</p>
                  </div>
                </TabsContent>
                <TabsContent value="shared">
                  <div className="flex h-full min-h-[240px] flex-col items-center justify-center gap-3 rounded-3xl border border-dashed border-border-default bg-bg-surface/80 p-6 text-center text-sm text-text-muted">
                    <p className="text-sm font-medium text-text-primary">No shared projects</p>
                    <p className="max-w-xs">Shared project access will appear here once collaborators invite you.</p>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>

          <div className="border-t border-border-default p-4">
            <Button className="w-full justify-center" size="default">
              <Plus className="h-4 w-4" />
              New Project
            </Button>
          </div>
        </div>
      </aside>
    </>
  )
}
