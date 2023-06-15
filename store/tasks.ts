import type { Column } from "@/types";
import { nanoid } from "nanoid";
export const useTasksStore = defineStore("tasks", () => {
  const columns = ref<Column[]>([
    {
      id: nanoid(),
      title: "To do",
      tasks: [
        {
          id: nanoid(),
          title: "Task 1",
          createdAt: new Date(),
        },
        {
          id: nanoid(),
          title: "Task 2",
          createdAt: new Date(),
        },
        {
          id: nanoid(),
          title: "Task 3",
          createdAt: new Date(),
        },
      ],
    },
    {
      id: nanoid(),
      title: "In progress",
      tasks: [
        {
          id: nanoid(),
          title: "Task 4",
          createdAt: new Date(),
        },
        {
          id: nanoid(),
          title: "Task 5",
          createdAt: new Date(),
        },
      ],
    },
    {
      id: nanoid(),
      title: "Done",
      tasks: [
        {
          id: nanoid(),
          title: "Task 6",
          createdAt: new Date(),
        },
      ],
    },
    {
      id: nanoid(),
      title: "Done",
      tasks: [
        {
          id: nanoid(),
          title: "Task 6",
          createdAt: new Date(),
        },
      ],
    },
  ]);

  const getColumnByTaskId = (taskId: string) => {
    return columns.value.find((column) =>
      column.tasks.some((task) => task.id === taskId)
    );
  };

  return {
    columns,
    getColumnByTaskId,
  };
});
