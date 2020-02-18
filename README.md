# logdna-app
Build web page based on the mockups.
Check out the live link [here](https://ipsasawhney.github.io)

### Setup
Git clone the repository:
`git clone https://github.com/ipsasawhney/ipsasawhney.github.io.git`
To run app, open `index.html` in your browser.

### Assumptions
On submit, messages are sent to mock api server `https://httpbin.org/status/${randomStatusCode}` with random status code. Each time message is sent, server will return either of 200, 202, 500 status code randomly. Based on status code, alert messages are shown for Success or Error.