export default {
  getCurrentConnectivity: jest.fn(),
  isConnectionMetered: jest.fn(),
  addListener: jest.fn(),
  removeListeners: jest.fn(),
  isConnected: {
    fetch: jest.fn(() => Promise.resolve(false)),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
  },
};
