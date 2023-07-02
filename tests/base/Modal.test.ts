import { mount, shallowMount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import Modal from "components/base/Modal.vue";
// import Icon from "nuxt-icon";

const Icon = {
  template: "<div></div>",
};

describe("Base/Modal", () => {
  it("renders the header when props.header is provided", () => {
    const header = "Test Header";
    const wrapper = shallowMount(Modal, {
      components: {},
      props: {
        header: header,
      },
      global: {
        components: {
          Icon,
        },
      },
    });

    expect(wrapper.find('[data-test="modal-header"]').text()).toBe(header);
  });
  it("renders the subheader when props.subHeader is provided", () => {
    const subHeader = "Test Subheader";
    const wrapper = shallowMount(Modal, {
      props: {
        subHeader: subHeader,
        header: "Test Header",
      },
      global: {
        components: {
          Icon,
        },
      },
    });

    expect(wrapper.find('[data-test="modal-subheader"]').text()).toBe(
      subHeader
    );
  });
  it('emits a "close" event when the header prepend icon is clicked', () => {
    const wrapper = mount(Modal, {
      props: {
        header: "Test Header",
        headerPrependIcon: "mdi:close",
      },
      global: {
        components: {
          Icon,
        },
      },
    });

    wrapper.find('[data-test="modal-header-prepend-icon"]').trigger("click");

    expect(wrapper.emitted("close")).toBeTruthy();
  });
  it('emits a "close" event when the modal overlay is clicked', async () => {
    const wrapper = mount(Modal, {
      props: {
        header: "Test Header",
      },
      global: {
        components: {
          Icon,
        },
      },
    });

    await wrapper.find(".task-modal-overlay").trigger("click");

    expect(wrapper.emitted("close")).toBeTruthy();
  });
  it("renders the body content correctly", () => {
    const bodyContent = "<p>Test Body Content</p>";
    const wrapper = shallowMount(Modal, {
      slots: {
        default: bodyContent,
      },
      global: {
        components: {
          Icon,
        },
      },
    });

    const receivedHtml = wrapper.find('[data-test="modal-body"]').html();
    const expectedHtml = `<div class="body pt-2" data-test="modal-body">
  ${bodyContent}
</div>`;

    expect(receivedHtml).toBe(expectedHtml);
  });
});
