/*
Simple GitHub webhook handler for testing.
It validates a basic push event and logs the branch and commits.
Note: In real deployments, verify X-Hub-Signature for security.
*/
module.exports = (req, res) => {
  const event = req.headers['x-github-event'];
  if (event !== 'push') {
    return res.status(200).json({ message: 'ok - ignored event' });
  }
  const payload = req.body;
  const branch = payload.ref;
  console.log('Received push event on', branch);
  // For lab demo, we just acknowledge
  res.status(200).json({ message: 'push event received', ref: branch });
};
