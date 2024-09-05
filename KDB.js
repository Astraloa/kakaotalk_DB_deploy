/**
 * Based On Legacy API
 */

let KDB = require("Astraloa-KDB" /** @modules : ./modules/Astraloa-KDB */ );

let client = KDB.getInstnace({
    /** @default */
    packageName: 'com.kakao.talk', // KAKAOTALK DATABASE FILE PACKAGE NAME
    reactByMine: false // SELF MESSAGE REACT
});

client.on('message', (data) => {
    let { user, channel } = data;
    if(data.message == '/ㅎㅇ') {
        Api.replyRoom(channel.name, user.name + "님, 안녕하세요.");
    }
});

client.start();

function onStartCompile() {
    client.stop();
}