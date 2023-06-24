export type ID = string;

export interface Column {
  id: ID;
  title: string;
  tasks: Task[];
}

export interface Task {
  id: ID;
  title: string;
  createdAt: Date;
  description?: string;
  checkList?: CheckList;
}

export interface CheckListItem {
  id: ID;
  text: string;
  checked: boolean;
}

export interface CheckList {
  id: ID;
  title: string;
  items: CheckListItem[];
}
