import RingCentral from 'ringcentral-js-concise'

(async () => {
  const rc = new RingCentral(
    process.env.RINGCENTRAL_CLIENT_ID,
    process.env.RINGCENTRAL_CLIENT_SECRET,
    process.env.RINGCENTRAL_SERVER_URL
  )
  await rc.authorize({
    username: process.env.RINGCENTRAL_USERNAME,
    extension: process.env.RINGCENTRAL_EXTENSION,
    password: process.env.RINGCENTRAL_PASSWORD
  })
  const r = await rc.post('/restapi/v1.0/client-info/sip-provision', {
    sipInfo: [{ transport: 'WSS' }]
  })
  console.log(r.data)
})()
