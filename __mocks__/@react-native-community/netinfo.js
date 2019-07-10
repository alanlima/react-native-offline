export default {
  addEventListener: jest.fn(),
  fetch: jest.fn(() => Promise.resolve({ type: 'other', isConnected: false })),
};
