import { shallow } from '@vue/test-utils';
import App from '@/App';

describe('component App.vue', () => {
  test('component has a name', () => {
    const wrapper = shallow(App);
    expect(wrapper.name()).toBe('App');
  });
});
