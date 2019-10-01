import { mount } from "@vue/test-utils";

import AppWelcomeMsg from "@/components/for-ui/AppWelcomeMsg";

describe("AppWelcomeMsg", () => {
  const wrapper = mount(AppWelcomeMsg, {
    mocks: {
      $t: () => {}
    }
  });

  it("Has a h1 element", () => {
    expect(wrapper.contains("h1")).toBe(true);
  });
});
