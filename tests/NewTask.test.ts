import { mount, shallowMount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import NewTask from "components/NewTask.vue";

describe("NewTask", () => {
  it("renders the component with the correct placeholder", () => {
    const wrapper = shallowMount(NewTask);
    const textarea = wrapper.find("textarea");

    expect(textarea.attributes("placeholder")).toBe("+ Add a card");
  });

  it("updates the title value when user types in the textarea", async () => {
    const wrapper = shallowMount(NewTask);
    const textarea = wrapper.find("textarea");

    await textarea.setValue("New Task Title");
    expect(wrapper.vm.title).toBe("New Task Title");
  });

  it('emits an "add" event when Enter key is pressed with non-empty title', async () => {
    const wrapper = mount(NewTask);
    const textarea = wrapper.find("textarea");

    await textarea.setValue("New Task Title");
    await textarea.trigger("keyup.enter");

    expect(wrapper.emitted("add")).toBeTruthy();
    expect(wrapper.emitted("add")[0][0]).toEqual(
      expect.objectContaining({
        title: "New Task Title",
      })
    );
  });

  it('does not emit an "add" event when Enter key is pressed with empty title', async () => {
    const wrapper = mount(NewTask);
    const textarea = wrapper.find("textarea");

    await textarea.setValue("");
    await textarea.trigger("keyup.enter");

    expect(wrapper.emitted("add")).toBeFalsy();
  });
});
