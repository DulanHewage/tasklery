import type { Column, Task } from "@/types";
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

  const updateTask = (taskId: string, newTask: Partial<Task>) => {
    const column = getColumnByTaskId(taskId);
    if (!column) return;

    const task = column.tasks.find((task) => task.id === taskId);
    if (!task) return;

    Object.assign(task, newTask);
  };

  return {
    columns,
    getColumnByTaskId,
    updateTask,
  };
});
