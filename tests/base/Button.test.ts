import { shallowMount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import Button from "components/base/Button.vue";

describe("Base/Button.vue", () => {
  it("Button renders default slot content", () => {
    const label = "Submit";
    const wrapper = shallowMount(Button, {
      props: {
        type: "primary",
      },
      slots: {
        default: label,
      },
    });
    expect(wrapper.text()).toContain(label);
  });

  it("Button renders correctly with default props", () => {
    const wrapper = shallowMount(Button, {
      props: {
        type: "primary",
      },
    });

    expect(wrapper.classes()).toContain("rounded");
    expect(wrapper.classes()).toContain("text-white");
    expect(wrapper.classes()).toContain("transition-colors");
    expect(wrapper.classes()).toContain("duration-200");
    expect(wrapper.classes()).toContain("bg-teal-600");
    expect(wrapper.classes()).toContain("hover:bg-teal-700");
    expect(wrapper.classes()).toContain("px-4");
    expect(wrapper.classes()).toContain("py-2");
  });

  it("Button changes background color based on type prop", () => {
    const wrapper = shallowMount(Button, {
      props: {
        type: "danger",
      },
    });

    expect(wrapper.classes()).toContain("bg-red-600");
    expect(wrapper.classes()).toContain("hover:bg-red-700");
  });

  it("Button changes size based on size prop", () => {
    const wrapper = shallowMount(Button, {
      props: {
        size: "sm",
        type: "primary",
      },
    });

    expect(wrapper.classes()).toContain("px-3");
    expect(wrapper.classes()).toContain("py-1");
  });
});
