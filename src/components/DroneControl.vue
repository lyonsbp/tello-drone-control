<template>
  <div>
    <input
      type="text"
      v-model="command"
    />
    <button
      @click="sendCommand(command)"
    >
      Send
    </button>
    <div>
      <button
        @click="takeOff"
      >
        Take Off
      </button>
      <button
        @click="land"
      >
        land
      </button>
    </div>
  </div>
</template>

<script>
import socket from '../socket'
export default {
  data () {
    return {
      command: ''
    }
  },
  methods: {
    sendCommand (command) {
      socket.emit('command', command)
    },
    takeOff () {
      this.sendCommand('takeoff')
    },
    land () {
      this.sendCommand('land')
    }
  }
}
</script>

<style>

</style>
