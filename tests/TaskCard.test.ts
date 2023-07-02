import { mount, shallowMount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import { Task } from "../types";
import TaskCard from "components/TaskCard.vue";

const Icon = {
  template: "<div></div>",
};

describe("TaskCard", () => {
  it("renders the task title", () => {
    const task: Task = {
      id: "task-1",
      title: "Test Task",
      createdAt: new Date(),
    };

    const wrapper = mount(TaskCard, {
      props: {
        task: task,
      },
      global: {
        components: {
          Icon,
        },
      },
    });

    expect(wrapper.find("[data-test='task-title']").text()).toBe("Test Task");
  });

  it('emits "select" event with the task object when clicked', () => {
    const task: Task = {
      id: "task-1",
      title: "Test Task",
      createdAt: new Date(),
    };

    const wrapper = mount(TaskCard, {
      props: {
        task: task,
      },
      global: {
        components: {
          Icon,
        },
      },
    });

    wrapper.trigger("click");

    const selectEvent = wrapper.emitted("select") as any;

    expect(selectEvent).toBeTruthy();
    expect(selectEvent[0][0]).toStrictEqual(task);
  });

  it('emits "delete" event with the task ID when deleteTask function is called', () => {
    const task: Task = {
      id: "task-1",
      title: "Test Task",
      createdAt: new Date(),
    };

    const wrapper = mount(TaskCard, {
      props: {
        task: task,
      },
      global: {
        components: {
          Icon,
        },
      },
    });

    const componentInstance = wrapper.vm as any;

    componentInstance.deleteTask();

    const deleteEvent = wrapper.emitted("delete") as any;

    expect(deleteEvent).toBeTruthy();
    expect(deleteEvent[0][0]).toBe(task.id);
  });
});
