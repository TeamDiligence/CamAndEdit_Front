export const getLocalStream = async () => {
    try {
        const localStream : MediaProvider = await navigator.mediaDevices.getUserMedia({
            audio: true,
            video:true
        });
        // console.log(localStream);
        return localStream;


    } catch (e) {
        console.log(`getUserMedia error: ${e}`);
    }
};