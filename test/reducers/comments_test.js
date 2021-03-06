import { expect } from '../test_helper.js';
import commentReducer from '../../src/reducers/comments.js';
import { SAVE_COMMENT} from '../../src/actions/types.js';


describe('Comments Reducer', () => {
  it('Handles action with unknown type', () => {
    expect(commentReducer(undefined, {})).to.be.instanceof(Array);
    expect(commentReducer(undefined, {})).to.eql([]);
  })

  it('Hadles action of type SAVE_COMMENT', () => {
    const action = { type: SAVE_COMMENT, payload: 'new comment'};
    expect(commentReducer([], action)).to.eql(['new comment'])
  })

})
