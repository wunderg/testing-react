import { renderComponent, expect } from '../test_helper.js';
import CommentList from '../../src/components/comment_list.js';


describe('CommentList', () => {
  let component;

  beforeEach(() => {
    const props = { comments: ['New Comment', 'Other New Comments']};
    component = renderComponent(CommentList, null, props);
  });

  it('show an LI element for each comment', () => {
    expect(component.find('li').length).to.equal(2);
  });

  it('shows each comment that is provided', () => {
    expect(component).to.contain('New Comment');
    expect(component).to.contain('Other New Comments');
  });
})


