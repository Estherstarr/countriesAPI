import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../../app/store';
import Countries from '../../pages/Countries';

describe('display countries components', () => {
  test('test if countries component renders in the dom', () => {
    render(
      <Provider store={store}>
        <Countries />
      </Provider>,
    );
    expect(screen.queryByText(/Where is the world?/)).toBeTruthy();
  });
  test('snapshot renders properly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Countries />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
