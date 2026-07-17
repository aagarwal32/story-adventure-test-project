export type StoryOption = {
    text: string;
    node_id: number | null;
};

export type StoryNode = {
  id: number | null;
  content: string;
  is_ending: boolean;
  is_winning_ending: boolean;
  options: StoryOption[];
};

export type Story = {
  id: number;
  title: string;
  created_at: string;
  root_node: StoryNode;
  all_nodes: Record<number, StoryNode>;
};