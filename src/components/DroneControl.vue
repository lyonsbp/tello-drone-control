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
    <div>
      <table>
        <tr>
            <th
              v-for="(val, key) in droneResponse"
              :key="key"
            >
              {{ key }}
            </th>
        </tr>
        <tr>
            <td
              v-for="(val, key) in droneResponse"
              :key="key"
            >
              {{ val }}
            </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import socket from '../socket'
export default {
  data () {
    return {
      command: '',
      droneResponse: null
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
  },
  mounted () {
    socket.on('droneResponse', response => {
      this.droneResponse = response
    })
  }
}
</script>

<style>

</style>
