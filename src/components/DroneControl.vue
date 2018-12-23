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
        @click="sendCommand('takeoff')"
      >
        Take Off
      </button>
      <button
        @click="sendCommand('land')"
      >
        land
      </button>
      <button
        @click="sendCommand('emergency')"
      >
        E Stop
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
