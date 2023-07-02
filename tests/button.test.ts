// test /components/base/Button.vue
import vue from "@vitejs/plugin-vue";
import { shallowMount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import Button from "components/base/Button.vue";

describe("Button.vue", () => {
  it("renders default slot when passed", () => {
    const label = "Submit";
    const wrapper = shallowMount(Button, {
      props: {
        type: "primary",
      },
      slots: {
        default: label,
      },
    });
    expect(wrapper.text()).toMatch(label);
  });
});
