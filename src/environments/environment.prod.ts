export const environment = {
  production: true,
  wsEndpoint: 'ws://topcamwss.herokuapp.com/',
  RTCPeerConfiguration: {
    username: "3e1a4ec9ff39a03d5093c5fffe230c35a0c9eea8a2b4e5b092f38b6c2784ddf2",
    iceServers: [
        { 
          url: "stun:global.stun.twilio.com:3478?transport=udp", 
          urls: "stun:global.stun.twilio.com:3478?transport=udp" 
        },
        {
            username: "3e1a4ec9ff39a03d5093c5fffe230c35a0c9eea8a2b4e5b092f38b6c2784ddf2",
            credential: "fuhYUA7fRk1ctcwASvYTZW9cDwdxRo1bk3Bsvg5Lyh8=",
            url: "turn:global.turn.twilio.com:3478?transport=udp",
            urls: "turn:global.turn.twilio.com:3478?transport=udp"
        },
        {
            url: "turn:global.turn.twilio.com:3478?transport=tcp",
            username: "3e1a4ec9ff39a03d5093c5fffe230c35a0c9eea8a2b4e5b092f38b6c2784ddf2",
            urls: "turn:global.turn.twilio.com:3478?transport=tcp",
            credential: "fuhYUA7fRk1ctcwASvYTZW9cDwdxRo1bk3Bsvg5Lyh8="
        },
        {
            url: "turn:global.turn.twilio.com:443?transport=tcp",
            username: "3e1a4ec9ff39a03d5093c5fffe230c35a0c9eea8a2b4e5b092f38b6c2784ddf2",
            urls: "turn:global.turn.twilio.com:443?transport=tcp",
            credential: "fuhYUA7fRk1ctcwASvYTZW9cDwdxRo1bk3Bsvg5Lyh8="
        },
    ],
    accountSid: "AC9fc49f2daca960549355aaf9dcda8f1a",
    ttl: "86400",
    password: "fuhYUA7fRk1ctcwASvYTZW9cDwdxRo1bk3Bsvg5Lyh8="
  }
};
