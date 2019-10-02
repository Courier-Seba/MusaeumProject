import { mount } from "@vue/test-utils";
import MuseumDetailView from "@/views/MuseumDetailView";

const wrapper = mount(MuseumDetailView, {
  mocks: {
    $t: () => {}
  },
  propsData: {
    id: "asdf"
  }
});

expect(isNaN(wrapper.props("id"))).toBe(false);
