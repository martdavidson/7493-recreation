import {render, waitFor} from '@testing-library/react';
import App, {SOME_SUBSCRIPTION} from './App';
import {MockedProvider} from "@apollo/client/testing";

test('show onSubscriptionData firing on each rerender', async () => {
  const someSubscriptionMockedResponse = {
    someSubscription: {
      id: 'someId'
    }
  };

  const mocks = [
    {
      request: {
        query: SOME_SUBSCRIPTION,
        variables: {id: 'someId'}
      },
      result: {
        data: {
          someSubscriptionMockedResponse
        }
      },
    }
  ];

  render(<MockedProvider mocks={mocks}><App/></MockedProvider>);

  // Wait for something that will never be true.
  await waitFor(() => expect(true).toBeFalsy())

  // Fail the test once the global timeouts set in setupTests.js run out.
  expect(true).toBeTruthy();
});
