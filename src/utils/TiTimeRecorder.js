export default class TiTimeRecorder {
  constructor(){
    this.timeRecordingStarted = null
    this.timeRecordingStopped = null
    this.isTimeRecording = false
  }

  start(){
    if(this.isTimeRecording){
      throw new Error('Time recording is already started!')
    } else {
      this.timeRecordingStarted = new Date()
      this.isTimeRecording = true
    }
  }

  stop(){
    if(!this.isTimeRecording){
      throw new Error("Time recording is not started yet!")
    } else {
      this.timeRecordingStopped = new Date()
      this.isTimeRecording = false
    }
  }

  calc(){
    if(this.timeRecordingStarted && this.timeRecordingStopped){
      return this.timeRecordingStopped.getTime() - this.timeRecordingStarted.getTime()
    } else {
      // throw new Error("Time recording is not started yet!")
      return "Time recording is not started yet!"
    }
  }
}