
export interface WorkflowStep {
  title: string;
  description: string;
  icon: string;
}

export interface WorkflowPanel {
  id: string;
  label: string;
  visualTitle: string;
  caption: string;
  steps: WorkflowStep[];
}

export interface PlatformDepartment {
  name: string;
  outcome: string;
  icon: string;
}
