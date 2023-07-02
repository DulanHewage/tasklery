import { mount, shallowMount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import ProgressBar from "components/base/ProgressBar.vue";

describe("ProgressBar", () => {
  it("renders the progress percentage", () => {
    const wrapper = shallowMount(ProgressBar, {
      props: {
        progress: 50,
      },
    });

    expect(wrapper.find('[data-test="progress-value"]').text()).toContain(
      "50%"
    );
  });

  it("sets the width of the progress bar based on the progress prop", () => {
    const wrapper = shallowMount(ProgressBar, {
      props: {
        progress: 75,
      },
    });

    const progressBar = wrapper.find('[data-test="progress-bar"]');

    expect(progressBar.attributes("style")).toContain("width: 75%");
  });

  it("renders the default progress value when no progress prop is provided", () => {
    const wrapper = shallowMount(ProgressBar);

    expect(wrapper.find('[data-test="progress-value"]').text()).toContain("0%");
  });

  it("validates the progress prop to be within the range of 0 to 100", () => {
    // Test case for a progress value less than 0
    const lessThanZeroWrapper = shallowMount(ProgressBar, {
      props: {
        progress: -2,
      },
    });

    // Expect the progress value to be set to 0%
    expect(
      lessThanZeroWrapper.find('[data-test="progress-value"]').text()
    ).toContain("0%");

    // Expect the progress bar width to be set to 0%
    expect(
      lessThanZeroWrapper.find('[data-test="progress-bar"]').attributes("style")
    ).toContain("width: 0%");

    // Test case for a progress value greater than 100
    const moreThanHundredWrapper = shallowMount(ProgressBar, {
      props: {
        progress: 120,
      },
    });

    // Expect the progress value to be set to 100%
    expect(
      moreThanHundredWrapper.find('[data-test="progress-value"]').text()
    ).toContain("100%");

    // Expect the progress bar width to be set to 100%
    expect(
      moreThanHundredWrapper
        .find('[data-test="progress-bar"]')
        .attributes("style")
    ).toContain("width: 100%");
  });
});
