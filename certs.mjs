import debug from 'debug'
import os from 'node:os'
import ip from 'ip'
import {
  exec
} from 'node:child_process'
import PATH from './where-am-i.mjs'
import config from './scripts/js/config.mjs'
import ext from './scripts/js/ext.mjs'
import toSubj from './scripts/js/to-subj.mjs'

const OPTIONS = {
  maxBuffer: 1024 * 2000,
  shell: true,
  stdio: 'inherit'
}

const HOSTNAME = os.hostname()
const ADDRESS = ip.address()
const PLATFORM = os.platform()

const log = debug('@sequencemedia/certificates')
const info = debug('@sequencemedia/certificates:info')
const error = debug('@sequencemedia/certificates:error')

function bat (params) {
  const command = `certs.bat "${toSubj(params)}"`

  info(command)

  return (
    new Promise((resolve, reject) => {
      exec(command, { ...OPTIONS, cwd: PATH }, (e) => (!e) ? resolve() : reject(e))
    })
  )
}

function sh (params) {
  const command = `./certs.sh "${toSubj(params)}"`

  info(command)

  return (
    new Promise((resolve, reject) => {
      exec(command, { ...OPTIONS, cwd: PATH }, (e) => (!e) ? resolve() : reject(e))
    })
  )
}

log('`certs` is awake')

async function app () {
  try {
    await ext(HOSTNAME, ADDRESS)

    const {
      country,
      state,
      locality,
      organisation,
      commonName,
      emailAddress
    } = config

    info({
      country,
      state,
      locality,
      organisation,
      commonName,
      emailAddress
    })

    return (PLATFORM === 'win32')
      ? await bat({
          country,
          state,
          locality,
          organisation,
          commonName,
          emailAddress
        })
      : await sh({
          country,
          state,
          locality,
          organisation,
          commonName,
          emailAddress
        })
  } catch ({
    code = 'N/A',
    message = 'N/A'
  }) {
    error(code, message)

    process.exit(1)
  }
}

export default app()
