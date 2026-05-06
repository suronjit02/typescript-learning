// oop - abstraction: idea get but doing real implementation next time

// 1. interface
// 2. abstract class

/**

// idea
interface MediaPlayer {
  play(): void;
  pause(): void;
  stop(): void;
}

// implementation
class Musicplayer implements MediaPlayer {
  play() {
    console.log("Playing music .....");
  }
  pause() {
    console.log("Pause music .....");
  }
  stop() {
    console.log("Stop music .....");
  }
}

const MezbaPlayer = new Musicplayer();
MezbaPlayer.play();


 */
// -----------------------------------------------------------------

abstract class MediaPlayer {
  abstract play(): void;
  abstract pause(): void;
  abstract stop(): void;
}

class MezbaPlayer extends MediaPlayer {
  play(): void {
    console.log("Playing music ....");
  }
  pause(): void {
    console.log("Pause music ....");
  }
  stop(): void {
    console.log("Stop music ....");
  }
}

const mezbaPlayer1 = new MezbaPlayer();
mezbaPlayer1.play();
