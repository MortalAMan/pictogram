import Raven from 'raven-js';

const sentry_key = '0407e506af464101b8a86b230677e3b7';
const sentry_app = '245446';
export const sentry_url = `https://${sentry_key}@app.getsentry.com/${sentry_app}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
